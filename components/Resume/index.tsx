const Resume = () => {
  return (
    <main className="bg-white rounded-md shadow-xl p-4 text-black">
      <header className="flex items-center justify-between py-4">
        <div className="left">
          <h1 className="text-3xl font-bold font-montserrat text-primary">
            Shaan Alam
          </h1>
          <h4 className="font-montserrat text-sm text-gray-600">SDE</h4>
        </div>
        <div className="right">
          <img
            src="https://shaanalam.vercel.app/shaan.webp"
            alt="Profile picture"
            className="rounded-full"
          />
        </div>
      </header>
      <hr className="h-1 bg-gray-200" />
      <div className="expierences">
        <div className="container mx-auto">
          <h1 className="text-primary font-bold mt-4 text-lg">
            Professional Expierence
          </h1>
          <div className="">
            <div className="expierence my-3 flex">
              <div className="left">
                <h1 className="text-black font-montserrat text-sm">
                  Human Resource Manager
                </h1>
                <h4 className="text-[10px] font-montserrat text-gray-600">
                  12/2022 - 12/2023
                </h4>
              </div>
              <div className="right description text-[10px] text-gray-600 font-montserrat w-1/2 ml-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta atque nisi, expedita explicabo ut adipisci repudiandae
                  eum quae alias nobis.
                </p>
              </div>
            </div>
            <div className="expierence my-3 flex">
              <div className="left">
                <h1 className="text-black font-montserrat text-sm">
                  Human Resource Manager
                </h1>
                <h4 className="text-[10px] font-montserrat text-gray-600">
                  12/2022 - 12/2023
                </h4>
              </div>
              <div className="right description text-[10px] text-gray-600 font-montserrat w-1/2 ml-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta atque nisi, expedita explicabo ut adipisci repudiandae
                  eum quae alias nobis.
                </p>
              </div>
            </div>
            <div className="expierence my-3 flex">
              <div className="left">
                <h1 className="text-black font-montserrat text-sm">
                  Human Resource Manager
                </h1>
                <h4 className="text-[10px] font-montserrat text-gray-600">
                  12/2022 - 12/2023
                </h4>
              </div>
              <div className="right description text-[10px] text-gray-600 font-montserrat w-1/2 ml-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta atque nisi, expedita explicabo ut adipisci repudiandae
                  eum quae alias nobis.
                </p>
              </div>
            </div>
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
            <div className="education flex">
              <div className="left">
                <h1 className="text-black font-montserrat text-sm">
                  BSC in Computer Science
                </h1>
                <h4 className="text-[10px] font-montserrat text-gray-600">
                  12/2022 - 12/2023
                </h4>
              </div>
              <div className="right description text-[10px] text-gray-600 font-montserrat w-1/2 ml-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta atque nisi, expedita explicabo ut adipisci repudiandae
                  eum quae alias nobis.
                </p>
              </div>
            </div>
            <div className="education my-3 flex">
              <div className="left">
                <h1 className="text-black font-montserrat text-sm">
                  BSC in Computer Science
                </h1>
                <h4 className="text-[10px] font-montserrat text-gray-600">
                  12/2022 - 12/2023
                </h4>
              </div>
              <div className="right description text-[10px] text-gray-600 font-montserrat w-1/2 ml-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta atque nisi, expedita explicabo ut adipisci repudiandae
                  eum quae alias nobis.
                </p>
              </div>
            </div>
            <hr className="h-1 bg-gray-200" />
            <div className="container mx-auto">
              <div className="skills my-3">
                <h1 className="text-primary font-bold mt-4 text-lg">Skills</h1>
                <ul className="my-4 list-disc text-sm text-gray-600 mx-4">
                  <li>Web Development</li>
                  <li>Web Designing</li>
                  <li>Graphic Designing</li>
                  <li>Data Structures & Algorithms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
