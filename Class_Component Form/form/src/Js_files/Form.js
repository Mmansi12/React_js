import React,{Component} from 'react'
import '../Css_files/Style.css';

class Form extends React.Component {
  letterNumber =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    constructor()
    {
      super();
      this.state ={
        name : "",
        email : "",
        mobileNo: "",
        age: "",
        list : [],

        isedit :false,
        edit : "",

        spanName : "",
        spanEmail : "",
        spanNumber : "",
        spanAge : "",
        }
        
    }
    handleSubmit = () =>{

        if(this.state.name === "")
        {
          this.setState({spanName: "**plz enter your valid name"});
          return false;
        }
        else if(this.state.name.length <=2 || this.state.name.length >=20)
        {
          this.setState({spanName: "**Length should be in between 2 to 20"});
          return false;
        }
        else if(/\d/.test(this.state.name))
        {
          this.setState({spanName: "Name shouldn't contain any number"});
          return false;
        }
        else{
          this.setState({spanName: ""});
        }

      if(this.state.email === ""){
        this.setState({spanEmail: "**plz enter valid email"});
        return false;
      }
      else if(!this.letterNumber.test(this.state.email)){
        this.setState({spanEmail: "**plz enter valid email"});
        return false;
      }
      else{
        this.setState({spanEmail: ""});
      }

      if(this.state.mobileNo === ""){
        this.setState({spanNumber: "**plz enter valid Mobile number"});
        return false;
      }
      else if(this.state.mobileNo.length < 10 || this.state.mobileNo.length >10){
        this.setState({spanNumber: "**Mobile number shuold be only 10 digits"});
        return false;
      }
      else if(isNaN(this.state.mobileNo)){
        this.setState({spanNumber: "**Mobile number shuold be only digits"});
        return false;
      }
      else{
        this.setState({spanNumber: ""});
      }

      if(this.state.age === ""){
        this.setState({spanAge: "**plz enter your age"});
        return false;
      }
      else if(this.state.age <=1 || this.state.age >=100){
        this.setState({spanAge: "**Age should be between in 1 to 100"});
        return false;
      }
      else{
        this.setState({spanAge: ""});
      }
      
      const data ={
        name : this.state.name,
        email : this.state.email,
        mobileNo : this.state.mobileNo,
        age : this.state.age,
      };

      if (
        this.state.name &&
        this.state.email &&
        this.state.mobileNo &&
        this.state.age && 
        this.state.isedit 
      ){

        const updatedObject = this.state.list.map((user,ind) =>
            ind === this.state.edit ? data : user
        );
        this.setState.list({list : updatedObject});
        this.setState.edit({isedit : false});
        this.setState.name({name : ''});
        this.setState.email({email : ''});
        this.setState.mobileNo({mobileNo : ''});
        this.setState.age({age : ''});
      }
      else{
        this.setState({ list: [...this.state.list, data] });
  
        this.setState({ name: "" });
        this.setState({ email: "" });
        this.setState({ mobileNo: "" });
        this.setState({ age: "" });
      }
    }

    
    //   if(this.state.isedit){
    //     const updatedObject = this.state.list.map((user,ind) =>
    //         ind === this.state.edit ? data : user
    //     );
    //     this.setState.list({list : updatedObject});
    //     this.setState.edit({isedit : false});
    //     this.setState.name({name : ''});
    //     this.setState.email({email : ''});
    //     this.setState.mobileNo({mobileNo : ''});
    //     this.setState.age({age : ''});
    //   }
    //   else{
    //     this.setState({ list: [...this.state.list, data] });
  
    //     this.setState({ name: "" });
    //     this.setState({ email: "" });
    //     this.setState({ mobileNo: "" });
    //     this.setState({ age: "" });
    //   }
    // }
    handleDelete = (index) =>{
      this.state.list.splice(index,1);
      this.setState({list: [...this.state.list]});
    } 

    handleEdit =(index) =>{
      this.setState({isedit : true});
      this.setState({edit : index});

      const getdata = this.state.list[index];
      this.setState({name : getdata.name});
      this.setState({email : getdata.email});
      this.setState({mobileNo : getdata.mobileNo});
      this.setState({age : getdata.age});

    }
  render() { 
    return (
      <>
        <div className='container'>
            <div className='row g-0'> 
              <label>Name :</label><br></br>
              <input type={"text"}
              name="name" id="name" 
              placeholder="Please Enter Your UserName" 
              onChange={(e) => this.setState({ name: e.target.value })} 
              value={this.state.name}
              ></input><br></br>
              <span id="valName">{this.state.spanName}</span>
            </div>
            <div className='row g-0'> 
              <label>Email :</label><br></br>
              <input
                type={"text"}
                name="email"
                id="email"
                placeholder="Please Enter Your Email"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
              ></input><br></br>
              <span id="valEmail">{this.state.spanEmail}</span>
            </div>
            <div className='row g-0'> 
              <label>Mobile No:</label><br></br>
              <input
                type={"text"}
                name="number"
                id="number"
                placeholder="Please Enter Your Contact Number"
                onChange={(e) => this.setState({ mobileNo: e.target.value })}
                value={this.state.mobileNo}
              ></input><br></br>
              <span id="valNumber">{this.state.spanNumber}</span>
            </div>
            <div className='row g-0'> 
              <label>Age :</label><br></br>
              <input
                type={"text"}
                name="age"
                id="age"
                placeholder="Please Enter Your Age"
                onChange={(e) => this.setState({ age: e.target.value })}
                value={this.state.age}
              ></input><br></br>
              <span id="valAge">{this.state.spanAge}</span>
            </div>
        </div>

          <div className="row btn_row g-0 justify-content-center mt-3">
          {
             !this.state.isedit ? <button className="btn_submit" onClick={() => this.handleSubmit()}>
              ADD
            </button> :
            <button className="btn_submit" onClick={() => this.handleSubmit()}>
              UPDATE
            </button>
          }  
          </div>

          <div className="container">
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>MOBILE</th>
                  <th>AGE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
                {
                  this.state.list.map((item,index) =>{
                    return(
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobileNo}</td>
                          <td>{item.age}</td>
                          <td>
                            <button className='btn_edit' onClick={() => this.handleEdit(index)} >Edit</button>
                            <button className='btn_delete' onClick={() => this.handleDelete(index)} >Delete</button>
                          </td>
                        </tr>
                      )
                    })
                }
            </table>
          </div>  
      </>
    )
  }
}




export default Form
