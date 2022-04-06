import { useContext, useRef } from "react";
import Button from "../Button/Button";
import ReactToPdf from "react-to-pdf";
import { Context } from "../../Context/Context";

const Resume = () => {
  const ref = useRef(null);

  const { contactInformation, education, expierences, skills } =
    useContext(Context);

  return (
    <>
      <main className="bg-white rounded-md shadow-xl p-4 text-black" ref={ref}>
        <header className="flex items-center justify-between py-4">
          <div className="left">
            <h1 className="text-3xl font-bold font-montserrat text-primary">
              {contactInformation.fullName}
            </h1>
            <h4 className="font-montserrat text-sm text-gray-600">
              {contactInformation.jobTitle}
            </h4>
            <h4 className="font-montserrat text-[10px] text-gray-600">
              {contactInformation.email}
            </h4>
            <h4 className="font-montserrat text-[10px] text-gray-600">
              {contactInformation.phone}
            </h4>
          </div>
          <div className="right">
            <img
              src={contactInformation.profileImage}
              alt="Profile picture"
              className="rounded-full h-20 w-20 object-cover"
            />
          </div>
        </header>
        <hr className="h-1 bg-gray-200" />
        <div className="expierences">
          <div className="container mx-auto">
            <h1 className="text-primary font-bold mt-4 text-lg">
              Professional Expierence
            </h1>
            <div className="expierences">
              {expierences.map((expierence) => (
                <div className="expierence my-3 flex" id={expierence.id}>
                  <div className="left">
                    <h1 className="text-black font-montserrat text-sm">
                      {expierence.position}
                    </h1>
                    <h4 className="text-[10px] font-montserrat text-gray-600">
                      {expierence.startMonth}/{expierence.startYear} -
                      {expierence.endMonth}/{expierence.endYear}
                    </h4>
                  </div>
                  <div className="right description text-[10px] text-gray-600 font-montserrat w-1/2 ml-4">
                    <p>{expierence.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="h-1 bg-gray-200" />
        <div className="education">
          <div className="container mx-auto">
            <h1 className="text-primary font-bold mt-4 text-lg">
              Education Details
            </h1>
            <div className="educations my-3">
              {education.map((education, index) => (
                <div className="education flex" key={index}>
                  <div className="left">
                    <h1 className="text-black font-montserrat text-sm">
                      {education.degree}
                    </h1>
                    <h4 className="text-[10px] font-montserrat text-gray-600">
                      {education.schoolName}
                    </h4>
                    <h4 className="text-[10px] font-montserrat text-gray-600">
                      {education.startMonth}/{education.startYear} -{" "}
                      {education.endMonth}/{education.endYear}
                    </h4>
                  </div>
                  <div className="right description text-[10px] text-gray-600 font-montserrat w-1/2 ml-4">
                    <p>{education.description}</p>
                  </div>
                </div>
              ))}
              <hr className="h-1 bg-gray-200" />
              <div className="container mx-auto">
                <div className="skills my-3">
                  <h1 className="text-primary font-bold mt-4 text-lg">
                    Skills
                  </h1>
                  <ul className="my-4 list-disc text-sm text-gray-600 mx-4">
                    {skills.map((skill) => (
                      <li key={skill.id}>{skill.skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="my-6">
        <ReactToPdf targetRef={ref} filename="Shaan Alam CV.pdf">
          {({ toPdf }) => (
            <Button variant="secondary" className="bg-white" onClick={toPdf}>
              Download CV
            </Button>
          )}
        </ReactToPdf>
      </div>
    </>
  );
};

export default Resume;
