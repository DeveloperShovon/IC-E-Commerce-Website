import { useState } from "react";
import { supabase } from "../createClint";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      });
      if (error) {
        setError(error.message);
        console.log(error.message);
        setSuccess(false);
      } else {
        setSuccess(true);
        navigate("/home")
      }
    } catch (error) {
      setError(error);
    }
  };
  console.log(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-1">Sign up</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Sign up to continue
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
          </div>

          {/* Password */}
          <div>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
          </div>

          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <label>Remember me</label>
          </div>

          <div>
            {success ?
              <p style={{ color: "green" }}>Login Successfully</p>
            : <>{error && <p className="text-red-700">{error}</p>}</>}
          </div>

          <div className="flex justify-center">
            <button className=" hover:bg-orange-700  px-5 py-2 rounded bg-orange-600 text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
