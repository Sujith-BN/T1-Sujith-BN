import { useLocation, useNavigate } from "react-router-dom"

function Result(){

  const location = useLocation()
  const navigate = useNavigate()

  const result:any = location.state

  return(
    <div className="container center">

      <div className="card">

        <h2>Quiz Result</h2>

        <p>Quiz ID: {result.quizId}</p>
        <h3>Your Score: {result.score}</h3>

        <button
          className="button"
          onClick={()=>navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  )
}

export default Result