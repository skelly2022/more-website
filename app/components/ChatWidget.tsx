import Image from "next/image";
import { BsChatLeft} from "react-icons/bs";

const ChatWidget = () => {
  return (
    <div className="fixed z-40 flex items-center justify-center transition duration-300 bg-indigo-600 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-indigo-500 focus:bg-indigo-500 ease">
      <BsChatLeft size={24} className="text-white"/>
    </div>
  );
};

export default ChatWidget;
