import { Button } from "@/components/ui/button";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <Button
        asChild
        size="icon"
        className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-cute-primary transition-all duration-300 hover:scale-110"
      >
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="!w-[25px] !h-[25px]" />
        </a>
      </Button>

      <Button
        asChild
        size="icon"
        className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-green-500 transition-all duration-300 hover:scale-110"
      >
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="!w-[25px] !h-[25px]" />
        </a>
      </Button>

      <Button
        asChild
        size="icon"
        className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-pink-500 transition-all duration-300 hover:scale-110"
      >
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="!w-[25px] !h-[25px]" />
        </a>
      </Button>
    </div>
  );
};

export default SocialIcons;
