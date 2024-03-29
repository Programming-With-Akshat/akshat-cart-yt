import { Button } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../reducer';
import './Login.css';

const Login = () => {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className='login'>
			<div className='login__container'>
				<img src='/Icon.png' alt='' />

				<div className='login__text'>
					<h2>Login to AkshatCart</h2>
				</div>

				<Button onClick={signIn}>Sign In With Google</Button>
			</div>
		</div>
	);
};

export default Login;
