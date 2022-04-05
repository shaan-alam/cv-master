import FormInput from "../../FormInput";
import Modal from "../index";
import { Menu } from "@headlessui/react";
import Button from "../../Button/Button";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EducationModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Education Details">
      <div>
        <div className="form-control mt-5">
          <FormInput title="School Name" id="schoolName" type="text" />
        </div>
        <div className="form-control mt-5">
          <FormInput title="School Location" id="schoolLocation" type="text" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control mt-5">
            <div className="relative">
              <Menu>
                <Menu.Button
                  id="monthDropdown"
                  className="mt-10 bg-gray-200 px-6 py-2 rounded-md font-montserrat text-sm w-full"
                >
                  Start Month &darr;
                </Menu.Button>
                <Menu.Items className="absolute top-18 block w-full shadow-md bg-white z-10">
                  {[1, 3, 5, 7, 9, 11].map((year, index) => (
                    <div className="grid grid-cols-2">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            key={index}
                            className={`${
                              active && "bg-primary text-white"
                            } block px-4 py-2 font-montserrat text-[10px] rounded-md text-center`}
                            href="/account-settings"
                          >
                            {year}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            key={index + 1}
                            className={`${
                              active && "bg-primary text-white"
                            } block px-4 py-2 font-montserrat text-[10px] rounded-md text-center`}
                            href="/account-settings"
                          >
                            {year + 1}
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Menu>
            </div>
          </div>
          <div className="form-control mt-5">
            <FormInput id="startYear" title="Start Year" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control mt-5">
            <div className="relative">
              <Menu>
                <Menu.Button
                  id="monthDropdown"
                  className="mt-10 bg-gray-200 px-6 py-2 rounded-md font-montserrat text-sm w-full"
                >
                  End Month &uarr;
                </Menu.Button>
                <Menu.Items className="absolute top-[-200%] block w-full shadow-md bg-white z-10">
                  {[1, 3, 5, 7, 9, 11].map((year, index) => (
                    <div className="grid grid-cols-2">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            key={index}
                            className={`${
                              active && "bg-primary text-white"
                            } block px-4 py-2 font-montserrat text-[10px] rounded-md text-center`}
                            href="/account-settings"
                          >
                            {year}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            key={index + 1}
                            className={`${
                              active && "bg-primary text-white"
                            } block px-4 py-2 font-montserrat text-[10px] rounded-md text-center`}
                            href="/account-settings"
                          >
                            {year + 1}
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Menu>
            </div>
          </div>
          <div className="form-control mt-5">
            <FormInput id="endYear" title="End Year" type="text" />
          </div>
        </div>
        <div className="form-control mt-5">
          <FormInput id="degree" title="Degree" type="text" />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button onClick={() => setIsOpen(false)} variant="secondary" className="mr-4">Cancel</Button>
        <Button onClick={() => setIsOpen(false)} variant="primary">Save</Button>
      </div>
    </Modal>
  );
};

export default EducationModal;
