export default function Clicker({message,buttonText}) {
    function handleClick(){return alert(message);}
    return <button onClick={handleClick}>{buttonText}</button>
};
