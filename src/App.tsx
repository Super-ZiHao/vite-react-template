import { useDispatch, useSelector } from 'react-redux';
import { CounterState, add } from './store/counter';

function App() {
  const counter = useSelector<AppStore, CounterState>((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      {counter.value}
      {counter.value}
      <button onClick={() => dispatch(add())}>+1</button>
    </>
  );
}

export default App;
