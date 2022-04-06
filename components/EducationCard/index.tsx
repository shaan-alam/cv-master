import { Context, Education } from "../../Context/Context";
import { HiTrash } from "react-icons/hi";
import { useContext } from "react";

interface Props {
  education: Education;
}

const EducationCard = ({ education }: Props) => {
  const { setEducation } = useContext(Context);

  const deleteEducation = (id: string) =>
    setEducation((values) => values.filter((education) => education.id !== id));

  return (
    <div className="my-6 rounded-md border border-gray-300 p-4 flex items-center justify-between">
      <div className="left">
        <h1 className="text-black font-montserrat text-sm">
          {education.degree}
        </h1>
        <h4 className="text-[10px] font-montserrat text-gray-600">
          {education.startMonth}/{education.startYear} - {education.endMonth}/
          {education.endYear}
        </h4>
      </div>
      <div className="right">
        <a href="#!" onClick={() => deleteEducation(education.id)}>
          <HiTrash color="#06f" />
        </a>
      </div>
    </div>
  );
};

export default EducationCard;
