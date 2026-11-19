import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="page">
      <h1>Welcome to Dashboard</h1>
      <p>This is Dashboard Page.</p>
      <p>
        Logged in as: <strong>{user.email}</strong>
      </p>
    </div>
  );
}
