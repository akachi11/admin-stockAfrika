import { useNavigate } from "react-router-dom";

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="grid justify-center h-[650px]">
      <div className="text-center py-20">
        <p className="text-[89px] text-primary_black font-semibold">404</p>
        <p className="text-4xl text-primary_black font-semibold mb-10">
          Page Not Found
        </p>
        <button
          onClick={() => navigate(-1)}
          className="text-white bg-accent font-semibold text-lg px-6 py-3 rounded"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
