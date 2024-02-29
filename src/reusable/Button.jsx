export default function Button({ children, className = "button", ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
