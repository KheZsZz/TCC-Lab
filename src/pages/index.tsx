import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import { parseCookies } from 'nookies';
import { getApi } from '../services/axios';

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const api = getApi(ctx);
  const { labs_token: token } = parseCookies(ctx);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  } else {
    const { data } = await api.get('users/');
    return {
      props: {
        data,
      },
    };
  }
};
export default Home;
