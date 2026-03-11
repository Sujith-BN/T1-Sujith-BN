import { useNavigate } from "react-router-dom"

function Login(){

  const navigate = useNavigate()

  return(
    <div className="container center">

      <div className="card">

        <h1>Quiz Portal</h1>
        <p>Test your knowledge</p>

        <button
          className="button"
          onClick={()=>navigate("/dashboard")}
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login