import { useState } from "react";
import { Tab } from "@headlessui/react";
import { ContactInformation, Education, Expierences } from "..";
import Button from "../Button/Button";
import Skills from "../Skills";

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="w-full shadow-lg rounded-md mt-8 h-auto block">
      <Tab.Group selectedIndex={currentTab} onChange={setCurrentTab}>
        <Tab.List className="w-full text-white py-4 border-b overflow-auto">
          <Tab className="w-[40%] md:w-[20%] transition-all text-gray-500 text-sm hover:text-primary rounded-md px-6 py-3 font-montserrat">
            Contact Information
          </Tab>
          <Tab className="w-[40%] md:w-[20%] transition-all text-gray-500 text-sm hover:text-primary rounded-md px-6 py-3 font-montserrat">
            Education
          </Tab>
          <Tab className="w-[40%] md:w-[20%] transition-all text-gray-500 text-sm hover:text-primary rounded-md px-6 py-3 font-montserrat">
            Expierences
          </Tab>
          <Tab className="w-[40%] md:w-[20%] transition-all text-gray-500 text-sm hover:text-primary rounded-md px-6 py-3 font-montserrat">
            Skills
          </Tab>
          <Tab className="w-[40%] md:w-[20%] transition-all text-gray-500 text-sm hover:text-primary rounded-md px-6 py-3 font-montserrat">
            Languages
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
          <Tab.Panel className="py-4 px-12">Content 5</Tab.Panel>
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
      </div>
    </div>
  );
};

export default Sidebar;
