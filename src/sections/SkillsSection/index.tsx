import SkillsList from "@/components/SkillsList";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full min-h-[97vh] flex flex-col justify-center items-center lg:justify-around pt-32"
    >
      <h2 className="text-4xl font-bold text-center lg:text-left">
        Skills &amp; Technologies
      </h2>
      <SkillsList />
    </section>
  );
}
