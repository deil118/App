import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Profile from './components/Profile/Profile';



const App = (props) => {




  return (
   <BrowserRouter>
    <div className='app-wraper' >
        <Header />
        <Navbar />
        <div className='app-wraper-content'>
  

          <Route path='/profile' render={ () =>  <Profile state={props.state.profilePage} /> } />
          <Route path='/dialogs' render={ () =>  <Dialogs state={props.state.dialogsPage} messages={props.state.dialogsPage}/> } />

        </div>
        </div>
        </BrowserRouter>
     

     
  );
}



export default App;
