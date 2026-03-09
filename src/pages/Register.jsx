import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const { user, setUser } = useState({
    email: "",
    password: "",
  });

  const { isLoading, setIsLoading } = useState(true);
  const { error, setError } = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                user.email,
                user.password

            );
            const user = userCredential.user;
            console.log("User registered:", user);
            setIsLoading(false);
        }
        catch (error) {
            setError(error.message);
            setIsLoading(false);
        }

  }
  console.log(user);
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign up</h2>

        <form onSubmit={handleSubmit} className="signup-form">
          {/* <div className="input-group">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div> */}

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div>
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            )}
            {error && <p className="error">{error}</p>}
          </div>
        </form>

        <p className="login-text">
          Already have an account? <span>Log In</span>
        </p>
      </div>
    </div>
  );
}
