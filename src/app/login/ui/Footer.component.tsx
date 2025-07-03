import bsolLogo from "@/assets/logo/bsol__logo.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="fixed bottom-0 right-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-end sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-end mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <Image src={bsolLogo} alt="logo" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
