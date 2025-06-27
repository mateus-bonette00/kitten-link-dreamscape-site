
import ProfileCard from "@/components/ProfileCard";
import LinkButton from "@/components/LinkButton";
import SocialIcons from "@/components/SocialIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cute-primary/20 via-cute-secondary/10 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-cute-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cute-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-cute-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-cute-secondary/25 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-md relative z-10">
        <ProfileCard />
        
        <div className="space-y-4">
          <LinkButton
            href="https://instagram.com"
            icon="📷"
            text="Instagram"
            variant="primary"
          />
          
          <LinkButton
            href="https://tiktok.com"
            icon="🎵"
            text="TikTok"
            variant="secondary"
          />
          
          <LinkButton
            href="https://whatsapp.com"
            icon="💬"
            text="Entre em contato"
          />
          
          <LinkButton
            href="https://facebook.com"
            icon="📘"
            text="Facebook"
          />
          
          <LinkButton
            href="https://youtube.com"
            icon="🎥"
            text="YouTube"
          />
          
          <LinkButton
            href="https://example.com/loja"
            icon="🛍️"
            text="Nossa Loja"
            variant="primary"
          />
        </div>

        <SocialIcons />
        
        <div className="text-center mt-8 text-gray-500 text-xs">
          <p>Feito com 💜 para amantes de gatinhos</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
