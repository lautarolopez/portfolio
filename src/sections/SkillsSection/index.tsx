import SkillsList from "@/components/SkillsList";
import SkillsTitle from "@/components/SkillsTitle";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full min-h-[97vh] flex flex-col justify-center items-center lg:justify-around pt-32 lg:pt-0"
    >
      <SkillsTitle />
      <SkillsList />
    </section>
  );
}
