import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { assets } from "../assets/assets";

const MobileNav = () => {
  const tabs = ["Home", "Projects", "About", "Contact", "Resume"];
  const [visible, setVisible] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = assets.resume; 
    link.download = "Harshrajsinhresume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setVisible(false);
  };

  return (
    <div className="fixed top-0 right-0 flex md:hidden p-4 py-5">
      <GiHamburgerMenu
        className="text-3xl"
        onClick={() => setVisible(true)}
      />
      <div
        className={`py-5 px-7 w-[70vw] bg-blue-100 h-screen fixed top-0 ${
          visible ? "right-0" : "-right-full"
        } transition-all duration-300`}
      >
        <div className="flex justify-end">
          <div
            className="text-4xl p-2 bg-gray-900 text-white rounded-full w-fit"
            onClick={() => setVisible(false)}
          >
            <IoMdClose />
          </div>
        </div>

        <div className="flex flex-col gap-5 text-2xl mt-6">
          {tabs.map((item, i) =>
            item === "Resume" ? (
              <button
                key={i}
                onClick={handleResumeDownload}
                className="bg-black text-left px-5 py-2 rounded-md font-medium text-white"
              >
                {item}
              </button>
            ) : (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setVisible(false)}
                className=" px-5 py-2 font-medium text-black"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
