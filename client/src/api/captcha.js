import axios from 'axios';

axios.defaults.debug = false;

export const captchaApi = async (config, forPaper) => {
  try {
    const response = await axios({
      method: "get",
      url: forPaper ? `${import.meta.env.VITE_CAPTCHA_URL}/token_paper` : `${import.meta.env.VITE_CAPTCHA_URL}/token`,
      ...config
    });

    //DİKKAT CAPTCHA resData sız return oluyor
    return response.data;
  } catch (error) {
    if (error.response.data.authOut) {
      alert(`${error.response.data.code} - OTURUM KAPATILIYOR`)
      return window.location.href = "/admin/dashboard";
    }
    throw {
      data: error.response.data,
      status: error.response.status,
    };
  }
};
