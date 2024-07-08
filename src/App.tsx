// import './App.css'

import  { useEffect, useState } from "react";
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
      <Message changeCount={count} />
    </div>
  )
}

// console.log(React);

// const Message = (props: { count :number}) => (<p> You have read <strong>{props.count}</strong> pieces of advice</p>)

// const Message: FC<{ count: number }> = ({ count }) => (<p>You have read <strong>{count}</strong> pieces of advice</p>)

// const Message: FC<MessageProps> = ({ count }) => (<p>You have read <strong>{count}</strong> pieces of advice</p>)

const Message = ({ changeCount } : MessageProps) => <p>You have read <strong>{changeCount}</strong> pieces of advice</p>