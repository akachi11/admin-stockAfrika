import axios from "axios";
import { getToken } from "../../services/AuthServices";
import { baseAPI } from "../../utils/apiUrls";

export const saveDraft = async (data: object) => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error("Authentication token is missing.");
    }

    const response = await axios.post(`${baseAPI}/contributor/draft/`, data, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error,
    };
  }
};

export const createStock = async (data: object) => {
  console.log(data)
  try {
    const token = getToken();

    console.log(token)

    if (!token) {
      throw new Error("Authentication token is missing.");
    }

    const response = await axios.post(`${baseAPI}/contributor/stock/`, data, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error,
    };
  }
};
