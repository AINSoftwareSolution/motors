import { useState, useEffect } from 'react';

const useToken = () => {
    const [token, setToken] = useState<string | null>();
    const t = typeof window !== 'undefined' ?  localStorage.getItem('token') :''

    useEffect(() => {
        // Check if the window object is available to ensure code runs only in the browser
        if (typeof window !== 'undefined') {
            const savedToken = localStorage.getItem('token');
            if (savedToken) {
                setToken(savedToken);
            } else {
                console.log('No token found in localStorage');
            }
        }
    }, []);

    return t;
};

export default useToken;
