import axios from 'axios';

axios.defaults.debug = false;

export const eventApi = async (method, param, data, config) => {
  try {
    const response = await axios({
      method,
      url: `${import.meta.env.VITE_API_URL}/events/${param}`,
      data,
      headers: {
        'X-CSRF-TOKEN': localStorage.getItem('XEV'),
      },
      ...config
    });

    return {
      resData: response.data,
      status: response.status,
    };

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
