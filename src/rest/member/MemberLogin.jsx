import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../modules/user';
import { useLocation, useNavigate } from 'react-router-dom';

// react-hook-form
const MemberLogin = () => {

  const dispatch = useDispatch()
  const userStore = useSelector((store) => store.user)
  const navigate = useNavigate()
  
  // use 네비게이트로 보냈을때 받는 법
  const location = useLocation();
  // console.log(location.state);

  // 메세지 실패 처리
   // 메세지 실패 처리
   const message = location.state && location.state.message;
   useEffect(() => {
     if(message){
       alert(message)
       // 초기화
       navigate(location.pathname, {
         replace : true,
         state : {message : ""}
       })
     }
   }, [message])
  
  
  console.log(userStore);
  const {register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors }} = useForm({mode:"onChange"})
  // 이메일 형식을 맞춘 정규식
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // 소문자, 특수문자, 숫자를 포함한 8자리 이상의 정규식
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <form onSubmit={handleSubmit(async (data) => {
      const id = 1
      const memberVO = {...data, id}

      await fetch(`http://localhost:10000/members/api/member/${id}`, {
        method : "GET"
      })
      .then(res => res.json())
      .then((memberVO) => {
        //로그인 성공
        console.log(memberVO);
        
        dispatch(setUser(memberVO))
        dispatch(setUserStatus(true))
        navigate("/mypage")
      })

    })}>
      
      <label>
        <p>이메일</p>
        <input 
          type="text" placeholder='이메일 입력하세요'
          {...register("memberEmail", {
            required : true,
            pattern : {
              value : emailRegex
            }
          })}
        />
        {errors && errors?.memberEmail?.type === "required" && (
          <p>이메일을 입력하세요</p>
        )}
        {errors && errors?.memberEmail?.type === "pattern" && (
          <p>이메일 양식을 지켜주세요</p>
        )}
      </label>

      <label>
        <p>비밀번호</p>
        <input 
          type="password" placeholder="비밀번호를 입력하세요."
          {...register("memberPassword", {
            required : true,
            pattern : {
              value : passwordRegex
            }
          })}
        />
        {errors && errors?.memberPassword?.type === "required" && (
          <p>비밀번호를 입력하세요</p>
        )}
        {errors && errors?.memberPassword?.type === "pattern" && (
          <p>소문자, 숫자, 특수문자(!@#)을 포함한 8자리 이상의 비밀번호를 사용하세요.</p>
        )}
      </label>

      <button disabled={isSubmitting}>로그인</button>
    </form>
  );
};

export default MemberLogin;