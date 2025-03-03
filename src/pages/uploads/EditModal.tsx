import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineEdit, AiOutlineUpload } from "react-icons/ai";
import { FiInfo } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

interface ActiveEditedObject {
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
}


interface EditModalProps {
  loading: boolean;
  handleCreateStock: (data: ActiveEditedObject) => void;
  data: ActiveEditedObject;
  onDataChange: (data: ActiveEditedObject) => void;
}

export default function EditModal({
  loading,
  data,
  onDataChange,
  handleCreateStock,
}: EditModalProps): JSX.Element {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    onDataChange({
      [name]: value,
    });
  };

  const [editing, setEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      const length = inputRef.current.value.length;
      inputRef.current.focus();
      inputRef.current.setSelectionRange(length, length); // Move cursor to the end
    }
  }, [editing]);

  const checkFields = () => {
    if (
      !data?.name ||
      !data?.description ||
      // !data?.keywords ||
      !data?.fileType ||
      !data?.usageType
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="h-screen">
      <div className="bg-white px-[30px] pt-[30px] pb-[100px] grid gap-10 overflow-y-scroll">
        <div className="flex gap-2 items-center">
          <div className="w-[80px] h-[80px]">
            <img
              className="w-full h-full object-cover object-top"
              src={data?.imgUrl}
              alt={data?.name || "Preview"}
            />
          </div>
          <div className="relative flex-1">
            <input
            ref={inputRef}
              className="border-b font-bold border-primary_black outline-none h-fit w-[80%]"
              type="text"
              name="name"
              value={data?.name}
              onChange={handleChange}
              readOnly={!editing}
            />
            <div onClick={() => setEditing(!editing)} className="absolute top-1/3 -translate-x-1/2 right-1">
              {editing ?
                <AiOutlineCheck size={20} />
                :
                <AiOutlineEdit size={20} />
              }
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <p className="font-bold">File Type</p>
            <FiInfo />
          </div>
          <div className="flex gap-4 mt-3">
            <button
              onClick={() => onDataChange({ ...data, fileType: "photo" })}
              className={`${data?.fileType === "photo"
                  ? "bg-accent text-white"
                  : "bg-white text-accent"
                }  w-1/2 border border-accent py-3 rounded-md text-xs font-bold`}
            >
              Photo
            </button>
            <button
              onClick={() =>
                onDataChange({ ...data, fileType: "illustration" })
              }
              className={`${data?.fileType === "illustration"
                  ? "bg-accent text-white"
                  : "bg-white text-accent"
                }  w-1/2 border border-accent py-3 rounded-md text-xs font-bold`}
            >
              Illustration
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Usage Type</p>
            <FiInfo />
          </div>
          <div className="flex gap-4 mt-3">
            <button
              onClick={() => onDataChange({ ...data, usageType: "commercial" })}
              className={`${data?.usageType === "commercial"
                  ? "bg-accent text-white"
                  : "bg-white text-accent"
                }  w-1/2 border border-accent py-3 rounded-md text-xs font-bold`}
            >
              Commercial
            </button>
            <button
              onClick={() => onDataChange({ ...data, usageType: "editorial" })}
              className={`${data?.usageType === "editorial"
                  ? "bg-accent text-white"
                  : "bg-white text-accent"
                }  w-1/2 border border-accent py-3 rounded-md text-xs font-bold`}
            >
              Editorial
            </button>
          </div>
        </div>

        <div>
          <textarea
            placeholder="Type description here"
            className="border rounded-md w-full placeholder:italic text-xs p-3"
            rows={3}
            name="description"
            id="description"
            value={data?.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Keywords</p>
            <FiInfo />
          </div>
          <input
            placeholder="Separate multiple keywords with a comma ,"
            className="border rounded-md w-full placeholder:italic text-xs p-3 mt-3"
            name="keywords"
            id="keywords"
            // value={data?.keywords}
            // onChange={handleChange}
          />
          <div className="grid place-items-center mt-[54px]">
            <button className="bg-white text-accent w-1/2 border border-accent py-3 rounded-md text-xs font-bold">
              Auto Generate
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-5">
            <input
              className="cursor-pointer"
              type="checkbox"
              name="explicit"
              checked={data?.explicit}
              onChange={handleChange}
            />
            <div className="flex items-center gap-3">
              <p className="font-bold">Mature Content</p>
              <FiInfo />
            </div>
          </div>
        </div>

        <div>
          <input
            placeholder="Location (Optional)"
            className="border rounded-full w-full text-xs p-3 mt-3"
            name="location"
            id="location"
            value={data.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <p className="font-bold">Release Form</p>
            <FiInfo />
          </div>
          <div className="relative mt-3 rounded-md overflow-hidden border">
            <input
              placeholder="upload new release form"
              className="placeholder:italic w-full text-xs pl-7 py-3 pr-3"
              name="release"
              id="release"
              value={data?.releaseForm}
              onChange={handleChange}
            />
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <IoDocumentTextOutline color="#2F2F2F" />
            </div>
            <button className="bg-accent text-white absolute px-2 top-1/2 h-full -translate-y-1/2 right-0">
              <AiOutlineUpload size={30} />
            </button>
          </div>
          <p className="text-xs text-accent font-semibold mt-1">
            Download Release form template
          </p>

          <div className="mt-5">
            <ul className="grid gap-2">
              {data?.releaseForm
                ? data?.releaseForm?.map((form, i) => (
                  <li key={i}>
                    <div className="text-[#B0B0B0] text-xs flex items-center gap-3">
                      <div className="">
                        <IoDocumentTextOutline />
                      </div>
                      <p>{form}</p>
                      <button>
                        <IoMdClose />
                      </button>
                    </div>
                  </li>
                ))
                : null}
            </ul>
          </div>
        </div>

        <div className="mb-10 grid place-items-center">
          <button
            disabled={checkFields()}
            onClick={() => handleCreateStock(data)}
            className={`${checkFields()
                ? "bg-[#c9c9c9] text-[#9b9b9b]"
                : "bg-accent border-accent"
              } text-white w-[60%] border py-3 rounded-full text-xs font-bold duration-200 ease-linear transition-all`}
          >
            <div className="flex items-center justify-center gap-2">
              <p>Submit</p>
              {loading && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-200 animate-spin dark:text-[#b9a699] fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
