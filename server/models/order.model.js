import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        shippingAddress: {
            address: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            postalCode: {
                type: Number,
                required: true,
            },
            country: {
                type: String,
                required: true,
                default: "India"
            },
            phoneNumber: {
                type: Number,
                required: true,
            },
        },
        orderItems: [{
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },

        }],
        paymentInfo: {
            id: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                required: true,
            },
        },
        paidAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
        pricingDetails: {
            itemsPrice: {
                type: Number,
                required: true,
                default: 0
            },
            taxPrice: {
                type: Number,
                required: true,
                default: 0
            },
            shippingPrice: {
                type: Number,
                required: true,
                default: 0
            },
            totalPrice: {
                type: Number,
                required: true,
                default: 0
            },
        },
        orderStatus: {
            type: String,
            required: true,
            default: "Processing"
        },
        deliveredAt: Date,
        createdAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
    }
);

const OrderModel = mongoose.model("Order", OrderSchema);
export default OrderModel;