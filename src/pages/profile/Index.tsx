import { useMutation } from "@tanstack/react-query";
import { editProfile } from "./action";
import { CiEdit } from "react-icons/ci";
import ProfileInput from "../../components/ProfileInput";
import { ChangeEvent, useState } from "react";

interface Payload {
  full_name: string;
  user_id: string;
  username: string;
  email: string;
  is_contirbutor: boolean;
}

interface EditProfileResponse {
  status: "success" | "error";
  message: {
    email: string[];
  };
}

export default function Profile() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [payload, setPayload] = useState<Payload>({
    full_name: "",
    user_id: "",
    username: "",
    email: "",
    is_contirbutor: true,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editProfileMutation = useMutation<EditProfileResponse, Error, Payload>({
    mutationFn: editProfile,
    onSuccess: (data) => {
      if (data?.status === "error") {
        setErrorMessage(data.message.email[0]);
      } else {
        console.log(data);
      }
    },
  });

  console.log(errorMessage)

  const handleEditProfile = () => {
    editProfileMutation.mutate(payload);
  };

  return (
    <main className="lg:pl-7 lg:pr-[91px] lg:px-0 px-5 lg:pt-9 pt-[120px] relative font-inter">
      <div className="w-full flex md:flex-row flex-col justify-between mb-10">
        <p className="text-[22px] font-semibold">Account settings</p>
        <div className="flex flex-row gap-5 mt-5 md:mt-0">
          <button className="font-semibold">Cancel</button>
          <button className="text-white bg-accent w-[99.85px] py-2 rounded-full font-bold">
            Save
          </button>
        </div>
      </div>
      <section className="grid gap-[53px]">
        <div>
          <p className="mb-4 font-semibold text-lg">User Details</p>
          <div className="bg-[#F9F9F9] lg:pl-[54px] lg:px-0 px-5 py-10 rounded-lg flex md:flex-row flex-col place-items-end gap-5">
            <div className="lg:w-[851px] md:w-[500px] w-full grid gap-[22px]">
              <ProfileInput
                handleChange={handleChange}
                value={payload.full_name}
                type="text"
                name="full_name"
                label="Full name"
                placeholder="Amaka Ezeani"
              />
              <ProfileInput
                handleChange={handleChange}
                value={payload.user_id}
                type="text"
                name="user_id"
                label="User ID"
                placeholder="2496908"
              />
              <ProfileInput
                handleChange={handleChange}
                value={payload.username}
                type="text"
                name="username"
                label="Username"
                placeholder="AmyPixels"
              />
              <ProfileInput
                handleChange={handleChange}
                value={payload.email}
                type="email"
                name="email"
                label="Email"
                placeholder="johndoe@email.com"
              />
            </div>
            <button
              onClick={handleEditProfile}
              className="flex items-center gap-2"
            >
              <CiEdit size={20} />
              <p className="text-[#007AFF]">Change</p>
            </button>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-lg">Contact Information</p>
          <div className="bg-[#F9F9F9] lg:pl-[54px] lg:px-0 px-5 py-10 rounded-lg flex md:flex-row flex-col place-items-end gap-5">
            <div className="lg:w-[851px] md:w-[500px] w-full grid gap-[22px]">
              <ProfileInput
                type="text"
                name="address"
                label="Mailing Address"
                placeholder="13 adekunle street, victoria island"
              />
              <ProfileInput
                type="text"
                name="city"
                label="City"
                placeholder="Victoria island"
              />
              <ProfileInput
                type="text"
                name="postalCode"
                label="Postal code"
                placeholder="10001"
              />
              <ProfileInput
                type="text"
                name="country"
                label="Country"
                placeholder="Nigeria"
              />
              <ProfileInput
                type="text"
                name="state"
                label="State/province"
                placeholder="Lagos"
              />
              <ProfileInput
                type="number"
                name="phone"
                label="Phone"
                placeholder="+234 567 890 6789"
              />
            </div>
            <button className="flex items-center gap-2">
              <CiEdit size={20} />
              <p className="text-[#007AFF]">Change</p>
            </button>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-lg">Password</p>
          <div className="bg-[#F9F9F9] lg:pl-[54px] lg:px-0 px-5 py-10 rounded-lg flex md:flex-row flex-col place-items-end gap-5">
            <div className="lg:w-[851px] md:w-[500px] w-full grid gap-[22px]">
              <ProfileInput
                type="password"
                name="address"
                label="Current Password"
                placeholder="********"
              />
              <ProfileInput
                type="password"
                name="city"
                label="New Password"
                placeholder="********"
              />
              <ProfileInput
                type="password"
                name="postalCode"
                label="Confirm Password"
                placeholder="********"
              />
            </div>
            <button className="flex items-center gap-2">
              <CiEdit size={20} />
              <p className="text-[#007AFF]">Change</p>
            </button>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-lg">Payout Information</p>
          <div className="bg-[#F9F9F9] lg:pl-[54px] lg:px-0 px-5 py-10 rounded-lg flex md:flex-row flex-col place-items-end gap-5">
            <div className="lg:w-[851px] md:w-[500px] w-full grid gap-[22px]">
              <ProfileInput
                type="text"
                name="paymentMethod"
                label="Payment method"
                placeholder="Payment method"
              />
              <ProfileInput
                type="text"
                name="bank"
                label="Bank Name"
                placeholder="Access Bank"
              />
              <ProfileInput
                type="text"
                name="AccountNumber"
                label="Account Number"
                placeholder="0987338299"
              />
              <ProfileInput
                type="text"
                name="accountName"
                label="Payment to"
                placeholder="John Doe"
              />
            </div>
            <button className="flex items-center gap-2">
              <CiEdit size={20} />
              <p className="text-[#007AFF]">Change</p>
            </button>
          </div>
        </div>

        <div className="lg:mt-[100px]">
          <p className="mb-4 font-semibold text-lg">Delete account</p>
          <div className="bg-[#F9F9F9] lg:pl-[54px] lg:px-0 px-5 py-10 rounded-lg flex md:flex-row flex-col place-items-end gap-5">
            <div className="lg:w-[851px] md:w-[500px] w-full">
              <p className="text-[#777777]">
                This will remove all of your personal data forever
              </p>
              <button className="text-[#E76767] text-xs">
                Delete my account
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
