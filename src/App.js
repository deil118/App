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
  
   
        <Route path='/dialogs' render={ () =>  <Dialogs
          store={props.store}
            /> } 
            />

          <Route path='/profile' render={ () =>  <Profile 
          profilePage={props.state.profilePage} 
          dispatch={props.dispatch} 
      
          /> } />
        

        </div>
        </div>
        </BrowserRouter>
     

     
  );
}



export default App;
