import { useState, useEffect } from 'react';

const useToken = () => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        // Get token from localStorage when the component mounts
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    return token;
};

export default useToken;
