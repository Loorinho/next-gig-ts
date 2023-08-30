import { FormikTouched, FormikErrors } from "formik";

type initialValues = {
  [key: string]: any,
  username: string,
  title: string,
  description: string,
  price: number,
  location: string
};
type LoginInputPops = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  errors: FormikErrors<initialValues>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  touched: FormikTouched<initialValues>;
};

const GigInput = ({
  label,
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  touched,
  errors,
}: LoginInputPops) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-normal text-sm mt-2 text-gray-700"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <>
          <textarea
            name={name}
            className={`${
              errors[`${name}`] && touched[`${name}`]
                ? "focus:ring-1 focus:ring-red-500 border-red-500 focus:border-red-500"
                : "focus:ring-1 focus:ring-blue-600 focus:border-blue-500"
            } focus:outline-none shadow-sm py-2 px-4 w-full rounded`}
            autoComplete="off"
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
          >
          </textarea>
        </>
      ) : (
        <input
          type={type}
          name={name}
          className={`${
            errors[`${name}`] && touched[`${name}`]
              ? "focus:ring-1 focus:ring-red-500 border-red-500 focus:border-red-500"
              : "focus:ring-1 focus:ring-blue-600 focus:border-blue-500"
          } focus:outline-none shadow-sm py-2 px-4 w-full rounded`}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}

      <span className="block text-red-500">
        {errors[`${name}`] && touched[`${name}`] && <>{errors[`${name}`]}</>}
      </span>
    </div>
  );
};

export default GigInput;
