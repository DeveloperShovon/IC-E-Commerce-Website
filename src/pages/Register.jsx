import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isCompleated, setIsCompleted] = useState(false);
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
   
      try {
        await createUserWithEmailAndPassword(auth, user.email, user.password)
        await setDoc( doc(db, "users", auth.currentUser.uid),{
          name: user.name,
          email: user.email,
          role: "user",
        })
        setIsCompleted(true);
        setError("");
        setUser({
          name: "",
          email:"",
          password:""
        })
        
      } catch (error) {
        setError(error.message);
        setIsCompleted(false);
      }
      
      
  };
  console.log(user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-1">Sign up</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
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
          <div>
            {isCompleated && <p className="text-green-500 text-sm">Sign up successful!</p>}
            
            
            {!isCompleated && <button
                type="submit"className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">Sign up</button>}

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          {/* Button */}

          {/* Remember Me */}
          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <label>Remember me</label>
          </div>
        </form>
      </div>
    </div>
  );
}
