import "./ShimmerSkeleton.styles.css";

export default function ShimmerSkeleton({ width = 280, height = 180 }) {
  return (
    <div
      className="shimmer-skeleton"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Image / Thumbnail Placeholder */}
      <div className="shimmer-image" />

      {/* Text Lines */}
      <div className="shimmer-text-container">
        <div className="shimmer-line title" />
        <div className="shimmer-line" />
        <div className="shimmer-line short" />
      </div>
    </div>
  );
}
