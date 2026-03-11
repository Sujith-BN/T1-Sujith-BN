import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard(){

  const [quizzes,setQuizzes] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetch("http://localhost:8080/api/quizzes")
      .then(res=>res.json())
      .then(data=>setQuizzes(data))
  },[])

  return(
    <div className="container">

      <h2 className="center">Available Quizzes</h2>

      {quizzes.map((quiz)=>(
        <div key={quiz.id} className="card">

          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>
          <p>Time Limit: {quiz.timeLimit} seconds</p>

          <button
            className="button"
            onClick={()=>navigate(`/quiz/${quiz.id}`)}
          >
            Start Quiz
          </button>

        </div>
      ))}

    </div>
  )
}

export default Dashboard