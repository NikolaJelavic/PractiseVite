import Property from "./Property";

export default function PropertyList({ properties }) {
  return (
    <div className="flex rounded-lg flex-wrap justify-around">
      {properties.map((p) => {
        return <Property key={p.id} {...p} />;
      })}
    </div>
  );
}
