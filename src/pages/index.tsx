import { decode } from 'jsonwebtoken';
import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import { parseCookies } from 'nookies';
import { getApi } from '../services/axios';
import { Users } from '../types/type_users';

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
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
    const userId = decode(token);
    const { data } = await api.get<Users>(`users/${userId}`);
    return {
      props: {
        data,
      },
    };
  }
};
export default Home;
