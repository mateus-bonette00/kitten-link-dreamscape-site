
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ProfileCard = () => {
  return (
    <div className="text-center mb-8 animate-float">
      <div className="mb-4">
        <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
          <AvatarFallback className="bg-cute-primary text-white text-2xl">
            🐱
          </AvatarFallback>
        </Avatar>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Cute Kittens</h1>
      <p className="text-gray-600 text-sm max-w-xs mx-auto">
        Aqui, quem ama gatinhos também ama!
        <br />
        Produtos divertidos para humanos apaixonados por felinos.
      </p>
    </div>
  );
};

export default ProfileCard;
