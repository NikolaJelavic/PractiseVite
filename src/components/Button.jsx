export default function Button({clickFunc, label="Click me"}) {
  return <button onClick={clickFunc} className="bg-red-200">{label}</button>
}
