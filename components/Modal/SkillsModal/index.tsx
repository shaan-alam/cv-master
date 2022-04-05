import FormInput from "../../FormInput";
import Modal from "../index";
import { Menu } from "@headlessui/react";
import Button from "../../Button/Button";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SkillsModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Education Details">
      <div>
        <div className="form-control mt-5">
          <FormInput title="Skill Name" id="skillName" type="text" />
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
        <Button onClick={() => setIsOpen(false)} variant="primary">
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default SkillsModal;
