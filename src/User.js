import "./User.css";
import { useParams } from "react-router";
import { softwareEngineers } from "./data";
const User = () => {
  const { userId } = useParams();
  return (
    <>
      <div className="container">
        <p>
          <span>Name: </span>
          {softwareEngineers[userId].name}
        </p>
        <p>
          <span>Department: </span>
          {softwareEngineers[userId].department}
        </p>
        <p>
          <span>Title: </span>
          {softwareEngineers[userId].title}
        </p>
        <p>
          <span>Education: </span>
          {softwareEngineers[userId].education}
        </p>
        <p>
          <span>Skills: </span>
          {softwareEngineers[userId].skills.map((skill, index) => {
            {
              if (index !== softwareEngineers[userId].skills.length - 1)
                return skill + " , ";
              else return skill;
            }
          })}
        </p>

        <p>
          <span>Interest: </span>
          {softwareEngineers[userId].interests.map((interest, index) => {
            if (index !== softwareEngineers[userId].interests.length - 1)
              return interest + " , ";
            else return interest;
          })}
        </p>
        <p>
          <span>Experience: </span>
          {softwareEngineers[userId].experience}
        </p>
        <p>
          <span>Location: </span>
          {softwareEngineers[userId].location}
        </p>
      </div>
    </>
  );
};
export default User;
