import {useState} from "react";
import * as C from "../components/auth/style";
import {validation, validationSignUp} from "../utils/validation";
import Container from "../styles/Container";
import {Signup} from "../lib/api";
import {setToken} from "../lib/authToken";
import {useNavigate} from "react-router-dom";

function Auth() {
  const [existUser, setExistUser] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });
  const navigate = useNavigate();
  const isUser = () => {
    setExistUser((prev) => !prev);
  };

  const changeHandler = (evt) => {
    const {name, value} = evt.target;
    setValues({...values, [name]: value});
    console.log(values, validationSignUp(values));
  };
  const sumbitHandler = async (evt) => {
    evt.preventDefault();
    const postVal = {email: values.email, password: values.password};
    if (existUser) {
      // 기존회원 로그인
    } else {
      //회원가입일때
      const resp = await Signup(postVal);
      console.log(resp);
      // 토큰 담아서 로컬스토리지에 저장하기
      setToken(resp.data.access_token);
      navigate("/todo");
      window.location.href = "/";
    }
  };
  const disabledHandler = () => {
    if (validation(values)) {
      return existUser ? false : validationSignUp(values) ? false : true;
    }
    return true;
  };

  return (
    <Container>
      <C.Title>{existUser ? "로그인" : "회원가입"}</C.Title>
      <form onSubmit={sumbitHandler}>
        <C.InputGroup>
          <C.InputTitle>아이디</C.InputTitle>
          <C.UserInput
            placeholder="아이디를 입력해주세요 (@포함)"
            name="email"
            onChange={changeHandler}
            required
          />
        </C.InputGroup>
        <C.InputGroup>
          <C.InputTitle>비밀번호</C.InputTitle>
          <C.UserInput
            placeholder="비밀번호를 입력해주세요 (8자 이상입니다)"
            name="password"
            onChange={changeHandler}
            required
          />
        </C.InputGroup>
        {!existUser && (
          <C.InputGroup>
            <C.InputTitle>
              비밀번호
              <br />
              확인
            </C.InputTitle>
            <C.UserInput
              placeholder="비밀번호를 다시 입력해주세요"
              name="checkPassword"
              onChange={changeHandler}
              required
            />
          </C.InputGroup>
        )}
        <C.Button disabled={disabledHandler()}>로그인</C.Button>
      </form>
      {existUser && (
        <C.AuthFooter>
          <span>회원이 아니신가요? </span>
          <span onClick={isUser}>회원가입하기</span>
        </C.AuthFooter>
      )}
    </Container>
  );
}

export default Auth;
