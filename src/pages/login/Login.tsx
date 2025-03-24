import { LoginForm } from "../../component/LoginForm"
import './login.css'
import logo from "../../assets/images/travlogo 2.png"
export const Login = () => {
  return (
    <div className="bg-Dash h-screen flex items-center justify-evenly">
      <div className="text-white flex items-start space-x-2 -mr-40">
        <img src={logo} alt="" className="w-28" />
        <span className="text-3xl mt-4">Travel Plus</span>
      </div>
      <LoginForm/>
    </div>
  )
}
