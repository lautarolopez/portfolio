import DynamicTitle from '@/components/DynamicTitle';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='flex w-full snap-start flex-col items-center justify-center pt-32 md:min-h-[97vh] lg:pt-0 xl:scroll-m-28'
    >
      <DynamicTitle section='contact' />
      <ContactForm />
    </section>
  );
}
