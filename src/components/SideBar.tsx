import Card from "../ui/Card";
import SideBarItem from "../ui/SideBarItem";
import {
  PiHouseLight,
  PiUserCircleLight,
  PiChartBarLight,
  PiBinocularsLight,
  PiDatabaseLight,
  PiGearLight,
  PiShieldCheckLight,
} from "react-icons/pi";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  active?: boolean;
  subMenuItems?: Array<{ name: string }>;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

export default function SideBar() {
  const menuSections: MenuSection[] = [
    {
      items: [
        {
          name: "Dashboard",
          icon: <PiHouseLight className="size-6" />,
          active: true,
          subMenuItems: [{ name: "Overview" }, { name: "Statistics" }],
        },
        {
          name: "Analytics",
          icon: <PiChartBarLight className="size-6" />,
          active: false,
          subMenuItems: [{ name: "Reports" }, { name: "Insights" }],
        },
        {
          name: "Tracking",
          icon: <PiBinocularsLight className="size-6" />,
          active: false,
          subMenuItems: [{ name: "Progress" }, { name: "History" }],
        },
      ],
    },
    {
      title: "DATA MANAGEMENT",
      items: [
        {
          name: "Database",
          icon: <PiDatabaseLight className="size-6" />,
          active: true,
          subMenuItems: [{ name: "Export" }, { name: "Import" }],
        },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        {
          name: "Your Profile",
          icon: <PiUserCircleLight className="size-6" />,
          active: false,
        },
        {
          name: "Settings",
          icon: <PiGearLight className="size-6" />,
        },
        {
          name: "Security",
          icon: <PiShieldCheckLight className="size-6" />,
          active: false,
        },
      ],
    },
  ];

  return (
    <Card
      shadow="sm"
      className="bg-white md:!w-[18%] p-4 pt-[10px] pb-8 grid gap-[16px]"
    >
      <div className="flex gap-3 pt-6 pl-4">
        <img src="/icon.svg" className="size-7" alt="OrbitNest Logo" />
        <p className="mt-0.5 font-medium text-xl text-my-text">OrbitNest</p>
      </div>
      <span className="mt-1.5 mb-2 h-[2px] bg-[#E9E9E9]"></span>
      {menuSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="grid gap-[16px]">
          {section.title && (
            <p className="text-gray-500/60 relative top-1 ml-2 mt-3 text-sm">
              {section.title}
            </p>
          )}
          {section.items.map((item, itemIndex) => (
            <SideBarItem
              key={`${sectionIndex}-${itemIndex}`}
              name={item.name}
              icon={item.icon}
              active={item.active}
              subMenuItems={item.subMenuItems}
            />
          ))}
        </div>
      ))}
    </Card>
  );
}
