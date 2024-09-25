import axios from 'axios';

axios.defaults.debug = false;

export const authApi = async (method, param, data, config) => {
  try {
    const response = await axios({
      method,
      url: `${import.meta.env.VITE_API_URL}/auth/${param}`,
      data,
      headers: {
        'X-CSRF-TOKEN': localStorage.getItem('XEV'),
      },
      ...config
    });

    //DİKKAT AUTH resData sız return oluyor
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
