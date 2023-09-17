import Die from "./Die";

export default function Dice({ dice, color }) {
  return (
    <section className="flex ">
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color}></Die>
      ))}
    </section>
  );
}
