import FormInput from "../../FormInput";
import Modal from "../index";
import Button from "../../Button/Button";
import { useContext, useState } from "react";
import { Context } from "../../../Context/Context";
import { v4 } from "uuid";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SkillsModal = ({ isOpen, setIsOpen }: Props) => {
  const [skill, setSkill] = useState("");
  const { setSkills } = useContext(Context);

  const saveSkill = () => {
    setSkills((values) => [...values, { id: v4(), skill }]);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Education Details">
      <div>
        <div className="form-control mt-5">
          <FormInput
            title="Skill Name"
            id="skillName"
            type="text"
            onChange={(e: any) => setSkill(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button
          onClick={() => setIsOpen(false)}
          variant="secondary"
          className="mr-4"
        >
          Cancel
        </Button>
        <Button variant="primary" onClick={saveSkill}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default SkillsModal;
