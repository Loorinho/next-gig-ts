import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Gig } from "./api/api";

// type Gig = {
//     id: number,
//     title: string,
//     description?:string,
//     price: number,
//     location: string
// }

type GigStoreType = {
    gigs: Gig[],
    setGigs: (gigs: Gig[]) => void
}

const useGigStore = create<GigStoreType>()(
  persist((set) => ({
    gigs: [],
    setGigs: (_gigs: Gig[]) => {
      set({ gigs: _gigs });
    },
  }), {
    name: 'gig-store'
  })
);



export default useGigStore;