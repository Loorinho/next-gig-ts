import Gig from "./Gig";
import useGigStore from "../zustand/gigStore";

const GigList = () => {
  const gigs = useGigStore(state=>state.gigs)

  const modal = document?.querySelector(".dialog") as HTMLDialogElement

  const toggleModal = () => {
    console.log("btn clicked")
    modal?.showModal()
  }
 
  return (
    <>
      <button
        className="px-4 py-2 rounded bg-blue-600 text-white m-3"
        onClick={()=>toggleModal()}
      >
        Add Gig
      </button>
      <div className="m-5 flex justify-center gap-2 flex-wrap ">
        {gigs?.map((gig) => (
          <div key={gig.id}>
            <Gig gig={gig} />
          </div>
        ))}
      </div>
      <dialog className="dialog rounded py-4 px-3">
        <p className="text-center font-semibold text-xl text-blue-600">
          Create a gig
        </p>
        <form className="mt-3">
          <div className="mb-2">
            <label className="block text-sm text-gray-600">Title</label>
            <input
              type="text"
              className="w-full  outline-none border-2 border-blue-600 rounded px-3 py-1.5 focus:ring-1 focus:ring-blue-700"
              placeholder="Enter gig title"
              autoFocus
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm text-gray-600">Description</label>
            {/* <input
              type="text"
              className="w-full  outline-none border-2 border-blue-600 rounded px-3 py-1.5 focus:ring-1 focus:ring-blue-700"
              placeholder="Enter gig description here.."
            /> */}
            <textarea
              // cols="30"
              // rows="4"
              className="w-full  outline-none border-2 border-blue-600 rounded px-3 py-1.5 focus:ring-1 focus:ring-blue-700"
              placeholder="Enter gig description here.."
            ></textarea>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default GigList;
