import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  username: yup.string().email().required().label("Username"),
  password: yup.string().required().label("Password"),
});

export const RegistrationSchema = yup.object().shape({
  name: yup.string().required().label("Username"),
  email: yup.string().email().required().label("Username"),
  password: yup.string().required().label("Password"),
});

export const GigSchema = yup.object().shape({
  title: yup.string().required().label("Title"),
  description: yup.string().required().label("Description"),
  price: yup.number().required().label("Price"),
  location: yup.string().required().label("Location"),
  date: yup.date().required().label("Location"),
});
