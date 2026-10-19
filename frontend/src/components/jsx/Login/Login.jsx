import onePiece from "../../../assets/images/onePiece/onePiece.jpg";

const Login = () => {
  return (
    <div className="flex  h-full">
      <div className="w-1/2">
        <img src={onePiece} alt="" />
      </div>
      <div className="w-1/2">
        <div className="flex flex-col items-center text-white">
          <span className="text-4xl">WELCOME</span>
          <span>Login with Email</span>
        </div>
        <div className="flex flex-col ml-32 mr-32 ">
          <div className="flex flex-col mt-4">
            <label className="" htmlFor="">
              Email id
            </label>
            <input
              className="p-1 text-black placeholder-[#c3c3c3] "
              type="text"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="flex flex-col ml-32 mr-32 ">
          <div className="flex flex-col mt-4">
            <label className="" htmlFor="">
              Password
            </label>
            <input
              className="p-1 text-black  placeholder-[#c3c3c3]"
              type="text"
              placeholder="Password"
            />
          </div>
          <a className="text-xs text-right" href="">
            Forget your Password?
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <button className="bg-blue-500 p-4 rounded-lg ">
            <h1>LOGIN</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
