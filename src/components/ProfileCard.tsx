import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import logo from "@/images/logo-600x600.png";

const ProfileCard = () => {
  return (
    <div className="text-center mb-8 animate-float">
      <div className="mb-4">
        <Avatar className="w-28 h-28 mx-auto border-4 border-white shadow-lg">
          <AvatarImage
            src={logo} // 👈 Aqui é o que estava faltando!
            alt="Logo Cute Kittens"
          />
        </Avatar>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-3">Cute Kittens</h1>
      <p className="text-gray-700 text-lg max-w-sm mx-auto">
        🐾 Camisas, canecas e acessórios feitos com amor para quem é apaixonado
        por pets! 💕
        <br />
        Mostre seu amor por quem te ama de verdade.
      </p>
    </div>
  );
};

export default ProfileCard;
