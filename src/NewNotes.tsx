import React, { useState } from "react"
import  NavBar  from "./Navbar/Navbar"
import { NawUserStyled } from "./NewUser.styled"
import { useMutation } from "@tanstack/react-query"
import { UserData } from "./Types"
import { addNotes } from "./API"
import { useNavigate } from "react-router-dom"



const NewNotes: React.FC = () => {
  const [newUserData, setNewUserData] = useState<UserData>({
    title: "",
    body: ""
  })

    const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn:(newUserData: UserData) => addNotes(newUserData)
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewUserData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleAddUser = () => {
    mutate(newUserData, {
      onSuccess: () => {
        alert("Data added successfully")
        resetForm()
        navigate("/")
      },
      onError: (error) => {
        alert(`Error adding data: ${error}`)
      }
    })
  }

  const resetForm = () => {
    setNewUserData({
      title: "",
      body: ""
    })
  }

  return (
    <NawUserStyled>
      <div>
        <NavBar />
        <div className="form-container">
          <div className="form">
            <input
              className="input-field"
              value={newUserData.title}
              placeholder="Title"
              onChange={handleInputChange}
              name="title"
            />
            <br />
            <textarea
              className="input-field"
              value={newUserData.body}
              placeholder="Description"
              onChange={handleInputChange}
              name="body"
            />
            <br />
            <button className="submit-button" onClick={handleAddUser}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </NawUserStyled>
  );
};

export default NewNotes;
