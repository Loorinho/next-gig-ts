import {z} from 'zod';

export const UserSchema = z.object({
    name: z.string(),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6),
})

export type TUserSchema = z.infer(typeof UserSchema)

export const LoginSchema = z.object({
    username: z.string().email("Enter a valid email address"),
    password: z.string()
})

export type TLoginSchema = z.infer(typeof LoginSchema)

