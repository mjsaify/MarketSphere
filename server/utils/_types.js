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

export const UserSignupZodSchema = z.object({
    name: z.string().min(4, { message: "Name should be more than 4 characters" }).max(100, { message: "Name cannot be more than 100 characters" }),
    email: z.string().email({ message: "Invlaid Email" }),
    password: z.string()
        .superRefine((val, ctx) => {
            if (val.length < 8) {
                ctx.addIssue({
                    code: z.ZodIssueCode.too_small,
                    type: 'string',
                    minimum: 8,
                    inclusive: true,
                    message: "Password should be 8 characters long",
                });
                return z.NEVER;
            };

            if (val.length > 32) {
                ctx.addIssue({
                    code: z.ZodIssueCode.too_small,
                    type: 'string',
                    minimum: 8,
                    inclusive: true,
                    message: "Password cannot be more than 32 characters",
                });
                return z.NEVER;
            };

            if (!/[A-Z]/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Password must contain atleast one uppercase letter",
                });
                return z.NEVER;
            };

            if (!/[a-z]/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Password must contain atleast one lowercase letter",
                });
                return z.NEVER;
            };

            if (!/\d/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Password must contain at least one number",
                });
                return z.NEVER;
            };

            if (!/[!@#$%^&*(),.?":{}|<>_]/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Password must contain at least one special character",
                });
                return z.NEVER;
            };
        }),
    avatar: z.object({
        public_id: z.string(),
        url: z.string().url(),
    }),
});

export const UserLoginZodSchema = z.object({
    email: z.string().email({ message: "Email is Invalid" }),
    password: z.string()
});