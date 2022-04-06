import React, { useContext, useState } from "react";
import FormInput from "../../FormInput";
import Modal from "../index";
import { Menu } from "@headlessui/react";
import Button from "../../Button/Button";
import { Context, Expierence } from "../../../Context/Context";
import { v4 } from "uuid";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpierenceModal = ({ isOpen, setIsOpen }: Props) => {
  const [values, setValues] = useState<Expierence>({
    id: "",
    companyName: "",
    endMonth: 0,
    endYear: "",
    position: "",
    startMonth: 0,
    startYear: "",
    description: "",
  });
  const { setExpierences } = useContext(Context);

  const saveForm = () => {
    setExpierences((expierences) => [...expierences, values]);
    setIsOpen(false);
  };

  const onFormInputChange = (e: any) => {
    setValues((exp) => ({ ...exp, id: v4(), [e.target.id]: e.target.value }));
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Education Details">
      <div>
        <div className="form-control mt-5">
          <FormInput
            title="Position"
            id="position"
            type="text"
            onChange={onFormInputChange}
          />
        </div>
        <div className="form-control mt-5">
          <FormInput
            title="Company Name"
            id="companyName"
            type="text"
            onChange={onFormInputChange}
          />
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
                    <div className="grid grid-cols-2" key={index}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            key={index}
                            className={`${
                              active && "bg-primary text-white"
                            } block px-4 py-2 font-montserrat text-[10px] rounded-md text-center`}
                            href="#!"
                            onClick={() =>
                              setValues((values) => ({
                                ...values,
                                startMonth: year,
                              }))
                            }
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
                            href="#!"
                            onClick={() =>
                              setValues((values) => ({
                                ...values,
                                startMonth: year + 1,
                              }))
                            }
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
            <FormInput
              id="startYear"
              title="Start Year"
              type="text"
              onChange={onFormInputChange}
            />
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
                    <div className="grid grid-cols-2" key={index}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${
                              active && "bg-primary text-white"
                            } block px-4 py-2 font-montserrat text-[10px] rounded-md text-center`}
                            href="#!"
                            onClick={() =>
                              setValues((values) => ({
                                ...values,
                                endMonth: year,
                              }))
                            }
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
                            href="#!"
                            onClick={() =>
                              setValues((values) => ({
                                ...values,
                                endMonth: year + 1,
                              }))
                            }
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
            <FormInput
              id="endYear"
              title="End Year"
              type="text"
              onChange={onFormInputChange}
            />
          </div>
          <div className="form-control">
            <label
              htmlFor="fullName"
              className="text-gray-600 font-montserrat text-sm mt-4 block"
            >
              Description
            </label>
            <textarea
              id="description"
              className="mt-1 px-4 py-2 bg-gray-200 rounded-md transition-all focus:ring-1 focus:ring-primary w-full font-montserrat"
              onChange={(e) =>
                setValues((values) => ({
                  ...values,
                  description: e.target.value,
                }))
              }
            ></textarea>
          </div>
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
        <Button onClick={saveForm} variant="primary">
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default ExpierenceModal;
