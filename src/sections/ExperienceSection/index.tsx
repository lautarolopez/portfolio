import ExperiencesList from "@/components/ExperiencesList";
import DynamicTitle from "@/components/DynamicTitle";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full md:min-h-[97vh] flex flex-col justify-center items-center pt-32 lg:pt-0 snap-start xl:scroll-m-28"
    >
      <DynamicTitle section="experience" />
      <ExperiencesList />
    </section>
  );
}
