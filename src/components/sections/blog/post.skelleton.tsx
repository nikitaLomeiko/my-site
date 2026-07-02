export const PostSkeleton = () => {
  return (
    <div className="glass rounded-3xl overflow-hidden animate-pulse">
      <div className="flex items-center gap-3 p-5 sm:p-6 pb-3">
        <div className="w-10 h-10 rounded-full bg-gray-600/50 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-28 rounded bg-gray-600/50" />
          <div className="h-2.5 w-20 rounded bg-gray-600/50" />
        </div>
      </div>
      <div className="w-full aspect-video bg-gray-600/30" />
      <div className="p-5 sm:p-6 space-y-3">
        <div className="h-4 w-3/4 rounded bg-gray-600/50" />
        <div className="h-3 w-full rounded bg-gray-600/30" />
        <div className="h-3 w-2/3 rounded bg-gray-600/30" />
      </div>
    </div>
  );
};
