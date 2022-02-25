import { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const HorizentalSidebar = ({ children }) => {
  //states
  const [open, setOpen] = useState(false);

  //functions
  const toggle = () => setOpen((prevState) => !prevState);

  return (
    <aside
      className={`md:hidden shadow-md py-2 mt-4 rounded-md bg-p-primary transition-all overflow-hidden ${
        open ? "max-h-[500px]" : "max-h-[50px]"
      }`}
    >
      <p
        className="px-3 py-1 mx-2 my-1 mb-3 text-center rounded-md cursor-pointer text-p-bg-color hover:text-white whitespace-nowrap"
        onClick={toggle}
      >
        گزینه ها
        <CaretDownOutlined
          className={`mr-3 transition-all bottom-1 relative ${
            open && "rotate-180"
          }`}
        />
      </p>
      {children}
    </aside>
  );
};

export default HorizentalSidebar;
