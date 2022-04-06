import ReactDOM from "react-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, title, isOpen, setIsOpen }: Props) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal h-screen w-screen fixed inset-0 bg-[#0066ff50] flex items-center justify-center">
          <div className="modal-content bg-white w-[90%] md:w-[65%] rounded-md shadow-xl overflow-auto h-3/4">
            <div className="modal-header flex items-center p-4 border-b-2 sticky top-0 bg-white">
              <h2 className="font-semibold">{title}</h2>
              <a
                href="#!"
                className="text-black ml-auto"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </a>
            </div>
            <div className="modal-body p-4">{children}</div>
          </div>
        </div>,
        document.getElementById("modal")
      )
    : null;
};

export default Modal;


