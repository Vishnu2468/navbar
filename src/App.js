import "antd/dist/antd.ccss"
import logo from './logo.svg';
import './App.css';
import {menu} from "antd";

function App() {
  return (
    <div>
      <menu items={[{ label: "Home"},
        { label: "Dashboard"},
        { label: "Users List"},
        { label: "Profile"},
        { label: "Signout"},
      ]}></menu>
    </div>
  );
}

export default App;
