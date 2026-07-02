import { useCallback, useEffect, useState } from "react";

interface IProps {
  images: string[];
  index: number;
  onClose: () => void;
}

export const Lightbox: React.FC<IProps> = (props) => {
  const { images, index, onClose } = props;

  const [current, setCurrent] = useState(index);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-10"
      >
        <i className="fas fa-times"></i>
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <img
        src={images[current]}
        alt=""
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
