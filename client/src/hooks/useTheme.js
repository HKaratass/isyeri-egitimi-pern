import { themeApi } from '@/api/theme';
import { useQuery } from '@tanstack/react-query';

const useTheme = () => {
  const { data } = useQuery({
    queryKey: ['theme'],
    queryFn: () => {
      return themeApi('get', '', null, {
        withCredentials: true
      });
    },
    refetchOnWindowFocus: false,
  })
  const theme = data?.theme;
  localStorage.setItem('XEV', data?.XEV);
  return [theme];
};

export default useTheme;