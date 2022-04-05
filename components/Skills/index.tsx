import { useState } from "react";
import { EducationModal } from "..";
import SkillsModal from "../Modal/SkillsModal";

const Skills = () => {
  const [skillModal, setSkillModal] = useState(false);

  return (
    <div className="bg-white">
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
