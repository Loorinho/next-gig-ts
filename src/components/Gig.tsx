import { useParams } from "react-router-dom";
import { gigs, GigType } from "./GigList";

const Gig = () => {
  const { id } = useParams();
  const gig = gigs.find((gig: GigType) => gig.id === Number(id));
  return (
    <div className="flex justify-center">
    <div className="bg-white rounded-lg p-4 text-2xl" style={{ width: "500px" }}>
      <h2 className="text-center text-blue-700 font-semibold border-b-2 pb-2 border-blue-700 mb-5">{gig?.title}</h2>
      <div className="px-4">
        <p className="text-lg mb-2">Job details</p>
        <p>Amount: UGX {gig?.price}</p>
        <p>Location: {gig?.location}</p>
        <p>{gig?.details}</p>

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

export default Gig;
