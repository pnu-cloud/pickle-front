import './App.css';
// import { Route, Routes } from 'react-router-dom';
import useMainRouter from 'router/useMainRouter';

const App = () => {
  const routes = useMainRouter();
  return <div>{routes}</div>;
};

export default App;
