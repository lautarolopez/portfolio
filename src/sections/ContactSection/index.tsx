import DynamicTitle from "@/components/DynamicTitle";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full md:min-h-[97vh] flex flex-col justify-center items-center pt-32 lg:pt-0 snap-start xl:scroll-m-28"
    >
      <DynamicTitle section="contact" />
      <ContactForm />
    </section>
  );
}
