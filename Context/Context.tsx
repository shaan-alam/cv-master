import React, { createContext, useState } from "react";

export interface ContactInformation {
  fullName: string;
  jobTitle: string;
  profileImage: string;
  phone: string;
  email: string;
}

export interface Education {
  id: string;
  schoolName: string;
  schoolLocation: string;
  startMonth: number;
  startYear: string;
  endMonth: number;
  endYear: string;
  degree: string;
  description: string;
}

export interface Expierence {
  id: string;
  position: string;
  companyName: string;
  startMonth: number;
  startYear: string;
  endMonth: number;
  endYear: string;
  description: string;
}

export interface Skills {
  id: string;
  skill: string;
}

export interface IContext {
  contactInformation: ContactInformation;
  setContactInformation: React.Dispatch<
    React.SetStateAction<ContactInformation>
  >;
  education: Education[];
  setEducation: React.Dispatch<React.SetStateAction<Education[]>>;
  expierences: Expierence[];
  setExpierences: React.Dispatch<React.SetStateAction<Expierence[]>>;
  skills: Skills[];
  setSkills: React.Dispatch<React.SetStateAction<Skills[]>>;
}

export const Context = createContext<IContext | null>(null);

const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [contactInformation, setContactInformation] =
    useState<ContactInformation>({
      email: "peter@parker@gmail.com",
      fullName: "Peter Parker",
      jobTitle: "Spiderman",
      phone: "555-555-5555",
      profileImage:
        "https://www.gannett-cdn.com/-mm-/cc053686530ce446f0a27dc352961fac33dd12ac/c=1144-81-2630-920/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG",
    });
  const [education, setEducation] = useState<Education[]>([]);
  const [expierences, setExpierences] = useState<Expierence[]>([]);
  const [skills, setSkills] = useState<Skills[]>([]);

  return (
    <Context.Provider
      value={{
        contactInformation,
        setContactInformation,
        education,
        setEducation,
        expierences,
        setExpierences,
        skills,
        setSkills,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
