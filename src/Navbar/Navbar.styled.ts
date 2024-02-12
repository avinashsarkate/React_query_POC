import styled from 'styled-components';

const NavStyled = styled.div`
 margin :5px ;
display :flex;
justify-content: space-between;

.links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button-link {
    display: flex;
    padding: 8px 16px;
    margin-right: 12px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
  }
  .Heading{
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px ;
  }
`;

export default NavStyled
