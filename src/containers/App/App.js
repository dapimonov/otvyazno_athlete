import React, {Component} from 'react';
import './App.scss';
import Bar from "../../components/Bar/Bar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar
          color={'#46A1DA'}
          value={60}
          total={100}
          numbers={true}
          animation={true}
        />
      </div>
    );
  }
}

export default App;
