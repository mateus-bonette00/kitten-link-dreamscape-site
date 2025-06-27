import ProfileCard from "@/components/ProfileCard";
import LinkButton from "@/components/LinkButton";
import SocialIcons from "@/components/SocialIcons";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaShoppingBag,
} from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cute-primary/20 via-cute-secondary/10 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-cute-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-cute-secondary/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-10 h-10 bg-cute-primary/15 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-4 h-4 bg-cute-secondary/25 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-md relative z-10">
        <ProfileCard />

        <div className="space-y-4">
          <LinkButton
            href="https://www.cutekittens.com.br/"
            icon={<FaShoppingBag className="!w-[25px] !h-[25px]" />}
            text="Nossa Loja"
            variant="secondary"
          />

          <LinkButton
            href="https://www.instagram.com/cutekittensloja/"
            icon={<FaInstagram  className="!w-[25px] !h-[25px]"/>}
            text="Instagram"
            variant="secondary"
          />

          <LinkButton
            href="https://www.tiktok.com/@cutekittensloja"
            icon={<FaTiktok className="!w-[25px] !h-[25px]"/>}
            text="TikTok"
            variant="secondary"
          />

          <LinkButton
            href="https://wa.me/553584480207"
            icon={<FaWhatsapp className="!w-[25px] !h-[25px]"/>}
            text="Entre em contato"
            variant="secondary"
          />

          <LinkButton
            href="https://www.facebook.com/profile.php?id=61577679128689"
            icon={<FaFacebook className="!w-[25px] !h-[25px]" />}
            text="Facebook"
            variant="secondary"
          />

          <LinkButton
            href="https://youtube.com"
            icon={<FaYoutube className="!w-[25px] !h-[25px]"/>}
            text="YouTube"
            variant="secondary"
          />
        </div>

        <SocialIcons />

        <div className="text-center mt-8 text-gray-500 text-xl">
          <p>Feito com 💜 para amantes de PETS</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
