"use client";

import { Lightbox } from "@/components/common/lightbox/light.box";
import { PostCard } from "@/components/sections/blog/post.card";
import { PostSkeleton } from "@/components/sections/blog/post.skelleton";
import { IPost, IPostsResponse } from "@/types/blog.type";
import { useState, useEffect } from "react";

const API_BASE = "http://localhost:8080";
const TELEGRAM_USER_ID = "8580723085";

export const BlogPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mediaCache, setMediaCache] = useState<Record<string, string[]>>({});
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const perPage = 5;

  useEffect(() => {
    let cancelled = false;

    fetch(
      `${API_BASE}/api/posts/page?user_id=${TELEGRAM_USER_ID}&page=${page}&per_page=${perPage}`,
    )
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка ${res.status}`);
        return res.json();
      })
      .then((data: IPostsResponse) => {
        if (cancelled) return;

        const newPosts = data.posts || [];
        setPosts((prev) => {
          const existingIds = new Set(prev.map((p) => p.id));
          const unique = newPosts.filter((p) => !existingIds.has(p.id));
          return [...prev, ...unique];
        });
        setTotal(data.total);

        newPosts.forEach((post) => {
          if (post.media_count > 0) {
            const urls: string[] = [];
            for (let i = 0; i < post.media_count; i++) {
              urls.push(`${API_BASE}/api/media?post_id=${post.id}&index=${i}`);
            }
            setMediaCache((prev) => {
              if (prev[post.id]) return prev;
              return { ...prev, [post.id]: urls };
            });
          }
        });
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [page]);

  const hasMore = posts.length < total;

  if (loading && posts.length === 0) {
    return (
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <PostSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <i className="fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
        <p className="text-lg opacity-70">{error}</p>
        <button
          onClick={() => location.reload()}
          className="mt-4 px-6 py-2 glass rounded-xl hover:scale-105 transition-transform"
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            images={mediaCache[post.id] || []}
            setLightbox={setLightbox}
          />
        ))}

        {loading && posts.length > 0 && <PostSkeleton />}

        {!hasMore && posts.length > 0 && (
          <div className="text-center py-8 opacity-50 text-sm">
            <i className="fas fa-check-circle mr-2"></i>
            Все посты загружены
          </div>
        )}
      </div>

      {hasMore && !loading && (
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setLoading(true);
              setPage((prev) => prev + 1);
            }}
            className="px-8 py-3 glass rounded-2xl font-medium hover:scale-105 transition-transform duration-300"
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </div>
  );
};
