import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    lists: ["a", "b", "c", "d", "e", "f", "g"]
  };

  render() {
    return (
      <div>
        <h1>Render List</h1>
        <ul>
          {this.state.lists.map((list, idk) => (
            <li key={idk}>{list}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
