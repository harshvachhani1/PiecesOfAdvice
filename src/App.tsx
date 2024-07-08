// import './App.css'

import React, { FC, useEffect, useState } from "react";
import  MessageProps  from "@/Types";

export default function App() {

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>      
      <Message count={count} />
    </div>
  )
}

// console.log(React);

// function Message(props: {
//   count: number
// }) {
//   return (
//     <p>
//       You have read <strong>{props.count}</strong> pieces of advice
//     </p>
//   );
// }

// const Message = (props: {
//   count :number
// }) => 
//     (<p>
//       You have read <strong>{props.count}</strong> pieces of advice
//     </p>)

// const Message: FC<{ count: number }> = ({ count }) => 
//     (<p>
//       You have read <strong>{count}</strong> pieces of advice
//     </p>)

// const Message: FC<MessageProps> = ({ count }) => 
//     (<p>
//   You have read <strong>{count}</strong> pieces of advice
//     </p>)

const Message = ({ count } : MessageProps) => 
    (<p>
  You have read <strong>{count}</strong> pieces of advice
    </p>)