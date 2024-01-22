import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import Image from "next/image";
import Logo from "/public/assets/Logo.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

interface ISidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: NextPage<ISidebarProps> = ({ open, setOpen }) => {
  const navigation = [
    {
      name: "Female",
      path: "/Female",
    },
    {
      name: "Male",
      path: "/Male",
    },
    {
      name: "Kids",
      path: "/Kids",
    },
    {
      name: "Suits",
      path: "/Suits",
    },
    {
      name: "All Products",
      path: "/AllProducts",
    },
  ];
  const parthName = usePathname();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-6 py-7">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <Link href={"/"} onClick={() => setOpen(false)}>
                            <Image src={Logo} alt="Dien Market" />
                          </Link>
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-6"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-10">
                        <div className="mb-6">
                          <div className="flex items-center justify-center gap-1 relative">
                            <div className="absolute left-1 md:left-[85px]">
                              <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <div>
                              <input
                                type="search"
                                name="Search"
                                placeholder="What you looking for"
                                className="border outline-none pl-7 w-60 h-7 border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <ul className="font-semibold">
                            {navigation.map((items, index) => (
                              <li key={index} className="mb-5">
                                <Link
                                  onClick={() => setOpen(false)}
                                  href={items.name}
                                  className={`${
                                    parthName === items.path
                                      ? "text-red-600"
                                      : ""
                                  }`}
                                >
                                  {items.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Sidebar;