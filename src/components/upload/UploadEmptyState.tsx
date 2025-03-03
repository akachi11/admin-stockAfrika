interface UploadEmptyStateProps {
  heading: string;
}

export default function UploadEmptyState({ heading }: UploadEmptyStateProps) {
  return (
    <div className="w-[365px] flex flex-col items-center gap-5 text-center">
      <p className="text-[28px] font-bold text-primary_black">{heading}</p>
      <p className="text-sm text-primary_black">
        Get started by uploading files to submit.
      </p>
      <button className="flex items-center gap-3 px-16 py-3 bg-accent text-white rounded-full text-base font-bold">
        <p>Upload Content</p>
      </button>
    </div>
  );
}
