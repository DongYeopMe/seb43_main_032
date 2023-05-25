import Content from '@/components/community/Content';
import Head from 'next/head';
import styled from 'styled-components';

const Community = () => {
  return (
    <>
      <Head>
        <title>{`Side Quest - 커뮤니티`}</title>
      </Head>
      <Box>
        <Content />
      </Box>
    </>
  );
};

export default Community;

const Box = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
