import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        ratings: {
            type: Number,
            default: 0,
        },
        category: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true,
            default: 1
        },
        numberOfReviews: {
            type: Number,
            default: 0,
        },
        image: [
            {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                }
            }
        ],
        reviews: [
            {
                name: {
                    type: String,
                    required: true,
                },
                ratings: {
                    type: Number,
                    required: true,
                },

                comment: {
                    type: String,
                    required: true,
                },

            }
        ],
        createdAt: {
            type: Date,
            default: Date.now(),
        }
    },
    {
        timestamps: true,
    }
);

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;