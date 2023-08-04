import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Gig, fetchGigs } from "../zustand/api/api";
import useGigStore from "../zustand/gigStore";
import { useMemo } from "react";

const Home = () => {
  const { data: mygigs, isSuccess: loadedGigs } = useQuery({
    queryKey: ["gigs"],
    queryFn: fetchGigs,
  });

  const setGigs = useGigStore((state) => state.setGigs);
  const gigs = useGigStore((state) => state.gigs);

  let theGigs: Gig[] = [];
  if (loadedGigs) {
    theGigs = mygigs;
  }

  useMemo(() => {
    setGigs(theGigs);
  }, [mygigs]);

  return (
    <div className="home flex justify-center items-center px-10">
      <div className="text-white">
        <p className="text-center text-5xl">
          Want to get things done? <br />
        </p>
        <p className="mt-2 text-center text-2xl">
          Here at My
          <span className="text-blue-700 px-1">NEXT</span>Gig, you can find
          talent <span className="font-semibold">your</span> way no matter the
          skills.
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
