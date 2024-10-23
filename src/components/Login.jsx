import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";


export default function Login() {
    
    //useEffect(()=>{ //para divisar datos que se realizan en db
     // axios.get('http://localhost:8081/')
      //.then(res => console.log(res))
      //.catch(err => console.log(err));
    //}, [])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectWithCompatibility = (to) => {
      redirect(to);
      location.href = to;
    }
    function handleSubmit(event){
      event.preventDefault()
      axios.post('http://localhost:3030/api/login', {email, password })
      .then(res => {
        console.log(res);
        redirectWithCompatibility("/home");
        alert("Acceso garantizado");
      }).catch(err =>{
        // redirectWithCompatibility("/");
        alert("Acceso no garantizado");
        console.log(err)
      } )
  
    }

    return (
      <div1 className="bg-black">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8 bg-gray-800">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto animate-bounce"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400 ">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="bg-gray-200 block w-full rounded-md px-2 py-1.5 text-black font-semibold shadow-sm  placeholder:text-gray-400 ; "
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"                    
                    placeholder="current-password"
                    onChange={e => setPassword(e.target.value)}
                    className="block w-full rounded-md px-2 py-1.5 text-black font-semibold shadow-sm  placeholder:text-gray-400 ;"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={() => redirectWithCompatibility("/register")}>
                Registrate
              </a>
            </p>
          </div>
        </div>
      </div1>
    )
  }
  