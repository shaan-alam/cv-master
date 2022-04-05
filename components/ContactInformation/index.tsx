import FormInput from "../FormInput";

const ContactInformation = () => {
  return (
    <div className="bg-white">
      <h1 className="font-bold text-primary my-4">Contact Information</h1>
      <div className="form-control mt-5">
        <FormInput
          title="Full Name"
          id="fullName"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div className="form-control mt-5">
        <FormInput
          title="Job Title"
          id="jobTitle"
          type="text"
          placeholder="Job Title"
        />
      </div>
      <div className="form-control mt-5">
        <FormInput
          title="Profile Image"
          id="profileImage"
          type="file"
          placeholder="Profile Image"
        />
      </div>
      <div className="form-control mt-5">
        <FormInput title="Phone" id="phone" type="text" placeholder="Phone" />
      </div>
      <div className="form-control mt-5">
        <FormInput title="Email" id="email" type="email" placeholder="Email" />
      </div>
    </div>
  );
};

export default ContactInformation;
