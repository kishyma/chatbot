import axios from "axios"

export async function POST(req){

  const {character,messages}=await req.json()

  const systemPrompt = `
You are ${character}.
You are inside a private social network called GrammyAi.
You respond like texting in Instagram DM.
Stay in character. Never act like an assistant.
Be natural, short, realistic.
`

  const response = await axios.post(
    process.env.AI_BASE_URL,
    {
      model: process.env.AI_MODEL,
      messages: [
        { role:"system", content: systemPrompt },
        ...messages
      ]
    },
    {
      headers:{
        "Authorization":`Bearer ${process.env.AI_API_KEY}`,
        "Content-Type":"application/json"
      }
    }
  )

  return Response.json({
    reply: response.data.choices[0].message.content
  })
}