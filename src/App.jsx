import axios from 'axios'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const[answer, setAnswer]= useState("") ;

  async function getAnswer(){
    setAnswer("loading...")
    const response= await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBc7JUGVAoVWGe_dmN8-rkpjkt1BdiS9rk",
      method:"post",
      data: {
        contents:[
          {parts:[{ text: question}]},
        ],
        
      },
    });
    
      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }

  return (
    <>
     <h1>AI Chatbot</h1>
     <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} cols="30" rows="10"></textarea>
     <button onClick={getAnswer}>Generate Answer</button>
     <pre>
      {answer}
     </pre>
    </>
  )
}

export default App
