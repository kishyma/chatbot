"use client"
import { useState } from "react"

export default function Home(){
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")

  async function enter(){
    const res = await fetch("/api/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({password})
    })

    if(res.ok) window.location="/feed"
    else setError("Wrong access code")
  }

  return(
    <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{border:"1px solid #222",padding:30,width:300,textAlign:"center"}}>
        <h1>GrammyAi</h1>
        <input
          type="password"
          placeholder="Private Access"
          style={{width:"100%",padding:8,marginTop:20,background:"#111",color:"#fff",border:"1px solid #333"}}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button
          style={{width:"100%",padding:10,marginTop:15,background:"#0095f6",border:"none",color:"#fff"}}
          onClick={enter}
        >
          Enter
        </button>
        <p style={{color:"red"}}>{error}</p>
      </div>
    </div>
  )
}