export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="h-16 bg-gray-200 rounded-lg"></div>
        
        {/* Main content skeleton */}
        <div className="space-y-4">
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-32 bg-gray-200 rounded-lg"></div>
          <div className="h-24 bg-gray-200 rounded-lg"></div>
        </div>
        
        {/* Navigation skeleton */}
        <div className="h-16 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}
