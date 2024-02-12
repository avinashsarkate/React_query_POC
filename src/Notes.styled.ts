import styled from "styled-components";

 export  const NoteStyled = styled.div`
 text-align: center; 

 .note-container {
    display: flex;
     
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: center;

  }
  
  .note-box {
    border: 1px solid black;
    padding: 10px;
    width: 50%
  }
  
  .note-box h3 {
    margin: 0;
  }
  
  .note-box p {
    margin: 0;
  }
  
 
 
 `