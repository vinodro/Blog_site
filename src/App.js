import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './component/reducer'
import Home from './component/home'
import CheckedOut from './component/SuccessMsg'
import BookedItems from './component/Bookeditem';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import StateUpdate from './component/Stateupdate';

let initialstate=[]

const store = createStore(reducer,initialstate)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/BookedItems' component={BookedItems}/>
            <Route exact path='/checkedout' component={CheckedOut}/>
            <Route path='/' component={Home}/>
          </Switch>
        </Router>
        <StateUpdate/>
      </Provider>

    </div>
  );
}

export default App;
