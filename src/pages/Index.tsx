import { useState } from "react";
import { Header } from "@/components/qr/Header";
import { QROptionsPanel } from "@/components/qr/QROptionsPanel";
import { QRPreviewPanel } from "@/components/qr/QRPreviewPanel";
import { QRConfig } from "@/types/qr";

const Index = () => {
  const [qrConfig, setQRConfig] = useState<QRConfig>({
    type: "url",
    content: "https://example.com",
    fgColor: "#000000",
    bgColor: "#ffffff",
    size: 512,
    errorCorrection: "M",
    logo: null,
    logoSize: 20,
    margin: 4,
  });

  return (
    <div className="min-h-screen gradient-subtle">
      <Header />
      
      {/* SEO Intro Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            Our <strong>free QR code generator</strong> helps you <strong>create QR codes online</strong> instantly. 
            Whether you need a <strong>QR code for your business</strong>, website, WiFi, or downloads, our 
            <strong> QR code maker</strong> makes it fast and easy. Generate professional 
            <strong> QR codes without watermark</strong> and download them for free.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[400px_1fr] gap-6">
          <QROptionsPanel config={qrConfig} setConfig={setQRConfig} />
          <QRPreviewPanel config={qrConfig} />
        </div>
      </main>

      {/* SEO Footer Section */}
      <footer className="container mx-auto px-4 py-12 mt-12 border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Best QR Code Generator Online</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Welcome to the most powerful <strong>free QR code generator</strong> available online. 
              Our <strong>QR code maker</strong> allows you to <strong>create QR codes online</strong> for 
              any purpose - from business cards and websites to WiFi passwords and payment links.
            </p>
            <p>
              Unlike other tools, our <strong>QR code generator without watermark</strong> is completely 
              free with no hidden fees or signup required. Create <strong>dynamic QR codes</strong> with 
              custom colors, logos, and designs. Whether you need a <strong>QR code for business</strong> or 
              personal use, our tool delivers professional results every time.
            </p>
            <p>
              Features include: Custom colors and branding, Logo integration, Multiple download formats 
              (PNG, SVG, PDF), High-resolution output, Error correction levels, and completely free 
              <strong> QR code free download</strong>. Start creating your <strong>QR code for website</strong> today!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
