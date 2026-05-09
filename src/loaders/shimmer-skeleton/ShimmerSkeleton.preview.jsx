import ShimmerSkeleton from "./ShimmerSkeleton.loader";

export default function ShimmerSkeletonPreview() {
  return (
    <div
      style={{
        height: "220px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <ShimmerSkeleton width={280} height={190} />
    </div>
  );
}
