import * as C from "./style";

function SignUp() {
  return (
    <>
      <C.Title>회원가입</C.Title>
      <form>
        <C.InputGroup>
          <C.InputTitle>아이디</C.InputTitle>
          <C.UserInput placeholder="아이디를 입력해주세요" required />
        </C.InputGroup>
        <C.InputGroup>
          <C.InputTitle>비밀번호</C.InputTitle>
          <C.UserInput placeholder="비밀번호를 입력해주세요" required />
        </C.InputGroup>
        <C.InputGroup>
          <C.InputTitle>
            비밀번호 <br />
            확인
          </C.InputTitle>
          <C.UserInput placeholder="비밀번호를 입력해주세요" required />
        </C.InputGroup>
        <C.Button disabled={false}>회원가입</C.Button>
      </form>
      <C.AuthFooter></C.AuthFooter>
    </>
  );
}
export default SignUp;
