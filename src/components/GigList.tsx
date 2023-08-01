import Gig from "./Gig";
import useGigStore from "../zustand/gigStore";

const GigList = () => {
  const gigs = useGigStore(state=>state.gigs)
 
  return (
    <div className="m-5 flex justify-center gap-2 flex-wrap ">
      {gigs?.map((gig) => (
        <div key={gig.id}>
          <Gig gig={gig}/>
        </div>
      ))}
    </div>
  );
};

export default GigList;
