import React from 'react';
import { Provider } from 'react-redux';
import CourseList from './components/CourseList';

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CourseList/>
      </Provider>
     
    </div>
  );
}

export default App;
