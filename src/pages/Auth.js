import Container from "../styles/Container";
import {useState} from "react";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
function Auth() {
  const [existUser, setExistUser] = useState(true);
  return (
    <Container>
      {existUser ? <SignIn setExistUser={setExistUser} /> : <SignUp />}
    </Container>
  );
}

export default Auth;
