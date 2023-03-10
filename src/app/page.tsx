'use client'
import { useRef, useState } from "react";

export default function Home() {
  const [history, setHistory] = useState<string[]>(["hello", "world"]);
  const [text, setText] = useState("");
  const dummy = useRef<HTMLDivElement | null>(null);
  return (
    <div className="p-12 flex flex-col space-y-2">
      <div className="flex flex-col text-white font-mono space-y-4 px-9">
        { history.map((text, index) => <p key={index}>{text}</p>) }
      </div>
      
      <div className="flex items-center">
        <span className="text-white font-mono">{">>>"}</span>
        <input 
          className="bg-transparent w-full text-white outline-none p-2 font-mono"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              if(text === "clear") {
                setHistory([]);
                setText("");
                return;
              }

              if (text !== "") {
                setHistory([...history, text]);
                setText("");
                if(dummy.current) dummy.current.scrollIntoView();
              }
            }
          }}
        />
      </div>
      <div className="py-2" ref={dummy}/>
    </div>
  )
}
