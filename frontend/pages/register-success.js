import { useRouter } from 'next/router';
import '../styles/register-success.css'; // You can reuse the CSS file or create a new one
import Layout from '@/app/layout';

const RegisterSuccess = () => {
  const router = useRouter();

  return (
    <Layout>

    <div className="register-success-container">
      <h1>Registration Successful!</h1>
      <p>You are registered. Now please login.</p>
    </div>
    </Layout>
  );
};

export default RegisterSuccess;
