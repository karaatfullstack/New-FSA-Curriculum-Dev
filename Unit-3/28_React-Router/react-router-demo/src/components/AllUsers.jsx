import { useNavigate } from "react-router-dom";
const users = [
  { id: 1, name: "Richard" },
  { id: 2, name: "Mortimer" },
  { id: 3, name: "Summerthyme" },
];

export default function AllUsers() {
  const navigate = useNavigate();
  return (
    <h1>
      {users.map((user) => {
        return (
          <div
            onClick={() => {
              navigate(`/users/${user.id}`);
            }}
          >
            <h2>{user.name}</h2>
          </div>
        );
      })}
    </h1>
  );
}
