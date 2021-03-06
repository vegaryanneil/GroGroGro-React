import React from 'react'
import {Link} from 'react-router-dom';
const Hero = () => {
    return (
        <div>
            <div className="bg-white h-screen flex flex-col justify-center items-center">
                <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                    GroGroGro
                </h1>
                <Link to='SignUp' className="py-6 px-10 bg-yellow-500 rounded-full text-3xl focus:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce">
                    Get Started
                    <svg className="w-6 h-6 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>           
                </Link>
            </div>
        </div>
    )
}

export default Hero
