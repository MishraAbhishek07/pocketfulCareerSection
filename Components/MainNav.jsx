"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import CustomDropdown from "./CustomDropdown";
import CustomDropDown1 from "./CustomDropDown1";

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

function MainNav() {
  const [isOpen, setIsOpen] = useState("");
  const [selectSearch, setSelectSearch] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedSubMenu, setSelectedSubMenu] = useState("");

  const menuData = {
    Stocks: ["All Stocks", "Group Stocks", "Sectors"],
    IPOs: ["Upcoming IPOs", "Current IPOs", "Recently Closed IPOs"],
  };

  function hanldleDropDownToggle(menu) {
    if (isOpen !== menu) {
      setIsOpen(menu);
    }
  }

  return (
    <Navbar
      isBordered
      isBlurred={false}
      className="shadow-[0_4px_12px_2px_rgba(35,31,32,0.07)] backdrop-blur-[24px]"
      classNames={{
        base: "max-w-full w-full",
        wrapper: "max-w-full w-full px-4 py-[14px] max-xl:py-3",
      }}
    >
      <NavbarContent className="" justify="start">
        <NavbarBrand>
          <Image src={"/Logo.svg"} alt="logo" height={23.83} width={130} />
        </NavbarBrand>
        <NavbarContent justify="end" className="gap-2 md:hidden">
          {selectSearch ? (
            <div
              onMouseLeave={() => setSelectSearch(false)}
              className="relative"
            >
              <Input
                classNames={{
                  base: "h-7 w-[160px]",
                  mainWrapper: "h-7",
                  input: "text-[10px]",
                  inputWrapper:
                    "h-7 min-h-7 font-normal border text-default-500 px-[5px] py-0",
                }}
                placeholder="Search Stocks, News, Companies…"
                size="sm"
                startContent={<CiSearch size={20} />}
                type="search"
                variant="bordered"
              />
            </div>
          ) : (
            <button
              onClick={() => {
                setSelectSearch(true);
              }}
            >
              <CiSearch size={25} />
            </button>
          )}
          <NavbarMenuToggle content="ABCD" aria-label="Open menu" />
        </NavbarContent>
        <NavbarMenu className="max-lg:gap-2 xl:gap-[18px] bg-white max-xl:gap[13px]">
          <NavbarMenuItem>
            <Link className="font-medium text-lg" color="foreground" href="#">
              Invest
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="font-medium text-lg" color="foreground" href="#">
              Trade
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="relative">
            <Button
              variant="flat"
              className="bg-transparent p-0 min-w-10 font-medium text-lg"
              endContent={
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen === "markets" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  size={16}
                />
              }
              onMouseEnter={() => hanldleDropDownToggle("markets")}
            >
              Markets
            </Button>
            {isOpen === "markets" && (
              <CustomDropdown
                menuItems={menuData}
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
                selectedSubMenu={selectedSubMenu}
                setSelectedSubMenu={setSelectedSubMenu}
                hanldleDropDownToggle={hanldleDropDownToggle}
              />
            )}
          </NavbarMenuItem>
          <NavbarMenuItem className="relative mt-[10px]">
            <Button
              variant="flat"
              className="bg-transparent p-0 min-w-10 font-medium text-lg"
              endContent={
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen === "platforms" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  size={16}
                />
              }
              onMouseEnter={() => hanldleDropDownToggle("platforms")}
            >
              Platforms
            </Button>
            {isOpen === "platforms" && <CustomDropDown1 />}
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="font-medium text-lg" color="foreground" href="#">
              Blog
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="font-medium text-lg" color="foreground" href="#">
              Support
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="gap-x-[10px] grid grid-cols-3">
            <Button
              variant="faded"
              className="relative border-[#ffc720] col-span-2 bg-[#ffda00] border rounded-md h-10 font-semibold text-base overflow-hidden btn-alt"
            >
              Open DEMAT Account
            </Button>{" "}
            <Button
              variant="bordered"
              className="col-span-1 border border-black rounded-md h-10 font-semibold text-base"
            >
              Login
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
        <NavbarContent className="md:flex max-lg:gap-2 xl:gap-[18px] max-md:hidden max-xl:gap[13px]">
          <NavbarItem>
            <Link
              className="max-lg:text-[11px] xl:text-[15px] max-xl:text-[13px]"
              color="foreground"
              href="#"
            >
              Invest
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="max-lg:text-[11px] xl:text-[15px] max-xl:text-[13px]"
              color="foreground"
              href="#"
            >
              Trade
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              variant="flat"
              className="bg-transparent p-0 min-w-10 text-medium max-lg:text-[11px] xl:text-[15px] max-xl:text-[13px]"
              endContent={
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen === "markets" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  size={16}
                />
              }
              onMouseEnter={() => hanldleDropDownToggle("markets")}
            >
              Markets
            </Button>
            {isOpen === "markets" && (
              <div
                className="top-full left-0 z-10 absolute shadow-[0_4px_12px_2px_rgba(35,31,32,.07)] backdrop-blur-[24px] py-[14px] w-full"
                onMouseLeave={() => hanldleDropDownToggle(null)}
              >
                <CustomDropdown
                  menuItems={menuData}
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  selectedSubMenu={selectedSubMenu}
                  setSelectedSubMenu={setSelectedSubMenu}
                  hanldleDropDownToggle={hanldleDropDownToggle}
                />
              </div>
            )}
          </NavbarItem>
          <NavbarItem>
            <Button
              variant="flat"
              className="bg-transparent p-0 min-w-10 text-medium max-lg:text-[11px] xl:text-[15px] max-xl:text-[13px]"
              endContent={
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen === "platforms" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  size={16}
                />
              }
              onMouseEnter={() => hanldleDropDownToggle("platforms")}
            >
              Platforms
            </Button>
            {isOpen === "platforms" && (
              <div
                className="top-full left-0 z-10 absolute shadow-[0_4px_12px_2px_rgba(35,31,32,.07)] backdrop-blur-[24px] py-[14px] w-full"
                onMouseLeave={() => hanldleDropDownToggle(null)}
              >
                <CustomDropDown1 />
              </div>
            )}
          </NavbarItem>
          <NavbarItem>
            <Link
              className="max-lg:text-[11px] xl:text-[15px] max-xl:text-[13px]"
              color="foreground"
              href="#"
            >
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="max-lg:text-[11px] xl:text-[15px] max-xl:text-[13px]"
              color="foreground"
              href="#"
            >
              Support
            </Link>
          </NavbarItem>
          <NavbarItem className="flex max-lg:gap-2 lg:gap-[10px]">
            <Input
              classNames={{
                base: "max-lg:w-[110px] max-lg:h-7 max-xl:w-[180px] xl:w-[260px] max-xl:h-[30px] xl:h-[35px]",
                mainWrapper: "h-full",
                input:
                  "text-small max-xl:text-[12px] text-sm pr-5 pl-8 pt-0 pb-0",
                inputWrapper:
                  "h-full font-normal border text-default-500 max-xl:h-[30px] min-h-7 max-xl:max-h-[30] xl:h-[35px]",
              }}
              placeholder="Search Stocks, News, Companies…"
              size="sm"
              startContent={<CiSearch size={30} />}
              type="search"
              variant="bordered"
            />
            <Button
              variant="bordered"
              className="border border-black rounded-md w-[100px] max-lg:w-[60px] min-w-10 max-lg:h-7 max-xl:h-[30px] xl:h-[35px] max-xl:max-h-[30] font-semibold max-xl:text-xs"
            >
              Login
            </Button>
            <Button
              variant="faded"
              className="relative border-[#ffc720] bg-[#ffda00] border rounded-md max-lg:w-[135px] max-xl:w-[160px] xl:w-[180px] min-w-10 max-lg:h-7 max-xl:h-[30px] xl:h-[35px] max-xl:max-h-[30] font-semibold max-xl:text-xs overflow-hidden btn-alt"
            >
              Open DEMAT Account
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}

export default MainNav;
