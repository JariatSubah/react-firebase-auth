import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="page">
      <h1>Profile</h1>
      <p>
        Email: <strong>{user.email}</strong>
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
