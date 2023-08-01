import { Link } from "react-router-dom";

type Gig = {
    id: number,
    title: string,
    description?:string,
    price: number,
    location: string
}
type GigProps = {
  gig: Gig
}

const Gig = ({gig}: GigProps) => {
 
  return (
    <div
      className="bg-white p-3 rounded-2xl"
      style={{ width: "400px", minHeight: "100px" }}
    >
      <Link to={`/gigs/${gig.id}`}>
        <p className="text-xl pt-2 hover:underline">{gig?.title}</p>
      </Link>
      <div className="my-2">
        <p>{gig?.location}</p>
        <p>UGX {gig?.price}</p>
      </div>
      <p>{gig?.description}</p>
    </div>
  );
 
};

export default Gig;
