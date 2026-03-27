import { useAuth } from "../contexts/authContext";

export default function PrivateRouter({ children }) {
    // সরাসরি useAuth ব্যবহার করুন, ঝামেলা শেষ!
    const { currentUser, loading } = useAuth();

    if (loading) return <h1>Loading...</h1>;

    if (!currentUser) {
        return <h1>Login Required</h1>;
    }

    return (
        <div>
            <h1>Welcome, {currentUser.email}</h1>
            {children}
        </div>
    );
}