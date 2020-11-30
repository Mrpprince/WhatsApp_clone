import './App.css';
import Chat from './Components/Chat/Chat';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="app">
    <div className="app__body">
    <SideBar></SideBar>
      <Chat></Chat>
    </div>
    </div>
  );
}

export default App;
