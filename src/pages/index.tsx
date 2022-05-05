import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import Router from 'next/router';
import cookie from 'nookies';
import { decode } from 'jsonwebtoken';

const Home: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};
const getServerSideProps: GetServerSideProps = async () => {
  const token = cookie.get();
  !token ? Router.push('/login') : null;
  return {
    props: {},
    redirect: {
      statusCode: 401,
      basePath: '/login',
    },
  };
};
export default Home;
