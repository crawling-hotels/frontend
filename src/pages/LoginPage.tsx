import React from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Header from '../components/Header';
import Input from '../components/Input';

const Base = styled.div``;

const Inner = styled.div`
  width: 1200px;
  height: calc(100vh - 100px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* background-color: aliceblue; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  height: fit-content;

  /* background-color: beige; */

  & h1 {
    font-size: 25px;
  }

  & > div {
    margin-top: 20px;

    &: nth-of-type(1) {
      margin-top: 0;
    }
  }

`;

const SubmitBtn = styled.button`
  height: 50px;
  border-radius: 10px;
  background-color: #768CCE;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: 0;
  margin-top: 20px;
  cursor: pointer;
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;

  & p {
    margin: 0;
    color: #6D6D6D;
    margin-right: 5px;
  }
`;


const LoginPage = () => {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit,
    formState: {
      errors
    } } = useForm<FieldValues>();
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { id, password } = data;

    //해당 id를 가진 회원이 있는지 조회

    //비밀번호가 일치하는지 비교(bcrypt.compare)

    sessionStorage.setItem('user', id);
    navigate('/');//메인페이지로 이동
  }

  return (
    <Base>
      <Header />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>로그인</h1>

          <Input
            id='id'
            label="아이디"
            register={register}
            errors={errors}
          />
          <Input 
            id='password'
            label="비밀번호"
            type='password'
            register={register}
            errors={errors}
          />

          <SubmitBtn type='submit'>로그인</SubmitBtn>

          <SignUpContainer>
            <p>아직 회원이 아니신가요?</p>
            <Link 
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
            >
              회원가입
            </Link>
          </SignUpContainer>
          
        </Form>
      </Inner>
    </Base>
  )
}

export default LoginPage;