import axios from 'axios';

const URL = "http://localhost:8000";

export const authenticateSignUp = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data)
  } catch (error) {
    console.log("Erroe while calling sign up API", error.message)
  }
}
export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data)
  } catch (error) {
    console.log("Erroe while calling login API", error.message);
    return error.response;
  }
}

export const payWithPaytm = async ({data}) => {
  try {
    let response = await axios.post(`${URL}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("error while caliing paytm api", error)
  }
}