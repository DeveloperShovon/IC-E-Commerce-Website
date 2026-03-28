import { createContext ,useEffect, useState } from "react";
import { supabase } from "../createClint";


export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  
  const [currentUser, setcurrentUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLogin, setIslogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialSession = async () => {
      const { data: { session }} = await supabase.auth.getSession();
       console.log(session);
      if (session) {
        setcurrentUser(session.user);
        setIslogin(true);
        setLoading(false);
      } else {
        setcurrentUser(null);
        setIslogin(false);
      }
      console.log(currentUser)

     if(session && session.user){
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
  }, []);

   const logout = supabase.auth.signOut()

  const value = {
    currentUser,
    profile,
    isLogin,
    loading,
    logout
  };

  return(
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

  )
  
 
};


