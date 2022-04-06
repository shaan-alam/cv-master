import { useContext, useState } from "react";
import { EducationCard, EducationModal } from "..";
import { Context } from "../../Context/Context";

const Education = () => {
  const [educationModal, setEducationModal] = useState(false);
  const { education } = useContext(Context);

  return (
    <div className="bg-white">
      <h1 className="font-bold text-primary my-4">Educational Details</h1>
      {education.map((edu) => (
        <EducationCard education={edu} />
      ))}
      <a
        href="#!"
        className="font-montserrat hover:underline text-gray-600 hover:text-primary text-sm"
        onClick={() => setEducationModal(true)}
      >
        + Add Educational Details
      </a>
      {educationModal && (
        <EducationModal isOpen={educationModal} setIsOpen={setEducationModal} />
      )}
    </div>
  );
};

export default Education;
