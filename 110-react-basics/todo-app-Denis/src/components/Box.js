export default function Box({ children, color = "lightgrey" }) {
  return (
    <div className="Box" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}
