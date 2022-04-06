import { Context, Education, Skills } from "../../Context/Context";
import { HiTrash } from "react-icons/hi";
import { useContext } from "react";

interface Props {
  skill: Skills;
}

const SkillsCard = ({ skill }: Props) => {
  const { setSkills } = useContext(Context);

  const deleteSkill = (id: string) =>
    setSkills((values) => values.filter((skill) => skill.id !== id));

  return (
    <div className="my-6 rounded-md border border-gray-300 p-4 flex items-center justify-between">
      <div className="left">
        <h1 className="text-black font-montserrat text-sm">{skill.skill}</h1>
      </div>
      <div className="right">
        <a href="#!" onClick={() => deleteSkill(skill.id)}>
          <HiTrash color="#06f" />
        </a>
      </div>
    </div>
  );
};

export default SkillsCard;
