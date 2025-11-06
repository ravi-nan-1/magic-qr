import { useState } from "react";
import { Header } from "@/components/qr/Header";
import { QROptionsPanel } from "@/components/qr/QROptionsPanel";
import { QRPreviewPanel } from "@/components/qr/QRPreviewPanel";

export interface QRConfig {
  type: "url" | "text" | "email" | "phone" | "sms" | "wifi" | "vcard" | "location";
  content: string;
  fgColor: string;
  bgColor: string;
  size: number;
  errorCorrection: "L" | "M" | "Q" | "H";
  logo: string | null;
  logoSize: number;
  margin: number;
}

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
