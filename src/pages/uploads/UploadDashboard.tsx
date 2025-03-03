import { useEffect, useState } from "react";
import UploadEmptyState from "../../components/upload/UploadEmptyState";
import { IoMdCheckmark } from "react-icons/io";
import { RiDeleteBin6Line, RiSaveLine } from "react-icons/ri";
import ImageBox from "../../components/upload/FileBox";
import EditModal from "./EditModal";
import { useLocation } from "react-router-dom";
import { getToken } from "../../services/AuthServices";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { saveDraft, createStock } from "./action";
import LoadingSpinner from "../../components/LoadingSpinner";
import { baseAPI } from "../../utils/apiUrls";

type ActiveEditedObject = {
  name?: string;
  main_file?: string;
  imgUrl?: string;
  description?: string;
  keywords?: string[];
  location?: string;
  explicit?: boolean;
  fileType?: string;
  usageType?: string;
  releaseForm?: string[];
};

interface FileObject {
  id: string;
  name: string;
}
export interface ImageObject {
  id: string;
  imgUrl: string;
  name: string;
  main_file: string;
  description?: string; // optional field, can be undefined if not provided
  keywords?: string[]; // optional field, array of strings
  location?: string; // optional field
  explicit?: boolean; // optional field, boolean
  fileType?: string; // optional field
  usageType?: string; // optional field
  releaseForm?: string[]; // optional field, array of strings
  matured_content?: boolean; // optional field, boolean
  type?: string; // optional field
  usage_rights?: string; // optional field
  file?: string
}

type UploadedImage = {
  id?: number;
  imgUrl?: string;
  name?: string;
  usageType?: string;
  description?: string;
  keywords?: string;
  explicit?: boolean;
  releaseForm?: string[];
  fileType?: string;
  main_file?: string;
  location?: string;
};

export default function UploadDashboard() {
  const [data] = useState<UploadedImage[]>();
  const [tab, setTab] = useState<number>(0);
  const [toggleEditMode, setToggleEditMode] = useState<boolean>(false);
  const [activeEditedObject, setActiveEditedObject] = useState<
    ImageObject | object
  >({});
  const [fetchedCollections, setFetchedCollections] = useState<
    ImageObject[] | undefined
  >([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [payload, setPayload] = useState<ActiveEditedObject>({
    name: "",
    main_file: "",
    description: "",
    keywords: [],
    explicit: false,
    fileType: "",
    usageType: "",
    location: "",
    releaseForm: [],
    imgUrl: "",
  });

  const showError = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 6000);
  };

  const handleDataChange = (updatedData: Partial<ActiveEditedObject>) => {
    setPayload((prev) => ({ ...prev, ...updatedData }));
  };

  const location = useLocation();
  const { imageUrl } = location.state || {};

  const handleImageSelect = async (file: ImageObject) => {
    // console.log(file);
    if (
      activeEditedObject &&
      (activeEditedObject as FileObject).id === file.id
    ) {
      setPayload({
        name: "",
        main_file: "",
        description: "",
        keywords: [],
        explicit: false,
        fileType: "",
        usageType: "",
        location: "",
        releaseForm: [],
        imgUrl: "",
      });
      setActiveEditedObject({});
    } else {
      let selectedFile: ImageObject | undefined;

      if (file.imgUrl && file.imgUrl.startsWith("blob:")) {
        selectedFile = imageUrl.find(
          (image: ImageObject) => image.id === file.id
        );
        if (selectedFile) {
          setActiveEditedObject(selectedFile);
        } else {
          setActiveEditedObject({});
        }
        setPayload((prev) => {
          return {
            ...prev,
            name: selectedFile?.name,
            main_file: selectedFile?.file,
            imgUrl: selectedFile?.imgUrl,
          };
        });
        setToggleEditMode(true);
      } else if (file.main_file) {
        const selectedFile: ImageObject = { ...file, imgUrl: file.main_file };
        setActiveEditedObject(selectedFile);
        setPayload((prev) => ({
          ...prev,
          name: selectedFile.name,
          main_file: selectedFile.main_file || prev.main_file,
          imgUrl: selectedFile.imgUrl,
          description: selectedFile.description || prev.description,
          keywords: Array.isArray(selectedFile.keywords)
            ? selectedFile.keywords
            : prev.keywords, // Ensure keywords is an array
          location: selectedFile.location || prev.location,
          explicit: selectedFile.explicit || prev.explicit,
          fileType: selectedFile.fileType || prev.fileType,
          usageType: selectedFile.usageType || prev.usageType,
          releaseForm: selectedFile.releaseForm || prev.releaseForm,
        }));
        setToggleEditMode(true);
      }
    }
  };

  const fetchCollections = async () => {
    try {
      const token = getToken();
      const response = await axios.get(
        `${baseAPI}/contributor/drafts/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setFetchedCollections(response?.data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  const saveDraftMutation = useMutation({
    mutationFn: saveDraft,
    onSuccess: (data) => {
      console.log(data);
      fetchCollections();
      setToggleEditMode(false);
      if (data?.status === "error") {
        setErrorMessage(data.message.email[0]);
      }
    },
  });

  const createStockMutation = useMutation({
    mutationFn: createStock,
    onSuccess: (data) => {
      console.log(data);
      fetchCollections();
      setToggleEditMode(false);
      if (data?.status === "error") {
        setErrorMessage(data.message.email[0]);
      }
    },
  });

  const handleSaveDraft = (object: ActiveEditedObject) => {
    setErrorMessage("");
    if (!object.main_file || !object.keywords) {
      showError("Keywords are required!");
      return;
    }
    const newPayload = {
      user: 1,
      ...object,
    };
    saveDraftMutation.mutate(newPayload);
  };

  const handleCreateStock = (object: ActiveEditedObject) => {
    setErrorMessage("");
    if (!object.main_file || !object.keywords) {
      showError("Keywords are required!");
      return;
    }
    const newPayload = {
      user: 1,
      ...object,
      keywords: "test",
      category: 1,
      type: "Image"
    };
    console.log(newPayload)
    createStockMutation.mutate(newPayload);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <main className="lg:pt-0 pt-[100px] relative">
      <div className="bg-white lg:px-14 px-5 w-full flex justify-between">
        <div className="flex gap-6 w-full">
          <button
            onClick={() => setTab(0)}
            className={`${tab === 0
              ? "border-accent font-bold"
              : "text-primary_black border-transparent"
              } py-4 border-b-[6px] transition-all duration-200 ease-linear text-sm`}
          >
            Upload
          </button>
          <button
            onClick={() => setTab(1)}
            className={`${tab === 1
              ? "border-accent font-bold"
              : "text-primary_black border-transparent"
              } py-4 border-b-[6px] transition-all duration-200 ease-linear text-sm`}
          >
            Saved
          </button>
          <button
            onClick={() => setTab(2)}
            className={`${tab === 2
              ? "border-accent font-bold"
              : "text-primary_black border-transparent"
              } py-4 border-b-[6px] transition-all duration-200 ease-linear text-sm`}
          >
            Submitted
          </button>
          <button
            onClick={() => setTab(3)}
            className={`${tab === 3
              ? "border-accent font-bold"
              : "text-primary_black border-transparent"
              } py-4 border-b-[6px] transition-all duration-200 ease-linear text-sm`}
          >
            Release Forms
          </button>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center flex-col outline-none">
            <IoMdCheckmark />
            <p className="text-xs text-primary_black leading-3 mt-[3px]">
              Multiple
            </p>
          </button>
          <button className="flex items-center flex-col outline-none">
            <RiDeleteBin6Line />
            <p className="text-xs text-primary_black leading-3 mt-[3px]">
              Delete
            </p>
          </button>
          {saveDraftMutation.isPending ? (
            <LoadingSpinner />
          ) : (
            <button
              onClick={
                !toggleEditMode
                  ? () => setToggleEditMode(!toggleEditMode)
                  : () => handleSaveDraft(payload)
              }
              className="flex items-center flex-col outline-none"
            >
              <RiSaveLine />

              <p className="text-xs text-primary_black leading-3 mt-[3px] w-[34px]">
                {toggleEditMode ? "Save" : "Edit"}
              </p>
            </button>
          )}
        </div>
      </div>
      <div
        className={`${toggleEditMode ? "w-[75%]" : "w-full "
          } min-h-[600px]  duration-300 transition-all ease-linear`}
      >
        {tab === 0 && (
          <div className="relative">
            {data?.length === 0 ? (
              <div className="grid justify-center mt-40">
                <UploadEmptyState heading="No Content Uploaded Yet" />
              </div>
            ) : (
              <div className="lg:px-14 px-5 py-14">
                <p className="text-red-500 text-sm absolute right-[15%] top-5">
                  {errorMessage}
                </p>

                <div className="flex gap-5 flex-wrap ease-linear duration-200 transition-all">
                  {imageUrl?.map((img: ImageObject) => (
                    <ImageBox
                      handleSelectFile={() => handleImageSelect(img)}
                      active={activeEditedObject as ImageObject}
                      id={img.id}
                      key={img.id}
                      name={img?.name}
                      imageUrl={img?.imgUrl}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {tab === 1 && (
          <div>
            {data?.length === 0 ? (
              <div className="grid justify-center mt-40">
                <UploadEmptyState heading="You currently have no saved content" />
              </div>
            ) : (
              <div className="lg:px-14 px-5 py-14">
                <div className="flex gap-5 flex-wrap ease-linear duration-200 transition-all">
                  {fetchedCollections?.map((img: ImageObject) => {
                    return (
                      <ImageBox
                        handleSelectFile={() => handleImageSelect(img)}
                        active={activeEditedObject as ImageObject}
                        id={img.id}
                        key={img.id}
                        name={img?.name}
                        imageUrl={img?.main_file}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
        {tab === 2 && (
          <div>
            {data?.length === 0 ? (
              <div className="grid justify-center mt-40">
                <UploadEmptyState heading="You currently have no Submitted content" />
              </div>
            ) : (
              <div>edit here</div>
            )}
          </div>
        )}
        {tab === 3 && (
          <div>
            {data?.length === 0 ? (
              <div className="grid justify-center mt-40">
                <UploadEmptyState heading="You currently have no Submitted content" />
              </div>
            ) : (
              <div>edit here</div>
            )}
          </div>
        )}
      </div>
      <div
        className={`${toggleEditMode ? "translate-x-0" : "translate-x-[500px]"
          } absolute h-full bg-white w-[35%] top-[53px] right-0 duration-300 transition-all ease-linear`}
      >
        <div className="">
          {Object.entries(activeEditedObject).length === 0 ? (
            <div className="h-full grid place-items-center pt-28">
              <div className="w-[245px] flex flex-col items-center gap-5 text-center">
                <p className="text-[28px] font-bold text-primary_black">
                  Select a file to edit details
                </p>
                <p className="text-sm text-[#B0B0B0]">
                  Select multiple items by clicking the checkboxes
                </p>
              </div>
            </div>
          ) : (
            <EditModal
              loading={createStockMutation.isPending}
              handleCreateStock={handleCreateStock}
              data={payload}
              onDataChange={handleDataChange}
            />
          )}
        </div>
      </div>
    </main>
  );
}
