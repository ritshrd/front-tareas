import { useState, useEffect } from "react"
import { FaUser } from 'react-icons/fa'

const Login = () => {
    const [formData, setFormData] = useState ({
        email:'',
        password:''
    })
    const { email, password } = formData

    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) =>{
        e.preventDefault()
    }
    
  return (
    <>
    <section className="heading">
        <h1>
        <FaUser /> Login
        </h1>
        <p>Ingresa tus credenciales</p>
    </section>

    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
               
                <input 
                   type="text"
                   className="form-control"
                   id="email"
                   name="email"
                   value={email}
                   placeholder="Email"
                   onChange={onChange}
                 />
                <input 
                    type="text"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={onChange}
                 />
                
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-block">
                    Login
                </button>
            </div>
        </form>

    </section>
    </>
  )
}

export default Login