
import ThemeContext from '@/app/context/ThemeContext';
import React, { useContext } from 'react';


const useTheme = () => {
    const theme = useContext(ThemeContext);
    const isClient = typeof window !== 'undefined';
    if (!isClient && !theme) return {}
    if (!theme) {
        throw new error('You must warp your application with ThemeProvider to use the useTheme')
    }
    return theme;
};

export default useTheme;