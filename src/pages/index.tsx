import { decode } from 'jsonwebtoken';
import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import { parseCookies } from 'nookies';

const Home: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  console.log(props);
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};
const getServerSideProps: GetServerSideProps = async () => {
  const { labs_token: token } = parseCookies();
  const user = decode(token);
  return {
    props: {
      user,
    },
    redirect: {
      statusCode: 401,
      basePath: '/login',
    },
  };
};
export default Home;
