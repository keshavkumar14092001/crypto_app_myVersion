import React from 'react';
import homeBg from '../assets/homeBG.jpg';

const Home = () => {
    return (
        <section className='w-full h-[89vh] flex justify-center items-center bg-gray-300'>
            <div className='w-[90%] md:w-[50%] h-[70%] mx-auto'>
                <img src={homeBg} className="w-full h-full bg-contain rounded-md" alt={"loading"} />
            </div>
        </section>
    )
}

export default Home;