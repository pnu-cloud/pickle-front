import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import useMainRouter from './router/useMainRouter';
// -------------------------
import Group from './components/Layout/Group/Group';
import SideBar from './components/Layout/Sidebar/Sidebar';
// -------------------------

const App = () => {
  const routes = useMainRouter();
  return <div>{routes}</div>;
};

export default App;
