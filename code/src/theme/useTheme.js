import { useEffect, useState } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false);

    const setMode = mode => {
        localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
        setMountedComponent(true);
    }, []);
    
    return [theme, themeToggler, mountedComponent];
};
