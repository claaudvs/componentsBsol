import bsolLogo from "@/assets/logo/bsol__logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-[#791EE7] ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <Image src={bsolLogo} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
