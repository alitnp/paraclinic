const endpoints = {
  // baseUrl: 'https://apiisar.inhs.ir/api/v1',
  baseUrl: "http://localhost:3004/api/v1",

  //otp
  setOtp: "/auth/sendOTP",
  verifyOtp: "/auth/verifyOTP",

  //token
  refreshToken: "/auth/token",

  //form
  sendForm: "/users/isargary",

  //user
  getUserByMobile: "/users/user",
};

export default endpoints;
