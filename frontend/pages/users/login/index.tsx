import styled from 'styled-components';
import AuthContainer from '@/components/authAction/AuthContainer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

//로그인 페이지 입니다. 경로 '/user/login/'

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo({
      top: 670,
      left: 0,
      behavior: 'smooth',
    });
  }, [router]);
  return (
    <Wrapper>
      <WrapperInset>
        <Contents>
          <TextBox>
            <span className="nanum-bold">
              A-Z 개발 시작부터,
              <br />
              <br />
              쉽고 빠른 나만의 팀원까지
            </span>
          </TextBox>
          <ImgBox>img here</ImgBox>
        </Contents>
        <AuthContainer isLogin />
      </WrapperInset>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  background-color: #f2eeee;
  border-radius: 10px;
`;
const WrapperInset = styled.div`
  /* position: absolute; */
  /* top: 20px;
  right: 0px;
  bottom: 100px;
  left: 0px; */
  display: flex;
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  justify-content: space-around;
  align-items: center;
  background: rgba(241, 241, 241, 0.1);
  backdrop-filter: blur(5px);
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  height: 80%;
`;
const TextBox = styled.div`
  display: flex;
  width: 80%;
  height: 30%;
  justify-content: flex-start;
  align-items: center;
`;
const ImgBox = styled.div`
  display: flex;
  background-color: #d4d4d4;
  width: 80%;
  height: 400px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
`;