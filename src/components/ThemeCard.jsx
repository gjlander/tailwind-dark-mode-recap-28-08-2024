const ThemeCard = () => {
    return (
        <div className='shadow-xl hover:shadow-2xl hover:cursor-pointer w-1/2 max-w-[500px] rounded-md m-auto p-10 bg-card'>
            <figure className='rounded-t-md overflow-hidden'>
                <img
                    className='w-full'
                    src='https://cdn.openart.ai/published/0F291PE3J060JXZAjHX1/4qP6A5RM_bjDX_1024.webp'
                    alt='Red Dragonborn Paladin'
                />
            </figure>
            <div className='flex flex-col px-4 py-2 rounded-b-md bg-card-body'>
                <h2 className='text-4xl border-b-2 mb-4'>
                    Kaladan the Paladin
                </h2>
                <ul>
                    <li className='my-1 text-xl'>Level: 12</li>
                    <li className='my-1 text-xl'>Race: Dragonborn</li>
                    <li className='my-1 text-xl'>Class: Paladin</li>
                    <li className='my-1 text-xl'>Background: Noble</li>
                </ul>
                <button className='self-end py-2 px-4 rounded-md bg-btn-primary'>
                    See more
                </button>
            </div>
        </div>
    );
};

export default ThemeCard;
