import { PiUploadSimple } from "react-icons/pi";

interface UploadBtnProps {
  text: string;
  enableMultiple: boolean;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadBtn({
  text,
  enableMultiple,
  handleImageChange,
}: UploadBtnProps) {
  return (
    <form
      className="flex items-center gap-3 px-6 py-3 border-[1.5px] border-accent text-accent rounded-full text-xl font-bold relative"
      encType="multipart/form-data"
    >
      <input
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-ful opacity-0 cursor-pointer"
        accept="image/*"
        type="file"
        name=""
        id=""
        multiple={enableMultiple}
        onChange={handleImageChange}
      />
      <PiUploadSimple size={24} />
      <p>{text}</p>
    </form>
  );
}
