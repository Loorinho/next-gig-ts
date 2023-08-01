import axios from "axios";

export type Gig = {
    id: number,
    title: string,
    description: string,
    price: number,
    location: string
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