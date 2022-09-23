import "./Input.css";
export default function Input({ label, type, onChanged, name, placeholder }) {
  return (
    <div className="inputContainer w-full h-full bg-inherit">
      <input type={type ? type : "text"} onChange={onChanged && onChanged} placeholder={placeholder && placeholder} name={name && name} />
    </div>
  );
}
