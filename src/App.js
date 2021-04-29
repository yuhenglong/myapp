import React, { Component } from "react";
import Contact from "./Contact";
import AddContact from "./AddContact";

class App extends Component {
  state = {
    contactForm: [
      { name: "大母猪", age: 29, sex: "Female", id: 1 },
      { name: "大宝猪", age: 24, sex: "male", id: 2 },
      { name: "大肥猪", age: 25, sex: "Female", id: 3 }
    ]
  }
  addContact = contact => {
    // console.log(contact);
    contact.id = Math.random();
    let contactForm = [...this.state.contactForm, contact];
    console.log(contactForm);
    this.setState({
      contactForm: contactForm
    })
  }
  handleDel = (id) =>{
    // console.log(id);
    let contactForm = this.state.contactForm.filter(contact => {
      return contact.id !== id;
    });
    this.setState({
      contactForm:contactForm
    })
    console.log(contactForm);
  }
  componentDidMount(){
    console.log("挂载完成");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("更新完成");
    console.log(prevProps);
    console.log(prevState);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>这是我第一个React应用程序</h1>
        </header>
        <Contact handleDel={this.handleDel} contactForm={this.state.contactForm} />
        <AddContact addContact={this.addContact} />
      </div>
    );

  }
}

export default App;
