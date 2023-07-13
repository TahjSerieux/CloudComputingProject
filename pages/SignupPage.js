import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/SignupPage.css'
import MangoMentorsLogo from '../images/MangoMentorsLogo.png'
// import { useSignup } from "../hook/useSignup";


const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')
    const [emptyFields, setEmtpyFields] = useState([])
    const [agreement, setAgreement] = useState(false)
    // const {isLoading, error, signup,setError} = useSignup()
    const areAllFieldsFilled =() =>{
        if(!firstName)
        {
            setEmtpyFields(['first-name',...emptyFields])
        }
        if(!lastName)
        {
            setEmtpyFields(['last-name',...emptyFields])
        }
        if(!email)
        {
            setEmtpyFields(['email',...emptyFields])
        }
        if(!password)
        {
            setEmtpyFields(['password',...emptyFields])
        }
        if(!confirmPassword)
        {
            setEmtpyFields(['confirmPassowrd',...emptyFields])
        }
        if(!firstName || !lastName || !email || !password || !confirmPassword)
        {
            // setError('All fields must be filled')
            return false
        }
        else{
            return true
        }
    }
    const handleCheck = (e) =>{
        setAgreement(e.target.checked)
    }

    const handleSubmit = (e) =>{

        e.preventDefault()
        setEmtpyFields([])
        
        if(areAllFieldsFilled()  === true)
        {
            if(password === confirmPassword)
            {
                console.log(email, firstName, lastName, password)
            }
            else{
                // setError('Passwords must match')
            }
        }
    }
    
    return ( 
        <div className='user-signup-screen'>
            <div className="side-display">
            GFDBFBD
            </div>
            <div className="main-display">

                <img src={MangoMentorsLogo} alt="" /><br />
                <span></span>
                <label><strong>Create your account</strong></label>
                <h3>Already have an account? <Link to="/user/login">Log in</Link></h3>
                <form onSubmit={handleSubmit}>
                <h3 className='first-name'>first name</h3>
                    <input type="text" onChange={(e) =>{setFirstName(e.target.value)}} 
                    value={firstName}
                    className={emptyFields.includes('first-name') ? 'error': ''}/>

                    <h3 className='last-name'>last name</h3>
                    <input type="text" onChange={(e) =>{setLastName(e.target.value)}} 
                    value={lastName}
                    className={emptyFields.includes('last-name') ? 'error': ''}/>

                    <h3 className='email'>email</h3>
                    <input type="text" onChange={(e) =>{setEmail(e.target.value)}} 
                    value={email}
                    className={emptyFields.includes('email') ? 'error': ''}/>

                    <h3 className='password'>password</h3>
                    <input type="password" onChange={(e) =>{setPassword(e.target.value)}} 
                    value={password}
                    className={emptyFields.includes('password') ? 'error': ''}/> <br />

                    <h3 className='confirm-password'>confirm password</h3>
                    <input type="password" onChange={(e) =>{setConfrimPassword(e.target.value)}}
                     value={confirmPassword}
                    className={emptyFields.includes('confirm-password') ? 'error': 'confrim-password'}/> <br />

                    <input type="checkbox"
                    value={agreement}
                    onChange={handleCheck} />
                    <label htmlFor="">
                    I accept the <a href="/">Privacy Policy</a> and the <a href="/">Terms of Service</a></label> <br/>
                    {/* {error && <div className="error">{error}</div> } */}
                    <button disabled={(!agreement)} onClick={handleSubmit}>Sign up</button>
                    {/* <button disabled={(!agreement && !isLoading)} onClick={handleSubmit}>Sign up</button> */}
                    
                </form>
            </div>
        </div>
     );
}
 
export default SignupPage;