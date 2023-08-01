import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useGigStore from "../zustand/gigStore";

type Gig = {
  id: number;
  title: string;
  description?: string;
  price: number;
  location: string;
};

// const myGig: Gig = {

// }
const GigDetails = () => {
  const params = useParams();
  const gigId: number = Number(params.id);
  const gigs = useGigStore((state) => state.gigs);

  const [gig, setGig] = useState<Gig>()

  useState(() => {
    const gig = gigs.find((gig) => gig.id === gigId);
    setGig(gig)
  })

  return (
    <div className="flex justify-center">
      <div
        className="bg-white rounded-lg p-4 text-2xl"
        style={{ width: "500px" }}
      >
        <h2 className="text-center text-blue-700 font-semibold border-b-2 pb-2 border-blue-700 mb-5">
          {gig?.title}
        </h2>
        <div className="px-4">
          <p className="text-lg mb-2">Job details</p>
          <p>Amount: UGX {gig?.price}</p>
          <p>Location: {gig?.location}</p>
          <p>{gig?.description}</p>

          <p>{gig?.description}</p>
          <div className="flex justify-center items-center mt-3">
            <button className="bg-blue-700 text-white w-full rounded py-1 hover:scale-95">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDetails;
