import Gig from "./Gig";
import useGigStore from "../zustand/gigStore";

const GigList = () => {
  const gigs = useGigStore(state=>state.gigs)
 
  return (
    <>
    <button className="px-4 py-2 rounded bg-blue-600 text-white m-3">
      Add Gig
    </button>  
    <div className="m-5 flex justify-center gap-2 flex-wrap ">
      {gigs?.map((gig) => (
        <div key={gig.id}>
          <Gig gig={gig}/>
        </div>
      ))}
    </div>
     <dialog open className="create_gig_dialog">
       <p>Create a gog</p>
     </dialog> 
    </>
  );
};

export default GigList;
