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

export const ProductReivewZodShcema = z.object({
    userId: z.string(),
    name: z.string(),
    ratings: z.number()
        .superRefine((val, ctx) => {
            if (val > 5 || val < 0) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Ratings can only be between 0 and 5"
                });
                return z.NEVER;
            };
        }),
    comments: z.string().max(100, { message: "Can't type more than 100 words" }),
});


export const OrderZodSchema = z.object({
    user: z.string(),
    shippingAddress: z.object({
        address: z.string(),
        city: z.string(),
        state: z.string(),
        postalCode: z.number().nonnegative(),
        country: z.string(),
        phoneNumber: z.number()
            .superRefine((val, ctx) => {
                if (!/^(?:\+91[\s-]?)?[6-9]\d{9}$/.test(val)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "Invalid Mobile Number"
                    });
                    return z.NEVER;
                };
            }),
        orderItems: z.object({
            name: z.string(),
            quantity: z.number(),
            price: z.string(),
            image: z.string(),
        }).array()
    })
});