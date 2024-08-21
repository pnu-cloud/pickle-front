import './App.css';
import useMainRouter from 'router/useMainRouter';

const App = () => {
  const routes = useMainRouter();
  return <div>{routes}</div>;
};

export default App;
