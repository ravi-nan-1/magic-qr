import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ZoomIn, ZoomOut } from "lucide-react";
import { QRConfig } from "@/types/qr";
import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface QRPreviewPanelProps {
  config: QRConfig;
}

export const QRPreviewPanel = ({ config }: QRPreviewPanelProps) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(100);

  const downloadQR = async (format: "png" | "jpg" | "svg" | "pdf") => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) {
      toast.error("QR code not found");
      return;
    }

    try {
      if (format === "png" || format === "jpg") {
        const dataUrl = canvas.toDataURL(`image/${format}`, 1.0);
        const link = document.createElement("a");
        link.download = `qrcode.${format}`;
        link.href = dataUrl;
        link.click();
        toast.success(`Downloaded as ${format.toUpperCase()}`);
      } else if (format === "pdf" || format === "svg") {
        // Simplified: Use PNG for now
        const dataUrl = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");
        link.download = `qrcode.png`;
        link.href = dataUrl;
        link.click();
        toast.success("Downloaded as PNG");
      }
    } catch (error) {
      toast.error("Failed to download");
      console.error(error);
    }
  };

  return (
    <Card className="p-6 glass">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Live Preview</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setZoom(Math.max(50, zoom - 10))}
              disabled={zoom <= 50}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground min-w-[60px] text-center">
              {zoom}%
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setZoom(Math.min(150, zoom + 10))}
              disabled={zoom >= 150}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div 
          className="flex items-center justify-center min-h-[400px] bg-muted/20 rounded-lg border-2 border-dashed border-border p-8"
          role="img"
          aria-label="free qr code generator online preview"
        >
          <div
            ref={qrRef}
            style={{
              transform: `scale(${zoom / 100})`,
              transition: "transform 0.3s ease",
            }}
          >
            <QRCodeCanvas
              value={config.content || "https://example.com"}
              size={config.size}
              bgColor={config.bgColor}
              fgColor={config.fgColor}
              level={config.errorCorrection}
              marginSize={config.margin}
              imageSettings={
                config.logo
                  ? {
                      src: config.logo,
                      height: (config.size * config.logoSize) / 100,
                      width: (config.size * config.logoSize) / 100,
                      excavate: true,
                    }
                  : undefined
              }
            />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Export Options</p>
          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={() => downloadQR("png")}
              className="w-full gradient-primary"
            >
              <Download className="w-4 h-4 mr-2" />
              PNG
            </Button>
            <Button
              onClick={() => downloadQR("jpg")}
              variant="outline"
            >
              <Download className="w-4 h-4 mr-2" />
              JPG
            </Button>
            <Button
              onClick={() => downloadQR("svg")}
              variant="outline"
            >
              <Download className="w-4 h-4 mr-2" />
              SVG
            </Button>
            <Button
              onClick={() => downloadQR("pdf")}
              variant="outline"
            >
              <Download className="w-4 h-4 mr-2" />
              PDF
            </Button>
          </div>
        </div>

        <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            ✨ Your QR code updates in real-time as you customize it. <strong>QR code free download</strong> in multiple formats!
          </p>
        </div>
      </div>
    </Card>
  );
};
