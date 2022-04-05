import { useState } from "react";
import { EducationModal } from "..";

const Education = () => {
  const [educationModal, setEducationModal] = useState(false);

  return (
    <div className="bg-white">
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
