import Image from "next/image";
import image from "../Images/image";

const WhatsApp = () => {
  return (
    <>
      <a
        className="fixed bottom-20 -right-0 h-12 w-12 rounded-full bg-[#29A71A] flex items-center justify-center"
        href="https://wa.me/+447442005437"
      >
        <Image src={image.whatsapp} height={45} width={45} alt="whats app" />
      </a>
    </>
  );
};

export default WhatsApp;


      {/*    <a className="fixed bottom-24 right-4 md:right-8 md:bottom-8 z-20 drop-shadow-lg hidden md:block" href="https://wa.me/+447442005437">
    <Image src={image.whatsapp} height={50} width={50} alt="whats app"/>
  </a> */}