import axios from "axios";
import { GigType } from "../../components/Gig";

// export type Gig = {
//   id?: number;
//   title: string;
//   description: string;
//   price: number;
//   location: string;
//   date: ''
// };

export type User = {
  id: number;
  name: string;
  email: string;
};

export const fetchGigs = async () => {
  const url = "http://127.0.0.1:8000/api/gigs";
  const response = await axios.get(url);

  const data = response.data.gigs;
  const gigs: GigType[] = data?.map((gig: GigType) => {
    return {
      id: gig.id,
      title: gig.title,
      description: gig.description,
      location: gig.location,
      price: gig.price,
      date: gig.date
    };
  });
  return gigs;
};

export const registerUser = async (_data: User) => {
  const url = "http://127.0.0.1:8000/api/register";
  const response = await axios.post(url, _data, {
    headers: {
      "Content-Type": "application/json",
      // "Authorization" : `Bearer ${localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):null}`
    },
  });

  const data = response.data.user;
  const myuser: User = data?.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  });
  return myuser;
};
