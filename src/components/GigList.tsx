import { Link } from "react-router-dom";

export type GigType = {
  id: number,
  title: string,
  price: number,
  details?: string
  location: string
  description: string,
};

export const gigs: GigType[] = [
  {
    id: 1,
    title: "Cleaning the dog",
    price: 20000,
    location: "Nsambya",
    details: "All you are going to do is to wash three of my dogs",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam libero est quaerat in animi officiis cumque ea! Sed veritatis odit fugit autem. Accusamus provident itaque nam impedit corporis eos! ",
  },
  {
    id: 2,
    title: "Walking the dog",
    price: 35000,
    location: "Muyenga",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam libero est quaerat in animi officiis cumque ea! Sed veritatis odit fugit autem. Accusamus provident itaque nam impedit corporis eos! ",
  },
  {
    id: 3,
    title: "Sing for me",
    location: "Kawempe",
    price: 15000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam libero est quaerat in animi officiis cumque ea! Sed veritatis odit fugit autem. Accusamus provident itaque nam impedit corporis eos! ",
  },
  // {
  //   id: 4,
  //   title: "Cleaning the dig",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam libero est quaerat in animi officiis cumque ea! Sed veritatis odit fugit autem. Accusamus provident itaque nam impedit corporis eos! ",
  // },
  // {
  //   id: 5,
  //   title: "Slashing the compound",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam libero est quaerat in animi officiis cumque ea! Sed veritatis odit fugit autem. Accusamus provident itaque nam impedit corporis eos! ",
  // },
  // {
  //   id: 6,
  //   title: "Cleaning the pavers",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam libero est quaerat in animi officiis cumque ea! Sed veritatis odit fugit autem. Accusamus provident itaque nam impedit corporis eos! ",
  // },
  // {
  //   id: 7,
  //   title: "Washing the car",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam libero est quaerat in animi officiis cumque ea! Sed veritatis odit fugit autem. Accusamus provident itaque nam impedit corporis eos! ",
  // },
  // {
  //   id: 8,
  //   title: "Dance for cash",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam libero est quaerat in animi officiis cumque ea! Sed veritatis odit fugit autem. Accusamus provident itaque nam impedit corporis eos! ",
  // },
];

const GigList = () => {
  return (
    <div className="m-5 flex justify-center gap-2 flex-wrap ">
      {gigs.map((gig) => (
        <Link to={`/gigs/${gig.id}`} key={gig.id}>
          <div
            className="bg-white p-3 rounded-2xl"
            style={{ width: "400px", minHeight: "100px" }}
          >
            <p className="text-xl pt-2 hover:underline">{gig.title}</p>
            <div className="my-2">
              <p>{gig.location}</p>
              <p>UGX {gig.price}</p>
            </div>
            <p>{gig.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GigList;
