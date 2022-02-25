import endpointUrls from "asset/constants/endpointUrls";
import axios from "axios";
import { toast } from "react-toastify";

const base_url = endpointUrls.baseUrl;

const defaultHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  const token = localStorage.getItem("token");
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
};

const handleError = (error) => {
  if (error?.message) return toast.warning(error.message);
  if (error?.error) return toast.warning(error.error);
  if (error?.StatusDesc) return toast.warning(error.StatusDesc);
  // toast.warning('عملیات با مشکل مواجه شد. دوباره سعی کنید.');
};

const get = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;

  await axios
    .get(base_url + url, {
      params,
      headers: optionalHeaders ? optionalHeaders : { ...defaultHeaders() },
    })
    .then((res) => (data = res.data))
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
    });

  return { isSuccess, data, error };
};

const post = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;

  await axios
    .post(base_url + url, params, {
      headers: optionalHeaders ? optionalHeaders : { ...defaultHeaders() },
    })
    .then((res) => (data = res.data))
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
    });

  return { isSuccess, data, error };
};

const put = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;

  await axios
    .put(base_url + url, params, {
      headers: optionalHeaders ? optionalHeaders : { ...defaultHeaders() },
    })
    .then((res) => (data = res.data))
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
    });

  return { isSuccess, data, error };
};

const remove = async (url, params, optionalHeaders, noError) => {
  let isSuccess = true;
  let data;
  let error;

  await axios
    .delete(base_url + url, {
      params,
      data: params,
      headers: optionalHeaders ? optionalHeaders : { ...defaultHeaders() },
    })
    .then((res) => (data = res.data))
    .catch((err) => {
      isSuccess = false;
      error = err.response?.data;
      !noError && handleError(error);
    });

  return { isSuccess, data, error };
};

const apiServices = { get, post, put, remove };
export default apiServices;
