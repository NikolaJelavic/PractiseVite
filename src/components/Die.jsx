export default function Die({ val, color = "slateblue" }) {
  return (
    <div
      className="bg-red-400 w-12 h-12 rounded-xl p-3 text-center"
      style={{ backgroundColor: color }}
    >
      {val}
    </div>
  );
}
