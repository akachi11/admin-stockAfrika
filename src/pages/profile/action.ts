import axios from "axios";
import { getToken } from "../../services/AuthServices";
import { baseAPI } from "../../utils/apiUrls";

export const editProfile = async (data: unknown) => {
  try {
    const res = await axios({
      url: `${baseAPI}/user/contributor_edit_profile/`,
      headers: {
        Authorization: `Token ${getToken()}`,
      },
      method: "PUT",
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error)
    return { status: "error", message: error };
  }
};
