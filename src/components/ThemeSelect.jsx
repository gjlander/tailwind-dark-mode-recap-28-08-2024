const ThemeSelect = ({ theme, setTheme }) => {
    return (
        <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className='bg-main'
        >
            <option value=''>--Choose your theme--</option>
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
            <option value='red'>Red</option>
        </select>
    );
};

export default ThemeSelect;
