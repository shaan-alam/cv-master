import { useContext } from "react";
import { Context } from "../../Context/Context";
import FormInput from "../FormInput";
import File64 from "react-file-base64";

const ContactInformation = () => {
  const { setContactInformation } = useContext(Context);

  const onFormInputChange = (e: any) => {
    setContactInformation((info) => ({
      ...info,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="bg-white">
      <h1 className="font-bold text-primary my-4">Contact Information</h1>
      <div className="form-control mt-5">
        <FormInput
          title="Full Name"
          id="fullName"
          type="text"
          onChange={onFormInputChange}
        />
      </div>
      <div className="form-control mt-5">
        <FormInput
          title="Job Title"
          id="jobTitle"
          type="text"
          onChange={onFormInputChange}
        />
      </div>
      <div className="form-control mt-5">
        <label
          htmlFor="profilePicture"
          className="block mb-4 text-gray-600 font-montserrat text-sm"
        >
          Profile Picture
        </label>
        <File64
          multiple={false}
          id="profilePicture"
          onDone={(file) =>
            setContactInformation((values) => ({
              ...values,
              profileImage: file.base64,
            }))
          }
        />
      </div>
      <div className="form-control mt-5">
        <FormInput
          title="Phone"
          id="phone"
          type="text"
          onChange={onFormInputChange}
        />
      </div>
      <div className="form-control mt-5">
        <FormInput
          title="Email"
          id="email"
          type="email"
          onChange={onFormInputChange}
        />
      </div>
    </div>
  );
};

export default ContactInformation;
