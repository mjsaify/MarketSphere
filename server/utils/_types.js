import { z } from 'zod';

export const ProductZodSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().nonnegative({ message: "Price cannot be negative" }),
    ratings: z.number().optional(),
    category: z.string(),
    stock: z.number().default(1),
    numberOfReviews: z.number().optional().default(0),
    image: z.object({
        public_id: z.string(),
        url: z.string().url(),
    }),
    reviews: z.object({
        name: z.string(),
        ratings: z.number(),
        comment: z.string()
    }).optional(),
    createdAt: z.string().datetime().optional()
});