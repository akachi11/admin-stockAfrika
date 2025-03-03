import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";


interface Guideline {
  id: number;
  guide: string;
  list: string[];
}

export default function Guides() {
  const [selected, setSelected] = useState<number | null>(null);

  const Guidelines: Guideline[] = [
    {
      id: 0,
      guide: "TRANSPARENT PNG",
      list: [
        "Do not include any backgrounds - must be transparent",
        "PNG format only",
        "Minimum image resolution is 4MP",
        "Maximum image resolution is 72MP",
        "Maximum file size is 15MB",
      ],
    },
    {
      id: 1,
      guide: "IMAGES (JPEG FILES)",
      list: [
        "JPEG format only",
        "Minimum image resolution is 4MP",
        "Maximum image resolution is 72MP",
        "Do not compress too much to avoid quality loss",
        "Maximum file size is 15MB",
      ],
    },
    {
      id: 2,
      guide: "VECTOR ILLUSTRATIONS (AI, EPS, SVG)",
      list: [
        "AI, EPS, or SVG format",
        "All fonts must be converted to outlines",
        "No embedded raster images (unless absolutely necessary)",
        "Layers should be organized and labeled properly",
        "File size should be under 50MB",
      ],
    },
    {
      id: 3,
      guide: "VIDEO FOOTAGE (MP4 FILES)",
      list: [
        "MP4 format with H.264 codec",
        "Minimum resolution is 1080p (1920x1080)",
        "Frame rate should be between 24-60fps",
        "Maximum video duration is 5 minutes",
        "Maximum file size is 500MB",
      ],
    },
  ];

  // Toggle function with the 'id' typed as number
  function toggle(i: number): void {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  }

  // Map through the guidelines and render each one
  const item = Guidelines.map((item) => {
    return (
      <div key={item.id} className="bg-[#F2F2F2] rounded-xl px-11 py-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle(item.id)}
        >
          <div className="flex items-center gap-4">
            <h3 className="text-primary_black leading-4 text-sm font-semibold">
              {item.guide}
            </h3>
          </div>
          <div className="relative border-accent p-1">
            <IoChevronDownSharp
              className={`${
                selected === item.id ? "rotate-180" : "rotate-0"
              } absolute top-[50%] -translate-y-[50%] transition-all duration-200 ease-linear text-[#2F2F2F]`}
            />
          </div>
        </div>
        <div
          className={
            selected === item.id
              ? `h-auto max-h-[999px] duration-300 py-5`
              : `max-h-0 overflow-hidden duration-300`
          }
        >
          <div className="font-normal text-sm">
            <ul className="grid gap-1 text-[13px] list-disc text-[#848484]">
              {item.list.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="rounded-xl bg-[#DEDEDE] lg:px-11 px-5 text-center py-5 mb-[10px]">
        <p className="leading-6 lg:text-xl text-lg font-bold">
          Contributor Submission Guidelines
        </p>
      </div>
      <div className="grid gap-[10px]">{item}</div>
      <div className="mt-[39px]">
        <p className="font-bold text-xl leading-[33px]">Need more help?</p>
        <p className="text-sm leading-[23.38px]">
          Visit the{" "}
          <a
            className="underline text-[#3482FF]"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support Center
          </a>{" "}
          for detailed guides and FAQs
        </p>
      </div>
    </div>
  );
}
