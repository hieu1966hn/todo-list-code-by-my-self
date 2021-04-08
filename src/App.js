import React, { Components } from "react";



import { v4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
      isDone: false
    }
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    })
  }

  addItem() {
    //create with unique id 
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }

    // copy of current list of items
    const list = [...this.state.list];


    //add new item to list 
    list.push(newItem);


    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
      isDone: false
    })
  }

  deleteItem(id) {
    //copy current of list items
    const list = [...this.state.list];


    //filter out item being delete
    const updateList = list.filter(item => item.id !== id);


    this.setState({
      list: updateList
    })

  }

  lightThought() {
    this.setState({
      isDone: true
    });
    console.log("done", this.state.isDone);

  }

  showTodoList(item, index) {
    if (this.state.isDone === true) {
      return (
        <li className="list-group-item" onClick={() => this.lightThought()} key={item.id} style={{ position: "relative", margin: "auto" }}>
          {item.value}
          {
            document.getElementsByTagName('li')[index].classList.add('lightThought')
          }
          <button className="btn btn-danger" style={{ borderRadius: "5px", position: "absolute", top: "0px", right: "2px" }}
            onClick={() => this.deleteItem(item.id)}
          >
            Delete
                    </button>
        </li>
      )
    }
    return (
      <li className="list-group-item" onClick={() => this.lightThought()} key={item.id} style={{ position: "relative", margin: "auto" }}>
        {item.value}
        <button className="btn btn-danger" style={{ borderRadius: "5px", position: "absolute", top: "0px", right: "2px" }}
          onClick={() => this.deleteItem(item.id)}
        >
          Delete
                    </button>
      </li>
    )
  }

  render() {
    return (
      <div className="App">
        <div style={{textAlign: "center"}}>
          <h1 className="color-red">Add somthing that you wanna talk to your Love today in here 💘💘💘💘  </h1>
          <br></br>
          <div className="container d-flex">
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Type Item here..."
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />


            {(this.state.newItem.trim() === "") ? <button type="submit" className="btn-secondary" style={{ borderRadius: "5px" }}
              onClick={() => this.addItem()} disabled>
              Add
          </button>
              : <button type="submit" className="btn-secondary" style={{ borderRadius: "5px", }}
                onClick={() => this.addItem()}>
                Add
          </button>}

          </div>
          <br></br>
          <ul className="list-group">
            {this.state.list.map((item, index) => {
              return (
                this.showTodoList(item, index)
              )
            })}

          </ul>
        </div>
      </div >
    );
  }
}

export default App;
