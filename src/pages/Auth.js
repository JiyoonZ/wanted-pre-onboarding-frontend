import {useState} from "react";
import * as C from "../components/auth/style";
import Container from "../styles/Container";
import AuthForm from "../components/auth/AuthForm";

function Auth() {
  const [existUser, setExistUser] = useState(true);
  const isUser = () => {
    setExistUser((prev) => !prev);
  };

  return (
    <Container>
      <C.Title>{existUser ? "로그인" : "회원가입"}</C.Title>
      <AuthForm existUser={existUser} />
      {existUser ? (
        <C.AuthFooter>
          <span>회원이 아니신가요? </span>
          <span onClick={isUser}>회원가입하기</span>
        </C.AuthFooter>
      ) : (
        <C.AuthFooter>
          <span onClick={isUser}>로그인 하러가기</span>
        </C.AuthFooter>
      )}
    </Container>
  );
}

export default Auth;
