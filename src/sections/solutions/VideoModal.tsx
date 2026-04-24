import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  videoUrl?: string;
}

export default function VideoModal({
  open,
  onClose,
  title = "AI-Powered Data Analytics",
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
}: VideoModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        {open && (
          <>
            {/* Backdrop */}
            <Dialog.Overlay
              className="fixed inset-0 z-50"
              style={{ background: "rgba(5,5,18,0.85)" }}
            />

            {/* Modal panel */}
            <Dialog.Content
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-[90vw] max-w-3xl rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(13,13,31,0.92)",
                  border: "1px solid rgba(79,142,247,0.25)",
                  backdropFilter: "blur(20px)",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(79,142,247,0.08)",
                }}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between px-6 py-4"
                  style={{
                    borderBottom: "1px solid rgba(79,142,247,0.15)",
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-1 h-6 rounded-full flex-shrink-0"
                      style={{
                        background: "linear-gradient(180deg, #4f8ef7, #7c5cbf)",
                      }}
                    />
                    <Dialog.Title
                      className="text-base font-semibold text-white truncate"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {title}
                    </Dialog.Title>
                    <span
                      className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
                      style={{
                        background: "rgba(79,142,247,0.12)",
                        border: "1px solid rgba(79,142,247,0.3)",
                        color: "#4f8ef7",
                      }}
                    >
                      Demo Video
                    </span>
                  </div>

                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close video modal"
                      className="ml-4 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-fast hover:bg-white/10"
                      style={{ color: "#8892a4" }}
                      data-ocid="video-modal-close"
                    >
                      <X size={16} />
                    </button>
                  </Dialog.Close>
                </div>

                {/* 16:9 video embed */}
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    src={videoUrl}
                    title={`${title} demo video`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>

                {/* Footer note */}
                <div className="px-6 py-3">
                  <p className="text-xs" style={{ color: "#8892a4" }}>
                    See how our AI platform transforms raw data into actionable
                    intelligence.
                  </p>
                </div>
              </div>
            </Dialog.Content>
          </>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
