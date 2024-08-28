const ToggleDark = ({ isDark, setIsDark }) => {
    return (
        <div>
            <label className='flex cursor-pointer gap-2'>
                <input
                    className='accent-red-500'
                    type='checkbox'
                    checked={isDark}
                    onChange={() => setIsDark((prev) => !prev)}
                />
                <span>Dark Mode?</span>
            </label>
        </div>
    );
};

export default ToggleDark;
