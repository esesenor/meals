import axios from 'axios'
const Register = () => {

  const onSubmitUser = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("data1111", data)
    axios.post('http://localhost:3000/api/v1/users/register', data).then(()=>console.log("registro con exito")).catch((err)=>console.log(err))
  }

  return (
    <div>
      <div className="bg-orange-950 p-8 text-white rounded-xl shadow-2xl w-auto lg:w-[450px] mx-auto">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] mb-2">
          Crear <span className="text-primary">cuenta</span>
        </h1>
        {/* {message && <div className="message">{message}</div>} */}
        <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-400 w-full rounded-full mb-4 text-green-400">
        </button>
        <form onSubmit={onSubmitUser}> 
          <div className="relative mb-4">
            <label htmlFor="name">Nombre Completo:</label>
            <input
              className="py-1 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre completo"
              required
              // value={user.fullname}
              // onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              className="py-1 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              required
              // value={user.email}
              // onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="relative mb-4">
            <label className="text-primary" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="py-1 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
             // type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              required
              // value={user.password}
              // onChange={handleChange}
              autoComplete="on"
            />
            {/* {showPassword ? (
              <RiEyeOffLine
                // onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-2 hover:cursor-pointer text-secondary-400"
              />
            ) : (
              <RiEyeLine
                // onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-2 hover:cursor-pointer text-secondary-400"
              />
            )} */}
          </div>

          <div className="relative mb-4">
            <label className="text-primary" htmlFor="username">
              Role:
            </label>
            <input
              className="py-1 pl-8 pr-4 bg-secondary-900 text-secondary-400 w-full outline-none rounded-lg"
              type="text"
              id="role"
              name="role"
              placeholder="Ingresa un nombre de usuario"
              required
              // value={user.username}
              // onChange={handleChange}
              autoComplete="off"
            />
          </div>

          

          <input
            type="submit"
            value="Resgistrarse"
            className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
          />
        </form>
      </div>
    </div>
  )
}
export default Register