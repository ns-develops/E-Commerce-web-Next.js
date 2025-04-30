
import dotenv from "dotenv";
dotenv.config();

export const config = {
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};
