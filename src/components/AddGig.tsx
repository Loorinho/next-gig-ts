import axios from "axios";
import GigInput from "./utilities/GigInput";
import { GigSchema } from "./utilities/schemas/schemas";
import { useFormik } from "formik";
import { Gig } from "../zustand/api/api";

const AddGig = () => {
  const initialGigValues: Gig = {
    title: "",
    description: "",
    location: "",
    price: 0,
    date: ''
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: initialGigValues,
    onSubmit: async (values) => {
      const url = "http://127.0.0.1:8000/api/gigs";

      const data = {
        title: values.title,
        description: values.description,
        location: values.location,
        price: values.price,
        date: values.date
      };

      // console.log("Data: ", data)

      try {
        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response: ", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    validationSchema: GigSchema,
  });

  return (
    <div className="gig_form border-2 border-blue-600 px-4 py-5 rounded-lg">
      <form onSubmit={handleSubmit}>
        <p className="text-center text-blue-600 font-semibold text-xl my-2">
          Add a new gig
        </p>
        <GigInput
          handleBlur={handleBlur}
          handleChange={handleChange}
          name="title"
          label="Title"
          type="text"
          errors={errors}
          touched={touched}
        />
        <GigInput
          handleBlur={handleBlur}
          handleChange={handleChange}
          name="description"
          label="Description"
          placeholder="Enter your gig title here..."
          type="textarea"
          errors={errors}
          touched={touched}
        />
        <GigInput
          handleBlur={handleBlur}
          handleChange={handleChange}
          name="location"
          label="Location"
          placeholder="Enter your detailed gig description here..."
          type="text"
          errors={errors}
          touched={touched}
        />
        <GigInput
          handleBlur={handleBlur}
          handleChange={handleChange}
          name="date"
          label="Date"
          type="date"
          errors={errors}
          touched={touched}
        />
        <GigInput
          handleBlur={handleBlur}
          handleChange={handleChange}
          name="price"
          label="Price"
          type="number"
          errors={errors}
          touched={touched}
        />

        <div className="mt-3 flex justify-between items-center">
          <button
            type="submit"
            className=" w-full px-3 py-2 text-center bg-blue-600 text-white rounded-sm hover:scale-95 outline-none"
          >
            Save Gig
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGig;
