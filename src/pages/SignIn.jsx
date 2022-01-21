import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {ReactComponent as ArrowRightIcon} from '../assets/images/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/images/visibilityIcon.svg'
import Oauth from '../component/Oauth'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if(userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      window.alert('Bad User Credentials')
    }
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input 
            type='email'
            id='email'
            className='emailInput'
            placeholder='Email'
            value={email}
            onChange={onChange}
          />

          <div className='passwordInputDiv'>
            <input 
              type={showPassword ? 'text' : 'password'} 
              className='passwordInput'
              placeholder='password'
              id='password'
              value={password}
              onChange={onChange}
            />

            <img 
              src={visibilityIcon} 
              alt="Show Password" 
              className='showPassword' 
              onClick={() => setShowPassword((prevState)=>!prevState)} 
            />
          </div>

          <div className='signInBar'>
            <p className='signInText'>
              Sign In
            </p>
            <button className='signInButton'>
              <ArrowRightIcon fill='ffffff' width='34px' height='34px'/>
            </button>
          </div>
        </form>

        <Oauth />

      </div>
    </>
  )
}
export default SignIn;