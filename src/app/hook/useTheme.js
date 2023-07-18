
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

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