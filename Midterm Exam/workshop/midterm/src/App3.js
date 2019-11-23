import React from "react";

class App3 extends React.Component {
  rand_number = () => parseInt(Math.random() * 200);
  state = {
    lists: [
      {
        fname: "Gourge",
        lname: "Longman",
        age: 13,
        link: "https://picsum.photos/id/" + this.rand_number() + "/400/300"
      },
      {
        fname: "Zofia",
        lname: "Olsen",
        age: 20,
        link: "https://picsum.photos/id/" + this.rand_number() + "/400/300"
      },
      {
        fname: "Elif",
        lname: "Salt",
        age: 30,
        link: "https://picsum.photos/id/" + this.rand_number() + "/400/300"
      },
      {
        fname: "Kyal",
        lname: "Hogen",
        age: 12,
        link: "https://picsum.photos/id/" + this.rand_number() + "/400/300"
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Render Posts</h1>
        <div>
          {this.state.lists.map((list, idk) => (
            <div className="row mt-2" key={idk}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={list.link}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    {list.fname} {list.lname}
                  </p>
                  <p className="card-text">some text {idk + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App3;
