import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../services/authService";
import axios from "axios";

const SchoolPage = () => {
  // State Variables
  const [schools, setSchools] = useState([]);
  const [newSchoolName, setNewSchoolName] = useState("");

  const [editSchool, setEditSchool] = useState(null); //State var to edit/update

  const onSubmit = () => {
    setEditSchool(null);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await get("/schools");
      setSchools(response.data);
    } catch (error) {
      console.log("ERR Fetching Data >>>", error);
    }
  };

  // ADD school handler
  const handleAddSchool = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/schools", {
        name: newSchoolName,
      });
      // console.log("schools", [...schools, ...response.data])
      // setSchools([...schools, ...response.data]);
      fetchData();
      setNewSchoolName("");
    } catch (error) {
      console.log("Error ADD-POST School>>>", error);
    }
  };

  // UPDATE / Edit School
  const handleEditSchool = (id) => {
    //id of school being edited
    setEditSchool(id); //Set the stae var to ID
  };

  // DELETE school handler
  const handleDeleteSchool = async (id) => {
    try {
      const deleteResponse = await axios.delete(
        `http://localhost:4000/schools/${id}`
      );
      //   const updatedSchools = schools.filter(schools => school_id !== id); //New array without deleted schools
      // const updatedSchools = await axios.get("http://localhost:4000/schools");
      // setSchools(updatedSchools.data);
      fetchData();
      console.log("SCHOOLS>>>>", updatedSchools);
      console.log("School deleted");
    } catch (error) {
      console.log("Delete failed>>>>", error); //error here: Not finding resource?
    }
  };

  // Fetch
  useEffect(() => {
    fetchData();
  }, []);

  //RETURN
  return (
    <div>
      <h1>  </h1>
      <div className="school-container">
        <div>
          {/* SCHOOL FORM  */}
          {/* Form onSubmit */}
          <form onSubmit={handleAddSchool}>
            <label className="school-label"> New School: </label>
            <input
              type="text"
              name="school"
              value={newSchoolName}
              onChange={(e) => setNewSchoolName(e.target.value)}
            />
            <button type="submit"> Add </button>
            {/* <button type="submit"> Delete </button> */}
          </form>
        </div>

        {/* Render list of schools using map() */}
        <div className="school-list-container">
          <h2> </h2>
          <ul>
            {schools.map((school) => {
              // console.log("school", school)
              return (
                <li className="school-item" key={school._id}>
                  School Name: {school.name}
                  {/* Edit form  */}
                  {editSchool === school._id ? ( //write handle update function above
                    <EditForm onSubmit={onSubmit} school={school} />
                  ) : (
                    //On click => go to EditHandler
                    <button
                      className="edit-button"
                      onClick={() => handleEditSchool(school._id, school.name)}
                    >
                      Edit
                    </button>
                  )}
                  {/* Delete button */}
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteSchool(school._id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchoolPage;

const EditForm = ({ onSubmit, school }) => {
  const [newName, setNewName] = useState(school.name);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/schools/${school._id}`,
        {
          name: newName,
        }
      );

      onSubmit();
    } catch (err) {
      console.log("Edit Form Error", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName} //State  var
        onChange={(e) => setNewName(e.target.value)} //State var
      />

      {/* Implement Update Logic to this button */}
      <button
        // onClick={() => setEditSchool(schoolId)}
        type="submit"
        className="update-button"
      >
        Save/Update
      </button>
    </form>
  );
};
