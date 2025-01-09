import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/login-success.css'; // Import CSS file
import Layout from '@/app/layout';

const LoginSuccess = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Retrieve user information from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            router.push('/login'); // Redirect to login page if no user info is found
        }
    }, [router]);

    return (
        <Layout>
            <div className="login-success-container">
                {user ? (
                    <>
                        <h1>Welcome, {user.username}!</h1>
                        <p>Your email: {user.email}</p>
                        <p>You are successfully logged in.</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </Layout>
    );
};

export default LoginSuccess;
