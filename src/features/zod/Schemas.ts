import {z} from 'zod';

export const UserSchema = z.object({
    name: z.string(),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6),
})



export const LoginSchema = z.object({
    username: z.string().email("Enter a valid email address"),
    password: z.string()
})

