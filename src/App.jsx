import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import ProfilePage from './components/profile/ProfilePage';
import MyConnections from './components/connections/MyConnections';
import MyNotifications from './components/notifications/MyNotifications';
import Myjobs from './components/jobs/Myjobs';
import Signup from './components/Signup';
import Messages from './components/Messages/Messages';


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/myconnections' element={<MyConnections/>}/>
          <Route path='/notifications' element={<MyNotifications/>}/>
          <Route path='/myjobs' element={<Myjobs/>}/>
          <Route path='/message' element={<Messages/>}/>
      </Routes>
    </div>
  )
}

export default App
