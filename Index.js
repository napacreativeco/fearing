'use strict';

var TestButton = require('./Components/Test.js');

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return e(
      <TestButton />
    );
  }
}

const domContainer = document.querySelector('#react-test');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));