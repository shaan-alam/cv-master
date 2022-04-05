import { useState } from "react";
import { ExpierenceModal } from "../";

const Expierences = () => {
  const [expierenceModal, setExpierenceModal] = useState(false);

  return (
    <div className="bg-white">
      <a
        href="#!"
        className="font-montserrat hover:underline text-gray-600 hover:text-primary text-sm"
        onClick={() => setExpierenceModal(true)}
      >
        + Add Your Expierences
      </a>
      {expierenceModal && (
        <ExpierenceModal
          isOpen={expierenceModal}
          setIsOpen={setExpierenceModal}
        />
      )}
    </div>
  );
};

export default Expierences;
