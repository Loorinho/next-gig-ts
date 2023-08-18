import { create } from "zustand";
import { persist } from "zustand/middleware";

import { GigType } from "../components/Gig";

// type Gig = {
//     id: number,
//     title: string,
//     description?:string,
//     price: number,
//     location: string
// }

type GigStoreType = {
  gigs: GigType[];
  setGigs: (gigs: GigType[]) => void;
};

const useGigStore = create<GigStoreType>()(
  persist((set) => ({
    gigs: [],
    setGigs: (_gigs: GigType[]) => {
      const theGigs: any[] = _gigs.map((gig: GigType) => {
        return {
          id: gig.id,
          title: gig.title,
          description: gig.description,
          location: gig.location,
          date: gig.date,
          price: gig.price
        };
      });
      set({ gigs: theGigs });
    },
  }), {
    name: 'gig-store'
  })
);



export default useGigStore;