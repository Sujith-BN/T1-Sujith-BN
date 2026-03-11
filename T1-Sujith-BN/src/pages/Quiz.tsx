import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function Quiz() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [questions, setQuestions] = useState<any[]>([])
  const [answers, setAnswers] = useState<number[]>([])
  const [timeLeft, setTimeLeft] = useState(60)

  useEffect(() => {
    fetch(`http://localhost:8080/api/questions/${id}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data)
        setAnswers(new Array(data.length).fill(0))
      })
  }, [id])

  useEffect(() => {

    if (timeLeft === 0) {
      submitQuiz()
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timer)

  }, [timeLeft])


  const selectAnswer = (index:number, option:number) => {
    const updated = [...answers]
    updated[index] = option
    setAnswers(updated)
  }


  const submitQuiz = () => {

    const body = {
      quizId: Number(id),
      userId: 1,
      answers: answers.join(",")
    }

    fetch("http://localhost:8080/api/attempt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      navigate("/result", { state: data })
    })

  }


 return (
  <div style={{maxWidth:"800px",margin:"auto",fontFamily:"Arial"}}>

    <h1 style={{textAlign:"center"}}>Quiz Portal</h1>

    <div style={{
      background:"#f5f5f5",
      padding:"10px",
      borderRadius:"8px",
      textAlign:"center",
      marginBottom:"20px"
    }}>
      <h3>Time Remaining: {timeLeft} seconds</h3>
    </div>

    {questions.map((q,index)=>(
      <div key={q.id} style={{
        background:"white",
        padding:"20px",
        marginBottom:"15px",
        borderRadius:"10px",
        boxShadow:"0 2px 5px rgba(0,0,0,0.1)"
      }}>

        <h3>{index+1}. {q.questionText}</h3>

        <label style={{display:"block",margin:"8px 0"}}>
          <input type="radio" name={`q${q.id}`} onChange={()=>selectAnswer(index,1)} />
          {" "} {q.option1}
        </label>

        <label style={{display:"block",margin:"8px 0"}}>
          <input type="radio" name={`q${q.id}`} onChange={()=>selectAnswer(index,2)} />
          {" "} {q.option2}
        </label>

        <label style={{display:"block",margin:"8px 0"}}>
          <input type="radio" name={`q${q.id}`} onChange={()=>selectAnswer(index,3)} />
          {" "} {q.option3}
        </label>

        <label style={{display:"block",margin:"8px 0"}}>
          <input type="radio" name={`q${q.id}`} onChange={()=>selectAnswer(index,4)} />
          {" "} {q.option4}
        </label>

      </div>
    ))}

    <div style={{textAlign:"center",marginTop:"20px"}}>
      <button
        onClick={submitQuiz}
        style={{
          background:"#4CAF50",
          color:"white",
          border:"none",
          padding:"12px 25px",
          fontSize:"16px",
          borderRadius:"8px",
          cursor:"pointer"
        }}
      >
        Submit Quiz
      </button>
    </div>

  </div>
)
}

export default Quiz