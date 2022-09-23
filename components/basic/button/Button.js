export default function Button({ title, onClicked, children }) {
  return (
    <button
      onClick={onClicked && onClicked}
      className="w-full h-full flex items-center justify-center"
    >
      {title && title}
      {children && children}
    </button>
  );
}
