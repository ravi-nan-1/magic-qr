import { QrCode, Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg gradient-primary shadow-glow">
              <QrCode className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Free QR Code Generator – Create Custom QR Codes Online
              </h1>
              <p className="text-xs text-muted-foreground">Our free QR code generator helps you create QR codes online instantly</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            <span>Professional & Free</span>
          </div>
        </div>
      </div>
    </header>
  );
};
