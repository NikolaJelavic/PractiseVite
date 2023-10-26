export default function ImageShow({ image }) {
  return (
    <div className="flex flex-wrap  bg-slate-600">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="w-44 h-44 m-1"
      ></img>
    </div>
  );
}
