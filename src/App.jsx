import { useEffect, useState } from 'react';
import Card from './components/Card';
import ToggleDark from './components/ToggleDark';
import ThemeCard from './components/ThemeCard';
import ThemeSelect from './components/ThemeSelect';

const App = () => {
    //#region using traditional dark mode
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem('isDark'))
    );
    useEffect(() => {
        if (isDark === null) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        }
        localStorage.setItem('isDark', JSON.stringify(isDark));
    }, [isDark]);
    //#endregion

    //#region making custom themes
    const [theme, setTheme] = useState(
        JSON.parse(localStorage.getItem('theme'))
    );
    useEffect(() => {
        if (!theme) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }
        localStorage.setItem('isDark', JSON.stringify(theme));
    }, [theme]);
    //#endregion
    return (
        <div className={`min-h-screen  max-w-full p-4`}>
            <h1 className='text-center text-7xl m-6'>Dark Mode!</h1>
            <div
                className={`dark:text-white dark:bg-slate-600 ${
                    isDark ? 'dark' : ''
                }`}
            >
                <ToggleDark isDark={isDark} setIsDark={setIsDark} />
                <Card />
            </div>
            <div className={`bg-main text-content ${theme ? theme : ''}`}>
                <ThemeSelect theme={theme} setTheme={setTheme} />
                <ThemeCard />
            </div>
        </div>
    );
};

export default App;
