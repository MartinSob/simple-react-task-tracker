import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import TaskTracker from './pages/TaskTracker';
import ReduxTest from './pages/ReduxTest';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <TaskTracker></TaskTracker>
        </div>
        <div className="container">
          <ReduxTest></ReduxTest>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
