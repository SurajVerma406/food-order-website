import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="food-order-image">
                <div className="text-white py-20 md:py-36">
                    <div className="md:w-[39rem] relative z-10 left-0 lg:left-32 pt-0 md:pt-20 px-5 lg:px-0">
                        <h1 className="Playfair-display flex flex-col text-[2rem] lg:text-[4rem] xl:text-[6rem] sm:w-80 uppercase leading-[1]">
                            <span className='font-semibold'>Homemade</span>
                            <span className='font-light'>Restaurant</span>
                        </h1>
                        <div className="source-sans-3 w-full sm:w-[20rem] md:w-[32rem]">
                            <p className="text-[18px] mt-3 mb-2 md:mb-5">Savor exquisite dishes crafted with fresh, local ingredients. Each bite offers a burst of flavor, making every meal unforgettable. Image from
                                <Link className="text-orange-500 hover:text-orange-600 font-bold transition-all" to="/"> Unsplash</Link>
                            </p>
                            <button className='text-orange-500 hover:text-orange-600 font-bold uppercase text-xs md:text-[17px] border-b-2 border-current tracking-widest transition-all' type="button">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>




            <section className='relative z-10 h-auto lg:mb-56'>
                <div className="hidden sm:block bg-yellow-400 w-full lg:w-[57rem] h-56 absolute top-0 left-0 -z-10"></div>
                <div className="hidden sm:block bg-orange-400 w-full lg:w-2/6 h-56 absolute bottom-0 right-0 -z-10"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
                    <img className='w-full sm:h-full md:h-full h-[35rem] object-cover' src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/2c75d4d2250c55c69671ac47/53e1dd434950b108f5d08460962934761237d6ed5a4c704c7c2c7bd3964dc05f_1280.jpg" alt="" />

                    <div className="Playfair-display p-3 md:px-10">
                        <h1 className="text-6xl sm:text-8xl font-bold sm:pt-16">Menu</h1>
                        <p className="source-sans-3 text-xl font-semibold mt-4 sm:mt-16 mb-5">Indulge in a curated menu featuring farm-fresh ingredients and innovative flavors. From succulent starters to decadent desserts, each dish is a harmonious blend of tradition and creativity, designed to tantalize your taste buds and elevate your dining experience.</p>
                        <button className='source-sans-3 text-orange-500 hover:text-orange-600 font-bold uppercase text-[17px] border-b-2 border-current transition-all' type="button">learn more</button>
                        <div className="w-60 h-16 bg-black mt-20"></div>
                    </div>
                    <div className="lg:hidden"></div>
                    <img className='lg:relative top-60 w-full h-[35rem] object-cover' src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/fc662eecb1ff595cb4d5d61c/5ee1dc404c50b108f5d08460962934761237d6ed5a4c704c7c2c7bd3964dc25a_1280.jpg" alt="" />
                </div>
            </section>




            <section className='cooking-image'>
                <div className="max-w-screen-xl mx-auto pt-28 pb-12 px-3">
                    <div className="text-center">
                        <h1 className="Playfair-display text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-orange-500">Learn <font className='font-bold'>Cooking</font> Online</h1>
                        <p className="source-sans-3 text-xl text-white max-w-[45rem] italic mt-2 mb-5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <p className="text-xs md:text-[18px] font-semibold text-white uppercase">Image from <Link className='text-orange-500 hover:text-orange-600 transition-all' to="/">Unsplash</Link></p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-20 lg:px-10 py-10">
                        <div className="Playfair-display bg-white text-black p-7 pb-14">
                            <h1 className="text-6xl lg:text-9xl mb-5">1</h1>
                            <h3 className="text-3xl lg:text-4xl font-semibold">Base Meals</h3>
                            <p className="text-xl source-sans-3 my-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button className='source-sans-3 text-orange-500 hover:text-orange-600 font-bold uppercase text-[17px] border-b-2 border-current transition-all' type="button">learn more</button>
                        </div>
                        <div className="Playfair-display bg-black/60 text-white p-7 pb-14">
                            <h1 className="text-6xl lg:text-9xl mb-5">2</h1>
                            <h3 className="text-3xl lg:text-4xl font-semibold">Knife Skills</h3>
                            <p className="text-xl source-sans-3 my-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button className='source-sans-3 text-orange-500 hover:text-orange-600 font-bold uppercase text-[17px] border-b-2 border-current transition-all' type="button">learn more</button>
                        </div>
                        <div className="Playfair-display bg-[#fe7606] text-white p-7 pb-14">
                            <h1 className="text-6xl lg:text-9xl mb-5">3</h1>
                            <h3 className="text-3xl lg:text-4xl font-semibold">Cooking Chicken</h3>
                            <p className="text-xl source-sans-3 my-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button className='source-sans-3 text-white hover:text-white/70 font-bold uppercase text-[17px] border-b-2 border-current transition-all' type="button">learn more</button>
                        </div>
                    </div>
                </div>
            </section>




            <section className='linearGradientColor pt-20 pb-0 md:pb-10 px-5'>
                <div className="flex justify-center items-center">
                    <div className="text-right flex justify-end">
                        <div className="pe-3">
                            <h1 className="Playfair-display text-4xl sm:text-7xl mb-5">Asian</h1>
                            <p className="source-sans-3 text-xs sm:text-lg max-w-[28rem]">While it is important to have naturally occurring sugars in your diet, many foods contain harmful added sugars that contain no nutritional value.</p>
                        </div>
                    </div>
                    <div className="text-left flex justify-start">
                        <div className="ps-3">
                            <h1 className="Playfair-display text-4xl sm:text-7xl mb-5">Food</h1>
                            <p className="source-sans-3 text-xs sm:text-lg max-w-[28rem]">While it is important to have naturally occurring sugars in your diet, many foods contain harmful added sugars that contain no nutritional value.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 px-20 lg:px-10 py-10 pb-3 max-w-screen-xl mx-auto">
                    <img className='object-cover w-full h-60 sm:h-96 hover:scale-[1.010] overflow-hidden transition-all' src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/8000cf5d7ec6563c9027fb99/15a9d539-7841-4798-bade-659827294c3a.jpeg" alt="" />
                    <img className='object-cover w-full h-60 sm:h-96 hover:scale-[1.010] overflow-hidden transition-all' src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/c8820d0331b95bcd93a2fa7d/6b889c51-2ea7-4a3c-a558-cec4fe135318.jpeg" alt="" />
                    <img className='object-cover w-full h-60 sm:h-96 hover:scale-[1.010] overflow-hidden transition-all' src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/abc3971eff985cd698fc3a02/80fd104a-865a-4af6-8b1a-b07a3d7d47bf.jpeg" alt="" />
                </div>
            </section>



            <section className="px-5 lg:px-0 relative">
                <div className="flex gap-3 md:gap-0 flex-col md:flex-row px-20 sm:px-20 lg:px-0">
                    <div className="fish w-full h-[15rem] md:h-[35rem] lg:flex-1"></div>
                    <div className="linearGradientColor-2 Playfair-display md:flex flex justify-center items-center gap-3 flex-col text-center w-full md:w-60 p-5 lg:p-0">
                        <h1 className="flex text-xl font-bold sm:font-normal sm:text-4xl md:text-6xl"><span className='w-20'>M</span> <span className='w-20'>F</span></h1>
                        <h1 className="flex text-xl font-bold sm:font-normal sm:text-4xl md:text-6xl"><span className='w-20'>E</span> <span className='w-20'>I</span></h1>
                        <h1 className="flex text-xl font-bold sm:font-normal sm:text-4xl md:text-6xl"><span className='w-20'>A</span> <span className='w-20'>S</span></h1>
                        <h1 className="flex text-xl font-bold sm:font-normal sm:text-4xl md:text-6xl"><span className='w-20'>T</span> <span className='w-20'>H</span></h1>
                        <h1 className="text-xl font-bold sm:font-normal sm:text-4xl md:text-6xl">AND</h1>
                    </div>
                    <div className="meat relative z-50 w-full h-[15rem] md:h-[35rem] lg:flex-1"></div>
                </div>
                <div className="absolute top-0 left-0 -z-10 w-1/2 h-full bg-[#fe7606]"></div>
            </section>




            <section className="py-3 px-5 md:py-20 relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-5 max-w-screen-xl mx-auto px-20 lg:px-10">
                    <div className="vegetable-cut h-80"></div>
                    <div className="vegetables h-80"></div>
                    <div className="Playfair-display h-80 flex justify-center items-start flex-col sm:p-10">
                        <h3 className="text-2xl font-semibold text-orange-600">Farm Products</h3>
                        <p className="text-[18px] md:text-xl source-sans-3 my-4">The use of local farm products lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                        <button className='source-sans-3 text-orange-500 hover:text-orange-600 font-bold uppercase text-[17px] border-b-2 border-current transition-all' type="button">learn more</button>
                    </div>
                    <div className="absolute top-0 left-0 -z-10 w-1/2 h-60 bg-[#fe7606]"></div>
                </div>
            </section>
        </>
    )
}

export default Home
