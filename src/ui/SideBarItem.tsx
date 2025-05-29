import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SubMenu, { SubMenuProps } from "./SubMenu";
import { PiCaretRightLight } from "react-icons/pi";

interface SideBarItemsProps {
  name: string;
  icon: React.ReactNode;
  subMenuItems?: SubMenuProps["items"];
  active: boolean | undefined;
}

export default function SideBarItem({
  name,
  icon,
  subMenuItems = [],
}: SideBarItemsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (subMenuItems && subMenuItems.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="space-y-1">
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={toggleMenu}
        className={`flex transition-all cursor-pointer p-2.5 duration-300 rounded-md justify-between w-full px-2 ${
          isOpen
            ? "bg-my-primary hover:bg-my-dark-primary text-white"
            : "bg-white text-my-text hover:bg-my-bg"
        }`}
      >
        <div className="flex gap-2 select-none">
          {icon}
          <p>{name}</p>
        </div>
        {subMenuItems && subMenuItems.length > 0 && (
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <PiCaretRightLight
              className={`size-6 ${isOpen ? "fill-white" : "fill-gray-500"}`}
            />
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && subMenuItems && subMenuItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <SubMenu items={subMenuItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
