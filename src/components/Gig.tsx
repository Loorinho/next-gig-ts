import { useParams } from "react-router-dom";
import { GigType } from "./GigList";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

type GigProps = {
  gig: GigType;
};

const Gig = ({ gig }: GigProps) => {
  const { id } = useParams();

  return (
    <div
      className="bg-white p-3 rounded-2xl"
      style={{ width: "400px", minHeight: "100px" }}
    >
      <p className="text-xl pt-2 hover:underline">{gig?.title}</p>
      <div className="my-2">
        <p>{gig?.location}</p>
        <p>UGX {gig?.price}</p>
      </div>
      <p>{gig?.description}</p>
    </div>
  );
 
};

export default Gig;
