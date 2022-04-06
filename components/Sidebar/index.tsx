import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { ContactInformation, Education, Expierences } from "..";
import Button from "../Button/Button";
import Skills from "../Skills";

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="w-full shadow-lg rounded-md mt-8 h-screen block">
      <Tab.Group
        selectedIndex={currentTab}
        onChange={setCurrentTab}
        defaultIndex={0}
      >
        <Tab.List className="w-full text-white py-4 border-b overflow-auto flex">
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`${
                  selected && "bg-gray-100 ring text-primary"
                } flex items-center justify-center cursor-pointer w-[40%] md:w-[20%] transition-all text-gray-500 text-sm hover:text-primary rounded-md px-6 py-3 font-montserrat font-semibold`}
              >
                General
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`${
                  selected && "bg-gray-100 ring text-primary"
                } flex items-center cursor-pointer w-[40%] md:w-[20%] transition-all text-gray-500 text-sm hover:text-primary rounded-md px-6 py-3 font-montserrat font-semibold`}
              >
                Expierences
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`${
                  selected && "bg-gray-100 ring text-primary"
                } flex items-center justify-center cursor-pointer w-[40%] md:w-[20%] transition-all text-gray-500 text-sm hover:text-primary rounded-md px-6 py-3 font-montserrat font-semibold`}
              >
                Education
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <div
                className={`${
                  selected && "bg-gray-100 ring text-primary"
                } flex items-center justify-center cursor-pointer w-[40%] md:w-[20%] transition-all text-gray-500 text-sm hover:text-primary rounded-md px-6 py-3 font-montserrat font-semibold`}
              >
                Skills
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="py-4 px-12">
            <ContactInformation />
          </Tab.Panel>
          <Tab.Panel className="py-4 px-12">
            <Education />
          </Tab.Panel>
          <Tab.Panel className="py-4 px-12">
            <Expierences />
          </Tab.Panel>
          <Tab.Panel className="py-4 px-12">
            <Skills />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="py-4 px-12">
        {currentTab == 2 ? (
          <Button variant="primary">Download</Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => setCurrentTab(currentTab + 1)}
          >
            Next
          </Button>
        )}
        <div className="my-12 container mx-auto text-sm text-gray-500 font-montserrat font-regular">
          Made with ♥ by Shaan Alam
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
