export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT;
export const DB_URI = process.env.DB_LOCAL;
export const DB_NAME = process.env.DB_NAME;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRY = process.env.JWT_EXPIRY;
export const CookieOptions = {
    httpOnly: true,
    secure: true,
}