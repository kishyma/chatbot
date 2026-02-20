"use client"
import Link from "next/link"

export default function Feed(){
  const posts=[
    {
      id:1,
      character:"Celebrity_AI",
      image:"https://picsum.photos/500/600",
      caption:"Just posted something mysterious."
    }
  ]

  return(
    <div style={{maxWidth:500,margin:"20px auto"}}>
      <h2>GrammyAi</h2>
      {posts.map(post=>(
        <div key={post.id} style={{border:"1px solid #222",marginTop:20}}>
          <img src={post.image} style={{width:"100%"}} />
          <div style={{padding:10}}>
            <strong>{post.character}</strong>
            <p>{post.caption}</p>
            <Link href="/dm">
              <button style={{background:"none",color:"#0095f6",border:"none"}}>
                Message
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}