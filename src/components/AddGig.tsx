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
      const url = "https://127.0.0.1/api/createGig";

      const data = {
        title: values.title,
        description: values.description,
        location: values.location,
        price: values.price,
      };

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
    <div>
      <form onSubmit={handleSubmit}>
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
          type="text"
          errors={errors}
          touched={touched}
        />
        <GigInput
          handleBlur={handleBlur}
          handleChange={handleChange}
          name="location"
          label="Location"
          placeholder="Enter your detailed description here..."
          type="text"
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

        <div className="mt-3 w-full flex justify-between items-center">
          <button
            type="submit"
            className=" px-3 text-center bg-blue-600 rounded-lg hover:scale-95 outline-none"
          >
            Save Gig
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGig;
