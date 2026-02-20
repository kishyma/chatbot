"use client"
import { useState } from "react"

export default function DM(){

  const [messages,setMessages]=useState([])
  const [input,setInput]=useState("")

  async function send(){
    if(!input) return

    const updated=[...messages,{role:"user",content:input}]
    setMessages(updated)
    setInput("")

    const res=await fetch("/api/ai",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        character:"Celebrity_AI",
        messages:updated
      })
    })

    const data=await res.json()

    setMessages([...updated,{role:"assistant",content:data.reply}])
  }

  return(
    <div style={{maxWidth:500,margin:"20px auto"}}>
      <div style={{border:"1px solid #222",height:400,overflowY:"auto",padding:10}}>
        {messages.map((m,i)=>(
          <div key={i} style={{textAlign:m.role==="user"?"right":"left",marginBottom:10}}>
            {m.content}
          </div>
        ))}
      </div>

      <div style={{display:"flex",marginTop:10}}>
        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          style={{flex:1,padding:8,background:"#111",color:"#fff",border:"1px solid #333"}}
        />
        <button onClick={send} style={{padding:10,background:"#0095f6",border:"none"}}>
          Send
        </button>
      </div>
    </div>
  )
}