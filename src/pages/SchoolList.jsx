import './SchoolPage.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../services/authService";

const SchoolList = () => {

    const [schools, setSchools] = useState([]);

    const fetchData = async () => {
        try {
          const response = await get("/schools");
          setSchools(response.data);
        } catch (error) {
          console.log("ERR Fetching Data >>>", error);
        }
      };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div>
        <div className="school-container">

        <div className="school-list-container">
          <h2> </h2>
          <ul>
            {schools.map((school) => {
              // console.log("school", school)
              return (
                <Link to={`/school-details/${school._id}`}>   
                    <li className="school-item" key={school._id}>
                       <h3>School Name: {school.name}</h3>
                       <p>{school.address}</p>
                    </li>

                </Link>
              );
            })}
          </ul>
        </div>

        </div>
    </div>
  )
}

export default SchoolList;