import { IPost } from "@/types/blog.type";
import { PostGallery } from "./components/post.gallery";
import { useState } from "react";

interface IProps {
  post: IPost;
  images: string[];
  setLightbox: (lightbox: { images: string[]; index: number } | null) => void;
}

function imgPath(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  const basePath = process.env.NODE_ENV === "production" ? "/my-site" : "";
  return `${basePath}${src}`;
}

const avatarURL =
  "https://sun9-64.userapi.com/s/v1/ig2/QIQ8nj1yMuV5nDHVKtwMXabkzOZ7H5qHtLueCir-UKYZ3mUkQyDYFdianlAMG5T_wQrCe9v2WxoZhirqpxH2s1qe.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0";

export const PostCard: React.FC<IProps> = (props) => {
  const { post, images, setLightbox } = props;

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <article key={post.id} className="glass rounded-3xl overflow-hidden">
      <div className="flex items-center gap-3 p-5 sm:p-6 pb-3">
        <div
          className="w-10 h-10 rounded-full bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${imgPath(avatarURL)})` }}
        />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm leading-tight">Никита Ломейко</p>
          <p className="text-xs opacity-50">{formatDate(post.date)}</p>
        </div>
      </div>

      {images.length > 0 && (
        <PostGallery
          images={images}
          title={post.title || "Фото"}
          onImageClick={(index) => setLightbox({ images, index })}
        />
      )}

      <div className="px-5 sm:px-6 pt-4 pb-2">
        {post.title && (
          <h2 className="text-lg sm:text-xl font-bold mb-2 leading-snug">
            {post.title}
          </h2>
        )}
        <p className="opacity-80 leading-relaxed text-sm sm:text-base">
          {post.text}
        </p>
      </div>
    </article>
  );
};
