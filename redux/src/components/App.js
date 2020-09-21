import React,{ Component } from 'react'
 
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <button onClick={() => this.props.handleClick()}>INC: { this.props.hogehoge }</button>
 
      </div>
    );
  }
}