import './App.css';
import store from './components/Store';
import { bugAdded, bugRemoved, bugResolved } from './components/Actions'

function App() {

  // const unsubscribe = store.subscribe(() => {
  //   console.log("Store changed!", store.getState())
  // });

  store.subscribe(() => {
      console.log("Store changed!", store.getState())
    });

  store.dispatch(bugAdded("bug 1"));
  // unsubscribe();
  store.dispatch(bugResolved(1));
  store.dispatch(bugRemoved(1));

  return (
    <div className="App">
      <h1>Redux</h1>
      <p>Watch console for result</p>
    </div>
  );
}

export default App;
