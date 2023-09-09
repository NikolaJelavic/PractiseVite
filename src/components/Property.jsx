export default function Property({name, price, rating,id}) {
    return(<div key={id} className="w-44 border-8 border-red-400 border-solid rounded-lg m-2 text-center">
        <h2>{name}</h2>
        <h3>{price} a night</h3>
        <h4>{rating}⭐</h4>
    </div>)
};
