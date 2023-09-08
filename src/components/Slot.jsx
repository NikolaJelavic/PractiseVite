export default function Slot({val1,val2,val3}) {
    let array=[val1,val2,val3]
    let randomArray1=array[Math.floor(Math.random()*3)]
    let randomArray2=array[Math.floor(Math.random()*3)]
    let randomArray3=array[Math.floor(Math.random()*3)]
    return (
      <>
      <div className="border-solid border-black border-2 rounded-xl">
        {randomArray1==randomArray2 && randomArray2==randomArray3 ? <div><h3 className="text-green-400">You win!</h3><p className="text-green-400">Congrats!</p></div> : <h3 className="text-red-400">You lose!</h3>}
        {/* {val2===val3? <h3>WIN</h3>: null} */}
        {randomArray1+randomArray2+randomArray3} 
        
        
  
      </div>
    </>
    );
  }