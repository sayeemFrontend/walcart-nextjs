export function Center({ children, width, height }) {
  return (
    <div
      style={{ width: width || "100%", height: height || "100%" }}
      className="flex items-center justify-center"
    >
      {children}
    </div>
  );
}
