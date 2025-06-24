import { FaCircle } from "react-icons/fa";

const SubHeading = ({ heading, className }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-[2px] w-6 bg-secondary"></div>
      <FaCircle className="w-2 h-2 text-secondary" />
      <h2 className={`${className} text-sm font-bold tracking-wider`}>{heading}</h2>
      <FaCircle className="w-2 h-2 text-secondary" />
      <div className="h-[2px] w-6 bg-secondary"></div>
    </div>
  );
};

export default SubHeading;
