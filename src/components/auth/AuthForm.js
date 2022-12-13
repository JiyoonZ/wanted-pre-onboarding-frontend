import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Signin, Signup} from "../../lib/api";
import {validation, validationSignUp} from "../../utils/validation";
import {setToken} from "../../utils/authToken";
import * as C from "./style";

const INIT_VAL = {
  email: "",
  password: "",
  checkPassword: "",
};
function AuthForm({existUser}) {
  const [values, setValues] = useState(INIT_VAL);
  const navigate = useNavigate();
  const changeHandler = (evt) => {
    const {name, value} = evt.target;
    setValues({...values, [name]: value});
  };
  useEffect(() => {
    setValues(INIT_VAL);
  }, [existUser]);

  const sumbitHandler = async (evt) => {
    evt.preventDefault();
    const postVal = {email: values.email, password: values.password};
    if (existUser) {
      // 기존회원 로그인
      const resp = await Signin(postVal);
      setToken(resp.data.access_token);
      navigate("/todo");
    } else {
      //회원가입일때
      const resp = await Signup(postVal);
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
    <>
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
    </>
  );
}

export default AuthForm;
