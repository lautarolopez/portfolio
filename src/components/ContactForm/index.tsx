'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLang } from '@/contexts/LangContext';
import ContactFormButton from '../ContactFormButton';
import content from '@/content.json';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ERROR_TEXTS = {
  NAME: {
    en: 'I need your name!',
    es: 'Necesito tu nombre!',
  },
  EMAIL: {
    en: 'I need your email!',
    es: 'Necesito tu email!',
  },
  EMAIL_INVALID: {
    en: 'Invalid email!',
    es: 'Email inválido!',
  },
  MESSAGE: {
    en: "Don't be shy, say hello!",
    es: 'Contame algo!',
  },
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const { lang } = useLang();
  const { register, handleSubmit, formState, reset } = useForm<Inputs>();
  const {
    contact: {
      form: { name, email, message, submit, footer, errors },
    },
  } = content;

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      await wait(3000);
      setIsSubmitted(false);
    } else {
      setIsSubmitting(false);
      setSubmitError(true);
      reset();
      await wait(3000);
      setSubmitError(false);
    }
  };

  const calculateState = () => {
    if (isSubmitting) return 'loading';
    if (isSubmitted) return 'success';
    if (submitError) return 'error';
    if (!formState.isValid) return 'invalid';
    return 'initial';
  };

  return (
    <form
      className='flex w-full flex-col items-center gap-10 py-20 md:max-w-[1000px] md:p-20'
      onSubmit={handleSubmit(onSubmit)}
      autoComplete='off'
    >
      <div className='flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-[6%]'>
        <div className='relative w-full md:w-[47%]'>
          <input
            type='text'
            id='name'
            className={`${
              formState.errors.name
                ? 'border-rose-400'
                : 'border-primary-dark dark:border-primary-light'
            } peer block w-full appearance-none rounded-lg border-4 bg-transparent px-2.5 pb-2.5 pt-4  text-xl text-primary-dark  focus:border-primary-dark focus:outline-none focus:ring-0 dark:text-primary-light dark:focus:border-primary-light`}
            placeholder=''
            autoComplete='off'
            aria-invalid={formState.errors.name ? 'true' : 'false'}
            {...register('name', { required: true })}
          />
          <label
            htmlFor='name'
            className={`${
              formState.errors.name
                ? 'text-rose-400'
                : 'text-primary-dark peer-focus:text-primary-dark dark:text-primary-light peer-focus:dark:text-primary-light'
            } absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text bg-primary-light px-2 text-lg font-bold duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-primary-dark`}
          >
            {name[lang]}
          </label>
          <span
            className={`${
              formState.errors.name
                ? 'absolute text-lg text-rose-400'
                : 'hidden'
            }`}
          >
            {errors.NAME[lang]}
          </span>
        </div>
        <div className='relative w-full md:w-[47%]'>
          <input
            type='email'
            id='email'
            className={`${
              formState.errors.email
                ? 'border-rose-400'
                : 'border-primary-dark dark:border-primary-light'
            } peer block w-full appearance-none rounded-lg border-4 bg-transparent px-2.5 pb-2.5 pt-4  text-xl text-primary-dark  focus:border-primary-dark focus:outline-none focus:ring-0 dark:text-primary-light dark:focus:border-primary-light`}
            placeholder=''
            autoComplete='off'
            aria-invalid={formState.errors.email ? 'true' : 'false'}
            {...register('email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,16}$/,
            })}
          />
          <label
            htmlFor='email'
            className={`${
              formState.errors.email
                ? 'text-rose-400'
                : 'text-primary-dark peer-focus:text-primary-dark dark:text-primary-light peer-focus:dark:text-primary-light'
            } absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text bg-primary-light px-2 text-lg font-bold duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-primary-dark`}
          >
            {email[lang]}
          </label>
          <span
            className={`${
              formState.errors.email
                ? 'absolute text-lg text-rose-400'
                : 'hidden'
            }`}
          >
            {formState.errors.email?.type === 'required'
              ? errors.EMAIL[lang]
              : errors.EMAIL_INVALID[lang]}
          </span>
        </div>
      </div>
      <div className='relative w-full'>
        <textarea
          id='message'
          className={`${
            formState.errors.message
              ? 'border-rose-400'
              : 'border-primary-dark dark:border-primary-light'
          } peer block h-40 w-full resize-y appearance-none rounded-lg border-4 bg-transparent px-2.5 pb-2.5  pt-4 text-xl  text-primary-dark focus:border-primary-dark focus:outline-none focus:ring-0 dark:text-primary-light dark:focus:border-primary-light`}
          placeholder=''
          aria-invalid={formState.errors.message ? 'true' : 'false'}
          {...register('message', { required: true })}
        />
        <label
          htmlFor='message'
          className={`${
            formState.errors.message
              ? 'text-rose-400'
              : 'text-primary-dark peer-focus:text-primary-dark dark:text-primary-light peer-focus:dark:text-primary-light'
          } absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text bg-primary-light px-2 text-lg font-bold duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-primary-dark`}
        >
          {message[lang]}
        </label>
        <span
          className={`${
            formState.errors.message
              ? 'absolute text-lg text-rose-400'
              : 'hidden'
          }`}
        >
          {errors.MESSAGE[lang]}
        </span>
      </div>
      <ContactFormButton
        disabled={!formState.isValid}
        state={calculateState()}
        text={submit[lang]}
      />
      <p className='text-xl text-gray-500'>{footer[lang]}</p>
    </form>
  );
}
