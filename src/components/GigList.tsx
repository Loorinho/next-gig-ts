import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

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
          <div
            className="bg-white p-3 rounded-2xl"
            style={{ width: "400px", minHeight: "100px" }}
          >
            <p className="text-xl pt-2 hover:underline">{gig.title}</p>
            <div className="my-2">
              <p>{gig.location}</p>
              <p>UGX {gig.price}</p>
            </div>
            <p>{gig.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GigList;
