/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";

const Products = (props) => {
    const { name, price, ratings, description, image } = props;

    return (
        <div className="rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative bg-gray-50">
            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                    src={image[0].url}
                    alt={name}
                    className="h-full w-full object-contain"
                />
            </div>
            <div>
                <h3 className="text-base font-extrabold text-gray-800">
                    {name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                    {description}
                </p>
                <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    value={ratings}
                    edit={false}
                    activeColor="#ffd700"
                />
                <h4 className="text-lg text-gray-800 font-bold mt-4">{price}</h4>
            </div>
        </div>
    );
};
export default Products