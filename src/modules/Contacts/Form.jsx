import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const contactFormik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Please enter your name."),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email."),
      message: Yup.string()
        .max(1000, "Message should be in 100 words or less")
        .required("Please enter your message"),
    }),
    onSubmit: () => {
      setLoading(true);
      emailjs
        .sendForm(
          "service_ya0lsuy",
          "template_1u4krof",
          form.current,
          "mdyQ_tfMfesiQnDQB"
        )
        .then(
          (result) => {
            setLoading(false);
            console.log(result.text);
            contactFormik.resetForm();
          },
          (error) => {
            setLoading(false);
            console.log(error.text);
          }
        );
    },
  });
  return (
    <div className="mx-auto w-96 p-16">
      <div className="text-3xl text-white font-bold">Have a question? </div>
      <div className="text-2xl text-white font-bold">Contact me!</div>
      <div>
        <form onSubmit={contactFormik.handleSubmit} className="py-5" ref={form}>
          <div className="mb-4">
            <label htmlFor="user_name" className="text-white">
              First Name
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              {...contactFormik.getFieldProps("user_name")}
              className="rounded-md bg-slate-600 h-8 w-64"
            />
            {contactFormik.touched.user_name &&
            contactFormik.errors.user_name ? (
              <div>{contactFormik.errors.user_name}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="user_email" className="text-white">
              Email Address
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              {...contactFormik.getFieldProps("user_email")}
              className="rounded-md bg-slate-600 h-8 w-64"
            />
            {contactFormik.touched.user_email &&
            contactFormik.errors.user_email ? (
              <div>{contactFormik.errors.user_email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              name="message"
              {...contactFormik.getFieldProps("message")}
              className="rounded-md bg-slate-600 h-20 w-64"
            />
            {contactFormik.touched.message && contactFormik.errors.message ? (
              <div>{contactFormik.errors.message}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="text-white font-bold bg-black hover:bg-white hover:text-black transition duration-300 py-2 px-10 rounded-lg border mx-auto"
          >
            {loading ? "Sending . . ." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

// Service ID: service_ya0lsuy
// Template ID: template_1u4krof
// Public key: mdyQ_tfMfesiQnDQB
