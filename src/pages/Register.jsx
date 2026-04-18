import { useState } from "react";
import { supabase } from "../createClint";

import { useNavigate } from "react-router";
import GlowBackground from "../assets/GlowBackground";

export default function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");



  // handle change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          data: {
            name: user.name,
          },
        },
      });
      console.log(user.user);
      if (data.user) {
        await supabase.from("users").insert([
          {
            uuid: data.user.id, 
            email: data.user.email,
            name: user.name,
            position:"User"
          },
        ]);
      }

      if (error) {
        setError(error.message);
        setSuccess(false);
      } else {
        setSuccess(true);
        setUser({
          name: "",
          password: "",
          email: "",
        });
        navigate("/login");
      }
    } catch {
      console.log(error);
    }
  };

  return (

    <GlowBackground>
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" bg-transparent shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-1">Sign up</h2>
        <p className="text-center   text-gray-500 text-sm mb-6">
          Sign up to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={user.name}
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={user.email}
              placeholder="Email"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              onChange={handleChange}
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

          <div className="flex flex-col justify-center ">
            <div className=" flex justify-center flex-col space-y-3">
              {success ?
                <p style={{ color: "green" }}>Login Successfully</p>
              : <>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <button
                    className="p-2 bg-orange-500 rounded text-sm px-3  text-amber-50"
                    type="submit">
                    Sign Up
                  </button>
                </>
              }
            </div>

            <div>
              <p className=" flex justify-center m-5">
                Already have an account ?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className=" text-orange-600  font-bold pl-2 cursor-pointer">
                  {" "}
                  Login Up
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    </GlowBackground>
  );
}
