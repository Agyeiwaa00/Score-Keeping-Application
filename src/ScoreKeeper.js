
import { useEffect,useState } from "react";

function ScoreKeeper (){
 const[score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0);

 useEffect(() => {
localStorage.setItem('score', score)
 }, [score]) 
    return(
        <div className="text-center my-10">
            <h1 className=" text-2xl font-bold">Your score is {score}</h1>
            <button className=" p-2 m-2 border-2" onClick={() => setScore(prevScore => prevScore +1) }>+</button>
            <button className="p-2 border-2" onClick={() => setScore(prevScore => prevScore -1) }>-</button>
        </div>
    )
}
export default ScoreKeeper;