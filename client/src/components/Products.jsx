/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";

const Products = ({ title }) => {
    return (
        <div className="font-[sans-serif] my-12">
            <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
                    {title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                    <div className="rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative bg-gray-50">
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <img
                                src="https://readymadeui.com/images/product9.webp"
                                alt="Product 1"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-800">
                                Sole Elegance
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <ReactStars
                                count={5}
                                size={24}
                                isHalf={true}
                                value={3}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <h4 className="text-lg text-gray-800 font-bold mt-4">$10</h4>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                className="fill-gray-800 inline-block"
                                viewBox="0 0 64 64"
                            >
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <img
                                src="https://readymadeui.com/images/product10.webp"
                                alt="Product 2"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-800">
                                Urban Sneakers
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4 className="text-lg text-gray-800 font-bold mt-4">$12</h4>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                className="fill-gray-800 inline-block"
                                viewBox="0 0 64 64"
                            >
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <img
                                src="https://readymadeui.com/images/product11.webp"
                                alt="Product 3"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-800">Velvet Boots</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4 className="text-lg text-gray-800 font-bold mt-4">$14</h4>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                className="fill-gray-800 inline-block"
                                viewBox="0 0 64 64"
                            >
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <img
                                src="https://readymadeui.com/images/product12.webp"
                                alt="Product 3"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-800">
                                Summit Hiking
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4 className="text-lg text-gray-800 font-bold mt-4">$12</h4>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                className="fill-gray-800 inline-block"
                                viewBox="0 0 64 64"
                            >
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <img
                                src="https://readymadeui.com/images/product13.webp"
                                alt="Product 3"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-800">Zenith Glow</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4 className="text-lg text-gray-800 font-bold mt-4">$15</h4>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                className="fill-gray-800 inline-block"
                                viewBox="0 0 64 64"
                            >
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <img
                                src="https://readymadeui.com/images/product14.webp"
                                alt="Product 3"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-800">
                                Echo Elegance
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4 className="text-lg text-gray-800 font-bold mt-4">$14</h4>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                className="fill-gray-800 inline-block"
                                viewBox="0 0 64 64"
                            >
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <img
                                src="https://readymadeui.com/images/product15.webp"
                                alt="Product 3"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-800">Pumps</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4 className="text-lg text-gray-800 font-bold mt-4">$14</h4>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                className="fill-gray-800 inline-block"
                                viewBox="0 0 64 64"
                            >
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <img
                                src="https://readymadeui.com/images/product10.webp"
                                alt="Product 3"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-800">Blaze Burst</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <h4 className="text-lg text-gray-800 font-bold mt-4">$14</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products