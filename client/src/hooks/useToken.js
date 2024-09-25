import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'


const useToken = () => {
    const [token, setToken] = useState('');
    useEffect(() =>{
        setToken(Cookies.get('_CHECK') || '');
    }, []);
  return [token]
}


export default useToken