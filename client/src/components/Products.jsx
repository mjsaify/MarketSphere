/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Products = (props) => {
    const { _id, name, price, ratings, image } = props;

    return (
        <div className="rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative bg-gray-50">
            <Link to={`/products/${_id}`}>
                <div className="mb-4 rounded p-2">
                    <img
                        src="https://readymadeui.com/images/product9.webp"
                        alt="Product 1"
                        className="aspect-[33/35] w-full object-contain"
                    />
                </div>
                <div className="flex flex-col cursor-pointer">
                    <h5 className="text-base font-bold text-gray-800">{name}</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={ratings}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <h6 className="text-base text-gray-800 font-bold">&#8377;{price}</h6>
                </div>
            </Link>
            <Button
                className="text-sm px-2 mt-4 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                onClick={() => alert("added to cart")}
            >
                Add to cart
            </Button>
        </div>
    );
};
export default Products