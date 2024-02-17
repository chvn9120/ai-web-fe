import makeAxiosReq from '../../apis/makeAxiosReq';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SocialContainer } from './SocialContainer';
import { SignInBodyForm } from './SignInBodyForm';
import { OverlayComponent } from './OverlayComponent';
import { useAuth } from '../../hooks/useAuth';

export const SignIn = ({ setUser }) => {
	const [error, setError] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { signin } = useAuth();

	const [testDatas, setTestDatas] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchData() {
			await makeAxiosReq
				.get('/users')
				.then((res) => res.status === 200 && setTestDatas(res.data))
				.catch((err) => console.error(err));
		}
		fetchData();
	}, [testDatas, setTestDatas]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (username.trim() === '' || password.trim() === '')
			return setError('Tài khoản hoặc mật khẩu không được để trống!');
		const signInObj = { username: username.trim(), password: password.trim() };
		// add your sign in logic here
		const match = testDatas.some((user) => user.username === username.trim());
		if (!match) return setError('Tài khoản hoặc mật khẩu không đúng!');
		const currentUser = testDatas.find((user) => user.username === username.trim());
		signin(currentUser);
		match && navigate('/');
	};

	return (
		<section className="signin-page">
			<div className="container" id="container">
				<div className="form-container log-in-container">
					<form onSubmit={handleSubmit}>
						<h1>Đăng nhập</h1>
						<SocialContainer />
						<SignInBodyForm setUsername={setUsername} setPassword={setPassword} error={error} />
					</form>
				</div>
				<OverlayComponent isLoginPage={true} />
			</div>
		</section>
	);
};
