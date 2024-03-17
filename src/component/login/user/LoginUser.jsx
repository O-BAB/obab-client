import styles from "../../../css/login/user/loginUser.module.css";
import React, {useState} from "react";

const LoginUser = () => {
  const [inputs, setInputs] = useState({id: "", password: ""})

  // 아이디와 비밀번호 입력 시 이벤트 발생
  const toggleUserInfoOnchange = (e) => {
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  return (
    <div className={`${styles.loginFormContainer}`}>
      <div className={`p-5`}>
        <div className={`mb-3`}>
          <div className={`${styles?.loginTitle}`}>로그인</div>
        </div>
        <div
          className={`flex justify-end px-10 cursor-pointer`}
          onClick={() => {window.location.href = './'}}
        >
          {`뒤로가기`}
        </div>
        <div className={`flex flex-row flex-wrap items-center justify-center columns-9 p-2`}>
          <div className={`columns-1 items-start p-3`}>아이디:</div>
          <input
            name="id"
            type="text"
            defaultValue={inputs?.id}
            className={`columns-10 w-64 p-3`}
            placeholder="input admin ID"
            onChange={toggleUserInfoOnchange}
          />
        </div>
        <div className={`flex flex-row flex-wrap items-center justify-center columns-9 p-2`}>
          <div className={`columns-1 items-start p-1`}>비밀번호:</div>
          <input
            name="password"
            type="password"
            defaultValue={inputs?.password}
            className={`columns-9 w-64 p-3`}
            placeholder="Input admin password"
            onChange={toggleUserInfoOnchange}
          />
        </div>
        {/* 로그인 구현 처리 완료, But 아직은 로그인 처리가 불완전함,
            jwt 인증 받고나서 다음페이지로 넘어가, 유저정보 저장이 안되는 문제가 가끔 발생 */}
        <div className={`flex flex-row justify-between items-center px-20`}>
          <button className={`flex-col  mb-4 mt-4 py-3 bg-amber-50 mx-10 px-6 place-content-center`}>로그인</button>
          <button className={`flex-col  mb-4 mt-4 py-3 bg-amber-50 mx-10 px-6 place-content-center`}>회원가입</button>
        </div>

        {/* 로그인 구현 처리 완료, But 아직은 로그인 처리가 불완전함,
            jwt 인증 받고나서 다음페이지로 넘어가, 유저정보 저장이 안되는 문제가 가끔 발생 */}
        <div className={`flex flex-row justify-between items-center place-content-center`}>
          <button className={`flex-col w-20 mb-4 mt-4 py-3 bg-amber-50 mx-10 px-6`}>구글</button>
          <button className={`flex-col w-20 mb-4 mt-4 py-3 bg-amber-50 mx-10 px-6`}>페이스북</button>
          <button className={`flex-col w-20 mb-4 mt-4 py-3 bg-amber-50 mx-10 px-6`}>카카오톡</button>
          <button className={`flex-col w-20 mb-4 mt-4 py-3 bg-amber-50 mx-10 px-6`}>트위터</button>
        </div>


      </div>
    </div>
  )
}

export default LoginUser