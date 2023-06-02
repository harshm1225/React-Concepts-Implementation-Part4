import { Link } from "react-router-dom";
import { softwareEngineers } from "./data";
const Users = () => {
  return (
    <>
      <h5>
        {softwareEngineers.map((engineer, index) => {
          return (
            <Link
              to={`/user/${index}`}
              style={{ color: "red", margin: "10px" }}
            >
              {engineer.name}
            </Link>
          );
        })}
      </h5>
    </>
  );
};
export default Users;
