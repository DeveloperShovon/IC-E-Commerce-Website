/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../createClint";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // const profile= {
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   position: "User"
  // }

  const [currentUser, setcurrentUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLogin, setIslogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session);

      if (session) {
        setcurrentUser(session.user);
        setIslogin(true);
        setLoading(false);
      } else {
        setcurrentUser(null);
        setIslogin(false);
      }
      console.log(currentUser);

      if (session && session.user) {
        const { data: mydata } = await supabase
          .from("users")
          .select("name , email, position")
          .eq("uuid", session.user.id)
          .single();
        if (mydata) {
          setProfile(mydata);
        } else {
          setLoading(false);
        }
      }

      setLoading(false);
    };
    initialSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = supabase.auth.signOut();
  console.log(logout);

  const value = {
    currentUser,
    profile,
    isLogin,
    loading,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
