import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-700 text-white text-3xl p-3 rounded-lg">
      User:{userid}{" "}
    </div>
  );
}

export default User;
