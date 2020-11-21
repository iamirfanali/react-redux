import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
	const counter = useSelector((state) => state.counterReducer);
	const isLogged = useSelector((state) => state.loggedReducer);
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>React + Redux</h1>
				<h3>Counter {counter}</h3>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</header>
		</div>
	);
}

export default App;
