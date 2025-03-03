import UploadBtn from "../../components/upload/UploadBtn";
import Guides from "./Guides";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Uploads() {
  const navigate = useNavigate();

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    selectionType: string
  ) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const formData = new FormData();

      if (selectionType === "multiple") {
        files.forEach((file) => formData.append("files", file));

        const imageUrl = files.map((file) => ({
          id: uuidv4(),
          name: file.name,
          imgUrl: URL.createObjectURL(file),
          file: file,
        }));
        navigate("/uploads/dashboard", { state: { imageUrl } });
      } else {
        files.forEach((file) => formData.append("file", file));

        const imageUrl = files.map((file) => ({
          id: uuidv4(),
          name: file.name,
          imgUrl: URL.createObjectURL(file),
          file: file,
        }));
        navigate("/uploads/dashboard", { state: { imageUrl } });
      }
    }
  };

  return (
    <main className="lg:px-7 px-5 lg:pt-9 pt-[120px] pb-9 flex lg:flex-row flex-col gap-5 font-inter">
      <div className="flex-1 bg-[#F2F2F2] rounded grid place-items-center py-10 px-5">
        <div className="flex-1 flex flex-col items-center lg:w-[510px] w-full">
          <div className="lg:w-[454px] w-full">
            <p className="lg:text-[42px] text-[32px] lg:leading-[50px] leading-[40px] font-bold">
              Share your work - <span className="text-accent">Get Paid</span>{" "}
              and Recognized
            </p>
          </div>
          <div className="flex gap-5 items-center flex-col my-[80px]">
            <UploadBtn
              handleImageChange={(e) => handleImageChange(e, "single")}
              enableMultiple={false}
              text="Upload Asset"
            />
            <div className="flex gap-5 items-center justify-center">
              <div className="w-[60px] h-[2px] bg-primary_black"></div>
              <p className="leading-6 text-[22px]">or</p>
              <div className="w-[60px] h-[2px] bg-primary_black"></div>
            </div>
            <UploadBtn
              handleImageChange={(e) => handleImageChange(e, "multiple")}
              enableMultiple={true}
              text="Upload Collection"
            />
          </div>
          <p>
            Now that you have created a masterpiece, do not let it lay idle on
            your hard drive. Your masterpiece could be helpful in marketing,
            creative designs and showing the world how beautiful Africa is.
            Simply upload your work on our platform.
          </p>
        </div>
      </div>
      <div className="lg:w-[431px] w-full">
        <Guides />
      </div>
    </main>
  );
}
