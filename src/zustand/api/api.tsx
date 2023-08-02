import axios from "axios";

export type Gig = {
    id: number,
    title: string,
    description: string,
    price: number,
    location: string
}

export type User = {
    id: number,
    name: string,
    eaail: string
}


export const fetchGigs = async () => {
    const url = "http://127.0.0.1:8000/api/gigs";
    const response = await axios.get(url);

    const data = response.data.gigs
    const gigs: Gig[] = data?.map((gig: Gig) => {
        return {
            id: gig.id,
            title: gig.title,
            description: gig.description,
            location: gig.location,
            price: gig.price
        }
    })
    return gigs   
}

export const registerUser = async () => {
    const url = "http://127.0.0.1:8000/api/register";
    const response = await axios.get(url);

    const data = response.data.user
    const user: User = data?.map((user: User) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    })
    return user   
}
