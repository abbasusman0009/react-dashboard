export const LoginForm = () => {
  return (
    <div className="bg-[#ffffff] border-[#36FF03] border-2 h-[450px] p-10 rounded-md shadow-md lg:w-96 ">
      <div className="text-center space-y-1 mb-8">
        <h1 className="text-2xl font-bold">Hello, Welcome Back</h1>
        <p>Log In To Your Account </p>
      </div>
      <form className="flex flex-col space-y-6 mt-10">
        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input
              className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              type="text"
            />
            <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
              User Name
            </label>
          </div>
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input
              className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              type="password"
            />
            <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
              Password
            </label>
          </div>
        </div>
        <p className="mb-32">Forgot Password?</p>
        <button
          type="submit"
          className="bg-[#158B51] text-white p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  )
}
