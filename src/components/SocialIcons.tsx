
import { Button } from "@/components/ui/button";

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <Button
        asChild
        size="icon"
        className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-cute-primary transition-all duration-300 hover:scale-110"
      >
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <span className="text-xl">🎵</span>
        </a>
      </Button>
      <Button
        asChild
        size="icon"
        className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-cute-secondary transition-all duration-300 hover:scale-110"
      >
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <span className="text-xl">💬</span>
        </a>
      </Button>
      <Button
        asChild
        size="icon"
        className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-cute-primary transition-all duration-300 hover:scale-110"
      >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <span className="text-xl">📘</span>
        </a>
      </Button>
    </div>
  );
};

export default SocialIcons;
