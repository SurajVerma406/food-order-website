import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="pizza h-screen">
                <div className="text-white max-w-screen-xl mx-auto flex justify-center items-end h-full px-3 md:px-16 lg:px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-start gap-10 flex-col py-10 md:p-10">
                        <div className="Playfair-display flex flex-col">
                            <h3 className="text-2xl font-semibold tracking-[5px] uppercase">Fresh Food Everyday</h3>
                            <p className="text-[18px] source-sans-3 my-4">Our Restaurant is a family-owned restaurant that has been proudly serving around the 1940s located on the corner of Broadway and West 112th Street in New York, <Link className='text-orange-500 hover:text-orange-600' to="/">learn more</Link>.</p>
                            <div className="flex gap-2">
                                <Link to='/' className='text-3xl hover:text-orange-600'><iconify-icon icon="iconoir:facebook"></iconify-icon></Link>
                                <Link to='/' className='text-3xl hover:text-orange-600'><iconify-icon icon="ri:twitter-line"></iconify-icon></Link>
                                <Link to='/' className='text-3xl hover:text-orange-600'><iconify-icon icon="ri:instagram-line"></iconify-icon></Link>
                                <Link to='/' className='text-3xl hover:text-orange-600'><iconify-icon icon="hugeicons:youtube"></iconify-icon></Link>
                                <Link to='/' className='text-3xl hover:text-orange-600'><iconify-icon icon="ri:pinterest-line"></iconify-icon></Link>
                            </div>
                        </div>
                        <div className="Playfair-display grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 text-start lg:text-center">
                            <div className="">
                                <span className='text-7xl'><iconify-icon icon="arcticons:foodora"></iconify-icon></span>
                                <h3 className="text-xl font-normal uppercase">our menu</h3>
                            </div>
                            <div className="">
                                <span className='text-7xl'><iconify-icon icon="arcticons:foodie"></iconify-icon></span>
                                <h3 className="text-xl font-normal uppercase">specials</h3>
                            </div>
                            <div className="">
                                <span className='text-7xl'><iconify-icon icon="arcticons:emoji-pot-of-food"></iconify-icon></span>
                                <h3 className="text-xl font-normal uppercase">drinks</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
