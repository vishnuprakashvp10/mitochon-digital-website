import Image from "next/image";
import image from "../Images/image";

const WhatsApp = () => {
  return (
    <>
      <a
        className="fixed bottom-28 right-4 lg:right-8 md:bottom-8 z-20 drop-shadow-lg"
        href="https://wa.me/+447442005437"
      >
        <Image src={image.whatsapp} height={60} width={60} alt="whats app" />
      </a>
    </>
  );
};

export default WhatsApp;
