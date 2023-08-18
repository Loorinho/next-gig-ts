
import { useParams } from "react-router-dom";
import axios from "axios"
import useGigStore from "../zustand/gigStore";

const GigDetails = () => {
  const params = useParams();
  const gigId: number = Number(params.id);
  const gigs = useGigStore((state) => state.gigs);

  const gig = gigs.find((gig) => gig.id === gigId)

    const deleteGig =async (id) => {
      try{
        const url = `http://localhost:8000/api/gigs/${id}`
        const response = await axios.delete(url)
        console.log(response.data)
      }catch(error){
        console.error(error)
      }
    }

  return (
    <div className="flex justify-center">
      <div
        className="bg-white rounded-lg p-4 text-2xl"
        style={{ width: "500px" }}
      >
        <p className="flex flex-end items-center gap-5">
          <button className="bg-green-600 px-2 py-1 text-white rounded">Edit</button>
          <button className="bg-red-600 px-2 py-1 text-white rounded" onClick(()=> deleteGig(gig?.id))>Delete</button>
        </p>
        <h2 className="text-center text-blue-700 font-semibold border-b-2 pb-2 border-blue-700 mb-5">
          {gig?.title}
        </h2>
        <div className="px-4">
          <p className="text-lg mb-2 text-center">{gig?.title} gig details</p>
          <p>Amount: UGX {gig?.price}</p>
          <p>Location: {gig?.location}</p>
          <p>Date: {gig?.date}</p>
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
