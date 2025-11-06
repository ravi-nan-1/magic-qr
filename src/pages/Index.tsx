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
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[400px_1fr] gap-6">
          <QROptionsPanel config={qrConfig} setConfig={setQRConfig} />
          <QRPreviewPanel config={qrConfig} />
        </div>
      </main>
    </div>
  );
};

export default Index;
