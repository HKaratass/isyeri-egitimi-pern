import axios from 'axios';

axios.defaults.debug = false;

export const sendPaperApi = async (data, config) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${import.meta.env.VITE_API_URL}/send-paper`,
      data,
      headers: {
        'X-CSRF-TOKEN': localStorage.getItem('XEV'),
      },
      ...config
    });

    return {
      ...response.data,
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
