import { z } from 'zod';

export const ProductZodSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().max(12, { message: "Price cannot exceed 8 characters"}),
    // ratings: z.number().optional(),
    // category: z.string(),
    // stock: z.number(),
    // numberOfReviews: z.number().optional(),
    // image: {
    //     public_id: z.string(),
    //     url: z.string().url(),
    // },
    // reviews: {
    //     name: z.string().optional(),
    //     ratings: z.number().optional(),
    //     comment: z.string().optional()
    // },
    // createdAt: z.date(),
});