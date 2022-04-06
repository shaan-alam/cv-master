import { useContext, useState } from "react";
import { ExpierenceModal } from "../";
import { Context } from "../../Context/Context";
import ExpierenceCard from "../ExpierenceCard";

const Expierences = () => {
  const [expierenceModal, setExpierenceModal] = useState(false);
  const { expierences } = useContext(Context);

  return (
    <div className="bg-white">
      <h1 className="font-bold text-primary my-4">Previous Expierences</h1>
      {expierences.map((exp) => (
        <ExpierenceCard expierence={exp} key={exp.id} />
      ))}
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
