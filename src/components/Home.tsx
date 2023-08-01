import { Link } from "react-router-dom";

const Home = () => {
   const { data: Gigs, isSuccess } = useQuery({
    queryKey: ["gigs"],
    queryFn: fetchGigs,
  });
  
  return (
    <div className="home flex justify-center items-center px-10">
      <div className="text-white text-3xl">
        <p className="text-center">
          Getting a gig has never got easier. <br />
        </p>
        <p className="mt-2 text-center">
          Here at My
          <span className="text-blue-700 px-1">NEXT</span>Gig, we are committed
          to bringing your next gig closer to you based on your skillset like
          cleaner, developer, car washer, cook, among others
        </p>
        {/* <p>based on your skillset</p> */}
        <div className="flex justify-center items-center">
          <Link to={"/gigs"}>
          <button className="bg-blue-700 px-4 py-2 text-white text-xl rounded mt-3">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
