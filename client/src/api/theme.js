import axios from 'axios';

axios.defaults.debug = false;

export const themeApi = async (method, param, data, config) => {
  try {
    const response = await axios({
      method,
      url: `${import.meta.env.VITE_API_URL}/theme/${param}`,
      data,
      ...config
    });

    //DİKKAT USER resData sız return oluyor
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
