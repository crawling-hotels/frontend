import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import bcrypt from 'bcryptjs';
import Input from '../components/Input';
import Header from '../components/Header';

const Base = styled.div`

`;

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

type FormValues = {
  id: string;
  name: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit,
    formState: {
      errors
    } } = useForm<FieldValues>();
  
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { id, name, password } = data;
    const hashedPassword = await bcrypt.hash(password, 12);

    //저장하는 로직

    navigate('/login');//로그인 페이지로 이동
  }


  return (
    <Base>
      <Header />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>회원가입</h1>
          
          <Input 
            id='id'
            label="아이디"
            register={register}
            errors={errors}
          />
          <Input 
            id='name'
            label="이름"
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
          
          <SubmitBtn type='submit'>회원가입</SubmitBtn>
        </Form>  
      </Inner>
      
    </Base>
  )
}

export default SignUpPage;