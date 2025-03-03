import axios from "axios";
import { returnErrorMessage } from "../../utils/errorManager";
import { getToken } from "../../services/AuthServices";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const saveDraft = async (data: object) => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error("Authentication token is missing.");
    }

    const response = await axios.post(`${BASE_URL}/contributor/draft/`, data, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: returnErrorMessage(error),
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

    const response = await axios.post(`${BASE_URL}/contributor/stock/`, data, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: returnErrorMessage(error),
    };
  }
};
