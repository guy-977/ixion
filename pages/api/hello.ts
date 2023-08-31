import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method.toUpperCase() !== "POST"){
        return res.status(400).send("invalid method only post")
    }
    if (!req.body.prompt) {
        return res.status(400).send("where is the prompt");
    }
    let chatbotresponse = await fetch("https://api.cohere.com/v1/generate", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
            "Content-Type": "application/json",
            accept: "application/json",
        },
        body: JSON.stringify({ prompt: req.body.prompt }),
    });
    
    let resJson = await chatbotresponse.json();
    console.log(resJson);
    return res
    .status(200)
    .send(`I am chatbot response! ${resJson.generations[0].text}`);
  }