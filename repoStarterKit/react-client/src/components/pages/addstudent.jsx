import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';


//styling part
const main = {
  width: '400px',
  height: '150px',
  display: '-webkit-flex',
  display: 'flex',
  marginBottom: '-50px',
  marginLeft: '7%'
};

const header = {
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '40px',
  fontFamily: 'Lobster'
};

const number = {
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '25px',
  marginRight: '20px'
};


const input = {
  padding: '10px 10px 10px 10px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  color: 'black',
  fontSize: '15px',
  border: '2px solid black',
  borderRadius: '15px'
};
//the style for the button Sign Up
const button = {
  padding: '5px',
  // display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  marginTop: '20px',
  fontSize: '20px',
  borderRadius: '50px',
  fontFamily: 'Lobster'
};

class addstudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 1,
      studentName: '',
      
      loggedIn: true
    };
  }

  home() {
    window.location.href = window.location.origin + '/';
  }

  onWrite1(e) {
    this.setState({
      level: 1 * e.target.value
    });
  }
 
    onWrite2(e) {
        this.setState({ studentName: e.target.value })

    }




  //  addStudent (studentName) {
  // console.log("testing")
  //           axios({
  //               method: 'POST',
  //               url: '/addstudent',
  //               data:JSON.stringify({ studentName: this.state.studentName, level: this.state.level }),
  //               headers: { 'Content-Type': 'application/json' }
  //           })
  //               .then((res) => {
             
  //                   window.location.reload();
  //               }).catch((err) => {
  //                console.log(err)
  //               })
  //       }
 addStudent(studentName) {
    console.log("salsabeel")
    $.ajax({
      type: 'POST',
      url: '/addstudent',
     data:JSON.stringify({ studentName: this.state.studentName, level: this.state.level }),
       dataType: "json",
      //when success do this
      success: function(res) {
        console.log(res)
       
      },
      error: function(res) {
        alert('Failed send this data please try agian');
      }
    });
  }
    
 
  // // 
  // addStudent ()  {
  // 	console.log("soso")
  //       axios.post('/addstudent',{ studentName: this.state.studentName, studentLevel: this.state.level })
  //           .then(() => {
  //               window.location.reload();
  //           })
  //           .catch((err) => {
  //               console.log(err)
  //           })
  //   }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 style={header}>
          Pairing System<br />
        </h2>
        <div1 style={main}>
          <h3 className="column" style={number}>
            level(1-5):
            <input
              label="Level (1-5)"
              type="number"
              value={this.state.level}
              onChange={this.onWrite1.bind(this)}
              placeholder="Number"
              style={input}
            />
          </h3>
          <h3 style={number}>
            Full name:
            <input
              value={this.state.studentName}
              onChange={this.onWrite2.bind(this)}
              placeholder="Fullname"
              style={input}
            />
          </h3>
         
          </div1>
       
        <button onClick={() => this.addStudent(this.state.studentName)} style={button}>
          Add student
        </button>

        <button onClick={this.home.bind(this)} style={button}>
          Back to Home
        </button>
      </div>
    );
  }
}

export default addstudent;