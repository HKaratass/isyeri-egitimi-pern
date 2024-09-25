import { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

const useCustomMutation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (url, data) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, data);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      setError(error);
      throw error;
    }
  };

  return {
    mutate,
    isLoading,
    error,
  };
};

export default useCustomMutation;