import { Link } from "react-router-dom";
import bg from "../../assets/accessbg.jpg";
import logo from "../../assets/mainlogo.png";
import Input from "../../components/Input";
import { useState } from "react";

// Define types for state
interface ForgotPasswordState {
  email: string;
  loginStatus: boolean;
}

export default function ForgotPassword() {
  // State types are inferred from the interface
  const [state, setState] = useState<ForgotPasswordState>({
    email: "",
    loginStatus: false,
  });

  // Function to check if the email input is empty or invalid
  const emptyInputs = (): boolean => {
    return !state.email || !/\S+@\S+\.\S+/.test(state.email); // Simple email validation
  };

  // Update email state when input changes
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  return (
    <main
      className="w-full h-[1024px] flex flex-col"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center lg:justify-between lg:py-10 lg:px-20 px-5 py-5">
        <Link to="/">
          <div className="lg:w-[220px] w-[181px] lg:h-[33px] h-[74px] mt-16 lg:mt-0">
            <img className="w-full h-full object-contain" src={logo} alt="" />
          </div>
        </Link>
        <p className="hidden lg:block font-inter text-xl leading-[36px] tracking-wide">
          CONTRIBUTORS
        </p>
      </div>
      <div className="flex-1 w-full grid justify-center mt-10 lg:mt-2">
        <div className="w-[358px] h-[537px] bg-[#ffffffb5] px-5 py-[57px] rounded">
          <p className="text-2xl font-open_sauce font-medium text-center mb-[38px]">
            Reset Password
          </p>
          <div className="grid gap-4">
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={state.email}
              handleChange={handleEmailChange}
            />
          </div>
          <button
            className={`${
              emptyInputs() ? "bg-gray-400" : "bg-accent border"
            } mt-5 border-white text-white font-bold lg:text-sm text-[10px] rounded-full lg:px-6 py-3 px-3 w-full flex items-center justify-center gap-2`}
            disabled={emptyInputs()}
          >
            Reset Password
            {state.loginStatus && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200 animate-spin fill-white"
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
          </button>
          <div className="w-[70%] h-[1px] bg-primary_black mx-auto mt-[35px] mb-[23px]"></div>
          <p className="text-sm text-[#828282] font-open_sauce font-medium leading-[17px] text-center">
            Don’t have an account?
          </p>
          <div className="flex justify-center">
            <Link
              to="/sign-up"
              className="font-bold text-accent text-sm leading-[17px] mt-[8px]"
            >
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
