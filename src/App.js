import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Routes,Route,Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>Route
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signup"/>}/>
      </Routes>
    </div>
  );
}
export default App;


  {
    /* <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="/" to="/signup"/>
      </Switch> */
  }