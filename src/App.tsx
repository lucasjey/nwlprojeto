import {BrowserRouter, Route, Switch} from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";


import {AuthContextProvider} from './contexts/AuthContext';
import { Room } from './pages/Room';


function App() {
  
  
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/roons/new" component={NewRoom}></Route>
        <Route path="/roons/:id" component={Room}></Route>
      </Switch>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
