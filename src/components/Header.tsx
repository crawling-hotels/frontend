import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userAtom';


const Base = styled.div`
  width: 100%;
  height: 100px;
  background-color: #3D66E0;
`;

const Inner = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  position: relative;
`;


const AppName = styled.h1` 
  position: absolute;
  left: 0;
  color: white;
  font-size: 32px;
  cursor: pointer;
  /* background-color: beige; */
`;

const Nav = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  color: white;
  /* background-color: yellowgreen; */

`;

const NavItem = styled.div`
  cursor: pointer;
  font-size: 22px;
  font-weight: 600;

  & + & {
    margin-left: 30px;
  }
`;

const Header: React.FC = () => {
  // const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [signInState, setSignInState] = useState(false);
  

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      setSignInState(true);
      setUser(sessionStorage.getItem('user'));
    }
  }, []);//처음 렌더링될 때 세션에 로그인되어있는지 확인


  const signOut_fb = () => {//로그아웃(로그인 상태)
    sessionStorage.removeItem('user');
    setUser(null);
    setSignInState(false);
  }

  const linkStyle = {
    textDecoration: "none",
    color: "white"
  }


  return (
    <Base>
      <Inner>
        <AppName><Link to={"/"} style={linkStyle}>이때어때</Link></AppName>
        {
          signInState ? (
            <Nav>
                <NavItem><Link to={"/"} style={linkStyle}>리뷰 등록</Link></NavItem>
                <NavItem><Link to={"/mypage"} style={linkStyle}>마이페이지</Link></NavItem>
                <NavItem onClick={signOut_fb}>로그아웃</NavItem>
            </Nav>
            
          ) : (
            <Nav>
              <NavItem><Link to={"/login"} style={linkStyle}>로그인</Link></NavItem>
            </Nav>
          )
        }
      </Inner>
    </Base>
  )
}

export default Header