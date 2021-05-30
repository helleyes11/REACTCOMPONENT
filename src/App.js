import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import HG from './HG.jpg'
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Address></Address>
    </div>
  );
}

export default App;
