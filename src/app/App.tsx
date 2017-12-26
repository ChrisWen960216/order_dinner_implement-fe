import * as React from 'react';
import '../static/style/App.less';

const logo: any = require('../static/img/logo.svg');

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
