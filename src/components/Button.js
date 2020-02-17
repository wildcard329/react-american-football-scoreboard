import React, {useState} from 'react';


export default function Button() {
    const [score, setScore] = useState(0);
    let team = '';
    return (
        <div>
            <button onClick={()=> setScore(score + 7)}>{team} Touchdown</button>
            <button onClick={()=> setScore(score + 3)}>{team} Field Goal</button>
        </div>
    )
}