import { Context, Expierence } from "../../Context/Context";
import { HiTrash } from "react-icons/hi";
import { useContext } from "react";

interface Props {
  expierence: Expierence;
}

const ExpierenceCard = ({ expierence }: Props) => {
  const { setExpierences } = useContext(Context);

  const deleteExpierence = (id: string) =>
    setExpierences((values) =>
      values.filter((expierence) => expierence.id !== id)
    );

  return (
    <div className="my-6 rounded-md border border-gray-300 p-4 flex items-center justify-between">
      <div className="left">
        <h1 className="text-black font-montserrat text-sm">
          {expierence.position}
        </h1>
        <h4 className="text-[10px] font-montserrat text-gray-600">
          {expierence.companyName}
        </h4>
        <h4 className="text-[10px] font-montserrat text-gray-600">
          {expierence.startMonth}/{expierence.startYear} - {expierence.endMonth}
          /{expierence.endYear}
        </h4>
      </div>
      <div className="right">
        <a href="#!" onClick={() => deleteExpierence(expierence.id)}>
          <HiTrash color="#06f" />
        </a>
      </div>
    </div>
  );
};

export default ExpierenceCard;
