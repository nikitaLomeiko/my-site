interface IProps {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}

const vignetteStyle = {
  background:
    "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.35) 100%)",
  boxShadow: "inset 0 0 20px rgba(0,0,0,0.25)",
  backdropFilter: "blur(1px)",
  WebkitBackdropFilter: "blur(1px)",
};

export const PostGallery: React.FC<IProps> = (props) => {
  const { images, title, onImageClick } = props;

  if (images.length === 1) {
    return (
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => onImageClick(0)}
      >
        <img
          src={images[0]}
          alt={title}
          className="w-full aspect-video object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={vignetteStyle}
        />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 overflow-hidden">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden cursor-pointer"
            onClick={() => onImageClick(i)}
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full aspect-[4/3] object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={vignetteStyle}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 overflow-hidden">
      <div
        className="relative overflow-hidden cursor-pointer col-span-2 sm:col-span-1 row-span-1"
        onClick={() => onImageClick(0)}
      >
        <img
          src={images[0]}
          alt={`${title} 1`}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={vignetteStyle}
        />
      </div>
      <div
        className="relative overflow-hidden cursor-pointer col-span-2 sm:col-span-1"
        onClick={() => onImageClick(1)}
      >
        <img
          src={images[1]}
          alt={`${title} 2`}
          className="w-full aspect-[4/3] object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={vignetteStyle}
        />
      </div>
      <div
        className="relative overflow-hidden cursor-pointer col-span-2"
        onClick={() => onImageClick(2)}
      >
        <img
          src={images[2]}
          alt={`${title} 3`}
          className="w-full aspect-video object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={vignetteStyle}
        />
      </div>
    </div>
  );
};
