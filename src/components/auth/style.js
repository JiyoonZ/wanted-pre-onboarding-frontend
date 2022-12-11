import styled from "styled-components";

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
`;
export const UserInput = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  border-radius: 9px;
  padding: 0 10px;
  margin: 10px 0;
`;
export const Button = styled.button`
  border: none;
  height: 30px;
  width: 100%;
  background-color: ${(props) =>
    props.disabled ? props.theme.accentColor : props.theme.grayColor};
  color: white;
  border-radius: 9px;
  margin: 30px 0;
  cursor: ${(props) => (props.disabled ? "pointer" : "")};
`;

export const AuthFooter = styled.div`
  font-size: 14px;
  text-align: center;
  span:last-child {
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
    text-decoration: underline;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InputTitle = styled.div`
  font-size: 14px;
`;
