import axios from "axios";
import { baseAPI } from "../../utils/apiUrls";

export const signUp = async (data: unknown) => {
  try {
    const res = await axios({
      url: `${baseAPI}/user/contributor_sign_up/`,
      method: "POST",
      data,
    });
    return res.data;
  } catch (error) {
    return { status: "error", message: error};
  }
};