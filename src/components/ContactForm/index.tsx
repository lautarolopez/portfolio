"use client";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import ContactFormButton from "../ContactFormButton";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ERROR_TEXTS = {
  NAME: {
    en: "I need your name!",
    es: "Necesito tu nombre!",
  },
  EMAIL: {
    en: "I need your email!",
    es: "Necesito tu email!",
  },
  EMAIL_INVALID: {
    en: "Invalid email!",
    es: "Email inválido!",
  },
  MESSAGE: {
    en: "Don't be shy, say hello!",
    es: "Contame algo!",
  },
};

export default function ContactForm() {
  const { lang } = useLang();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form
      className="w-full flex flex-col items-center gap-10 p-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex items-center justify-center gap-[6%]">
        <div className="relative w-[47%]">
          <input
            type="text"
            id="name"
            className={`${
              errors.name
                ? "border-red-500"
                : "border-primary-dark dark:border-primary-light"
            } block px-2.5 pb-2.5 pt-4 w-full text-xl text-primary-dark bg-transparent rounded-lg border-4  appearance-none dark:text-primary-light  focus:outline-none focus:ring-0 focus:border-primary-dark dark:focus:border-primary-light peer`}
            placeholder=""
            autoComplete="off"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: true })}
          />
          <label
            htmlFor="name"
            className={`${
              errors.name
                ? "text-red-400"
                : "text-primary-dark dark:text-primary-light peer-focus:text-primary-dark peer-focus:dark:text-primary-light"
            } absolute text-lg font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary-light dark:bg-primary-dark px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 cursor-text`}
          >
            Your name
          </label>
          <span
            className={`${
              errors.name ? "text-red-500 text-lg absolute" : "hidden"
            }`}
          >
            {ERROR_TEXTS.NAME[lang]}
          </span>
        </div>
        <div className="relative w-[47%]">
          <input
            type="email"
            id="email"
            className={`${
              errors.email
                ? "border-red-500"
                : "border-primary-dark dark:border-primary-light"
            } block px-2.5 pb-2.5 pt-4 w-full text-xl text-primary-dark bg-transparent rounded-lg border-4  appearance-none dark:text-primary-light  focus:outline-none focus:ring-0 focus:border-primary-dark dark:focus:border-primary-light peer`}
            placeholder=""
            autoComplete="off"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,16}$/,
            })}
          />
          <label
            htmlFor="email"
            className={`${
              errors.email
                ? "text-red-400"
                : "text-primary-dark dark:text-primary-light peer-focus:text-primary-dark peer-focus:dark:text-primary-light"
            } absolute text-lg font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary-light dark:bg-primary-dark px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 cursor-text`}
          >
            Email
          </label>
          <span
            className={`${
              errors.email ? "text-red-500 text-lg absolute" : "hidden"
            }`}
          >
            {errors.email?.type === "required"
              ? ERROR_TEXTS.EMAIL[lang]
              : ERROR_TEXTS.EMAIL_INVALID[lang]}
          </span>
        </div>
      </div>
      <div className="relative w-full">
        <textarea
          id="message"
          className={`${
            errors.message
              ? "border-red-500"
              : "border-primary-dark dark:border-primary-light"
          } block px-2.5 pb-2.5 pt-4 w-full h-40 text-xl text-primary-dark bg-transparent rounded-lg border-4  appearance-none dark:text-primary-light  focus:outline-none focus:ring-0 focus:border-primary-dark dark:focus:border-primary-light peer resize-y`}
          placeholder=""
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", { required: true })}
        />
        <label
          htmlFor="message"
          className={`${
            errors.message
              ? "text-red-400"
              : "text-primary-dark dark:text-primary-light peer-focus:text-primary-dark peer-focus:dark:text-primary-light"
          } absolute text-lg font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary-light dark:bg-primary-dark px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 cursor-text`}
        >
          Message
        </label>
        <span
          className={`${
            errors.message ? "text-red-500 text-lg absolute" : "hidden"
          }`}
        >
          {ERROR_TEXTS.MESSAGE[lang]}
        </span>
      </div>
      <ContactFormButton
        disabled={false}
        error={Object.entries(errors).length !== 0}
      />
    </form>
  );
}
