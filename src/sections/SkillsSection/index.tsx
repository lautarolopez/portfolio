import SkillsList from "@/components/SkillsList";
import DynamicTitle from "@/components/DynamicTitle";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full md:min-h-[97vh] flex flex-col justify-center items-center pt-32 lg:pt-0 snap-start"
    >
      <DynamicTitle section="skills" />
      <SkillsList />
    </section>
  );
}
