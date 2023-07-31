import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Gig from "./Gig";

export type GigType = {
  id: number,
  title: string,
  price: number,
  details?: string
  location: string
  description: string,
};

const GigList = () => {
  const [gigs, setGigs] = useState<GigType[]>([])
  async function fetchGigs() {
    const url = "http://127.0.0.1:8000/api/gigs";
    try {
      const response = await axios.get(url);
      setGigs(response.data.gigs)
      console.log(response.data.gigs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    fetchGigs()
  }, [])
  return (
    <div className="m-5 flex justify-center gap-2 flex-wrap ">
      {gigs.map((gig) => (
        <Link to={`/gigs/${gig.id}`} key={gig.id}>
          <Gig gig={gig} />
        </Link>
      ))}
    </div>
  );
};

export default GigList;
