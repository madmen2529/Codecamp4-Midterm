import React from "react";

class App2 extends React.Component {
  state = {
    lists: [
      { fname: "Gourge", lname: "Longman", age: 13 },
      { fname: "Zofia", lname: "Olsen", age: 20 },
      { fname: "Elif", lname: "Salt", age: 30 },
      { fname: "Kyal", lname: "Hogen", age: 12 }
    ]
  };

  render() {
    return (
      <div>
        <h1>Render Table</h1>
        <div>
          {this.state.lists.map((list, idk) => (
            <p key={idk}>
              {list.fname} {list.lname} {list.age}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default App2;
