
import { Button } from "@/components/ui/button";

interface LinkButtonProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  variant?: "primary" | "secondary" | "outline";
}

const LinkButton = ({ href, icon, text, variant = "outline" }: LinkButtonProps) => {
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-cute-primary hover:bg-cute-primary/90 text-white border-cute-primary";
      case "secondary":
        return "bg-cute-secondary hover:bg-cute-secondary/90 text-black border-cute-secondary";
      default:
        return "bg-white/80 hover:bg-white text-gray-800 border-gray-200 hover:border-cute-primary";
    }
  };

  return (
    <Button
      asChild
      className={`w-full h-14 rounded-full mb-4 transition-all duration-300 hover:scale-105 hover:shadow-lg ${getButtonStyles()}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{text}</span>
      </a>
    </Button>
  );
};

export default LinkButton;
