export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Title skeleton */}
      <div className="skeleton h-8 w-48 mb-6" />

      {/* Card skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 p-6 space-y-4"
          >
            <div className="skeleton h-10 w-10 rounded-lg" />
            <div className="skeleton h-5 w-3/4" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
