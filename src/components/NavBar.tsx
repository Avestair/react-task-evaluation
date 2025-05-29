import {
  PiBellLight,
  PiEnvelopeSimpleLight,
  PiGearLight,
  PiGlobeLight,
  PiMagnifyingGlassLight,
  PiMoonLight,
  PiSunLight,
} from "react-icons/pi";
import Card from "../ui/Card";
import Divider from "../ui/Divider";

export default function NavBar() {
  return (
    <Card className="flex !p-2 !w-full justify-between">
      <div className="flex gap-3 px-3 w-[50%] h-fit p-3 mt-1">
        <PiMagnifyingGlassLight className="size-6" />
        <input
          className="w-[80%] placeholder:text-[15px] outline-none"
          placeholder="Search Here..."
          type="text"
        />
      </div>

      <div className="flex gap-8 ">
        <div className="flex gap-3 items-center">
          <PiSunLight className="size-6" />
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" value="" />
            <div className="group peer rounded-full duration-300 w-[40px] h-[20px] ring-2 peer:-translate-x-8 ring-gray-200 bg-gray-200 after:duration-300 after:bg-my-primary peer-checked:after:bg-my-primary peer-checked:ring-gray-200 after:rounded-full after:absolute after:h-5 after:w-5 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-hover:after:scale-95"></div>
          </label>
          <PiMoonLight className="size-6" />
        </div>
        <Divider direction="vertical" />

        <div className="flex gap-8 items-center">
          <PiGlobeLight className="size-6 cursor-pointer" />
          <PiBellLight className="size-6 cursor-pointer" />
          <PiEnvelopeSimpleLight className="size-6 cursor-pointer" />
        </div>

        <Divider direction="vertical" />

        <div className="flex gap-4">
          <div className="grid h-fit mt-1 cursor-pointer items-center">
            <p className="font-semibold capitalize">test user</p>
            <div className="flex gap-2 justify-self-end">
              <span className="rounded-full mt-[7px] w-[10px] h-[10px] bg-green-600"></span>
              <p className="text-gray-500 text-sm">online</p>
            </div>
          </div>
          <span className="bg-orange-400 rounded-full p-2 size-10 mt-1.5">
            <img
              src="/profilepic.png"
              className="w-full h-full relative"
              alt=""
            />
          </span>
          <span className="flex items-center">
            <div className="border  border-gray-300 w-fit h-fit p-2 rounded-full cursor-pointer">
              <PiGearLight className="size-6" />
            </div>
          </span>
        </div>
      </div>
    </Card>
  );
}
