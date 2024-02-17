import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Home } from './components/Home';
import { Error } from './components/Error';

import { SignIn } from './components/SignIn&UpComponents/SignIn';
import { SignUp } from './components/SignIn&UpComponents/SignUp';

import { Details } from './components/UserComponents/User.Details';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AuthProvider } from './hooks/useAuth';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
	const [errCode, setErrCode] = useState(404);
	const [errMsg, setErrMsg] = useState('Oops! Đã có lỗi xảy ra!');
	const [errStack, setErrStack] = useState(`Không tìm thấy trang này`);

	return (
		<AuthProvider>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="user">
					<Route
						path="details"
						element={
							<ProtectedRoute>
								<Details />
							</ProtectedRoute>
						}
					/>
				</Route>
				<Route path="signin" element={<SignIn />} />
				<Route path="signup" element={<SignUp />} />

				<Route path="/*" element={<Error errCode={errCode} errMsg={errMsg} errStack={errStack} />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
