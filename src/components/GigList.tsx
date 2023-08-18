import Gig from "./Gig";
import axios from "axios"
import useGigStore from "../zustand/gigStore";
import { FormEvent, useRef, useState } from "react";

const GigList = () => {
  const gigs = useGigStore((state) => state.gigs);
  const setGigs = useGigStore((state) => state.setGigs);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState(0)
  const [date, setDate] = useState("")


  
  const modalRef = useRef<HTMLDialogElement>(null)!;
  const toggleModal = () => {
    modalRef.current?.showModal();
  };

  const addGig = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title,
      description,
      location,
      price,
      date,
    };

    try{
      const url = "http://localhost:8000/api/gigs"
      const response = await axios.post(url,{title,description,location,price,date, userId: 1}, {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    setGigs(response.data?.gigs)
    // console.log(response.data)
    // ref
    modalRef.current?.close()
      
    }catch(error){
      console.error("Error: ", error)
    }
  };

  return (
    <>
      <button
        className="px-4 py-2 rounded bg-blue-700 text-white m-3 outline-none"
        onClick={() => toggleModal()}
      >
        Add Gig
      </button>
      <div className="m-5 flex justify-center gap-2 flex-wrap ">
        {gigs?.map((gig, index: number) => (
          <div key={index}>
            <Gig gig={gig} />
          </div>
        ))}
      </div>
      <dialog className="dialog rounded py-4 px-3 relative" ref={modalRef}>
        <button className="absolute right-4 cursor-pointer text-white bg-red-500 rounded-full w-5 h-5" onClick={()=>modalRef.current?.close()}>X</button>
        <p className="text-center font-semibold text-xl text-blue-600">
          Create a gig
        </p>
        <form className="mt-3" onSubmit={(e)=> addGig(e)}>
          <div className="mb-2">
            <label className="block text-sm text-gray-600">Title</label>
            <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              type="text"
              className="w-full  outline-none border-2 border-blue-600 rounded px-3 py-1.5 focus:ring-1 focus:ring-blue-700"
              placeholder="Enter gig title"
              autoFocus
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm text-gray-600">Description</label>
            <textarea
              rows={5}
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              className="w-full  outline-none border-2 border-blue-600 rounded px-3 py-1.5 focus:ring-1 focus:ring-blue-700"
              placeholder="Enter gig description here.."
            ></textarea>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2">
              <label className="block text-sm text-gray-600">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                className="w-full outline-none border-2 border-blue-600 rounded px-3 py-1.5 focus:ring-1 focus:ring-blue-700"
                placeholder="Enter gig location"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm text-gray-600">Price</label>
              <input
                value={price}
                onChange={(e)=>setPrice(+e.target.value)}
                type="number"
                className="w-full outline-none border-2 border-blue-600 rounded px-3 py-1.5 focus:ring-1 focus:ring-blue-700"
                placeholder="Enter gig price"
              />
            </div>   
          </div>
           <div className="mb-2">
              <label className="block text-sm text-gray-600">Date</label>
              <input
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                type="date"
                className="w-full  outline-none border-2 border-blue-600 rounded px-3 py-1.5 focus:ring-1 focus:ring-blue-700"
                placeholder="Enter gig date"        
              />
          </div>
          <div className="mt-8">
            <button className="bg-blue-700 text-white w-full rounded py-2 px-3" type="submit">Add Gig</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default GigList;
