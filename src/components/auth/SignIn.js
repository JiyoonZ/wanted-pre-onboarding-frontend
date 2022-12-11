import styled from "styled-components";
import * as C from "./style";
function SignIn({setExistUser}) {
  const isUser = () => {
    setExistUser((prev) => !prev);
  };
  return (
    <>
      <C.Title>로그인</C.Title>
      <form>
        <C.InputGroup>
          <C.InputTitle>아이디</C.InputTitle>
          <C.UserInput placeholder="아이디를 입력해주세요" required />
        </C.InputGroup>
        <C.InputGroup>
          <C.InputTitle>비밀번호</C.InputTitle>
          <C.UserInput placeholder="비밀번호를 입력해주세요" required />
        </C.InputGroup>
        <C.Button disabled={true}>로그인</C.Button>
      </form>
      <C.AuthFooter>
        <span>회원이 아니신가요? </span>
        <span onClick={isUser}>회원가입하기</span>
      </C.AuthFooter>
    </>
  );
}

export default SignIn;
