import {getToken} from "./authToken";
import Axios from "axios";

// 요청 보낼때마다 헤더에 토큰 담아서 보내기
const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(
  (config) => {
    if (config.headers) {
      const token = getToken();
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const {response: errorResponse} = error;
    const originalRequest = error.config;

    // 인증 에러 발생시
    if (errorResponse.status === 401) {
      return await axios(originalRequest);
    }
    // 400 중복 이메일 있을때
    if (errorResponse.status === 400) {
      alert("해당 이메일은 이미 존재합니다!");
    }
    return Promise.reject(error);
  }
);

export default axios;
