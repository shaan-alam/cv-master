import { useContext, useState } from "react";
import { EducationModal } from "..";
import { Context } from "../../Context/Context";
import SkillsModal from "../Modal/SkillsModal";
import SkillsCard from "../SkillsCard";

const Skills = () => {
  const [skillModal, setSkillModal] = useState(false);

  const { skills } = useContext(Context);

  return (
    <div className="bg-white">
      <h1 className="font-bold text-primary my-4">Your Skills</h1>
      {skills.map((skill) => (
        <SkillsCard skill={skill} />
      ))}
      <a
        href="#!"
        className="font-montserrat hover:underline text-gray-600 hover:text-primary text-sm"
        onClick={() => setSkillModal(true)}
      >
        + Add Your Skills
      </a>
      {skillModal && (
        <SkillsModal isOpen={skillModal} setIsOpen={setSkillModal} />
      )}
    </div>
  );
};

export default Skills;
