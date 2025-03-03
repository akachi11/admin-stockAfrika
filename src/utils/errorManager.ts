/**
 * Returns an appropriate error message based on the provided error object.
 * @param {Error} error - The error object containing details about the encountered error.
 * @returns {string} An error message corresponding to the type of error encountered.
 */

interface Error {
  response: {status: number, data: string},
  message: string
}

export const returnErrorMessage = (error: Error) => {
  const errorStatus = error?.response?.status;
  if (error.message == 'Network error') {
    return 'It looks like you are offline..., pls check your internet connection';
  } else if (errorStatus >= 400 && errorStatus <= 500) {
    return error.response.data ?? error.message;
  } else {
    return 'Something went wrong, please try again later...';
  }
};
