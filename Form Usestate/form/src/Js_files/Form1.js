import React,{useState} from "react";
import '../Css_files/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var cnt="";
function Form1(){
    const [name ,setName] = useState(' ');
    const [email ,setEmail] = useState(' ');
    const [age , setAge] = useState(' ');
    const [mobile ,setMobile] = useState(' ');
    const data = {name,email,age,mobile};
    const [btn ,setbtn] = useState(true);
    
    const [list ,setList] = useState([]);

    const[search,setsearch]=useState([]);
    const [newid ,editnewid] = useState('');

    const Submitform =(e) =>{
        e.preventDefault();
        if(cnt == '' || cnt == 0)
        {
            setList([...list,data]);   
        }
        else
        {
            list.map((elem , index) =>{
                if(newid == index)
                {
                    elem.name = data.name;
                    elem.email = data.email;
                    elem.age = data.age;
                    elem.mobile = data.mobile;
                    cnt=0;
                    setbtn(true); 
                }
                return elem;
            })
        }
        setName(' ');
        setEmail(' ');
        setAge(' ');
        setMobile(' ');
    }
    const del =(id) =>{
        list.splice(id,1);
        setList([...list]);
      }
    
    // const del =(id) =>{
    //     const newdltlist = list.filter((elem ,index)=>{
    //         return index !== id;
    //     });
    //     setList(newdltlist);
    // }
    const insert =(id)=>{
        cnt++;
        editnewid(id);
        setName(list[id].name);
        setEmail(list[id].email);
        setAge(list[id].age);
        setMobile(list[id].mobile);
        setbtn(false);
    }
    return(
        <>
        <form onSubmit={Submitform}>
            <div className="container">
                <div className="row g-0">
                    <label>Name :-</label><br></br>
                    <input type={'text'} name="name" id="name" placeholder="Enter your name" value={name} onChange={(e) =>setName(e.target.value) }></input>
                </div>
                <div className="row g-0">
                    <label>Email :-</label><br></br>
                    <input type={'text'} name="email" id="email" placeholder="Enter your gmail" value={email} onChange={(e) =>setEmail(e.target.value) }></input>
                </div>
                <div className="row g-0">
                    <label>Age :-</label><br></br>
                    <input type={'number'} name="age" id="age" placeholder="Enter your age" value={age} onChange={(e) =>setAge(e.target.value)} ></input>
                </div>
                <div className="row g-0">
                    <label>Mobile No :-</label><br></br>
                    <input type={'tel'} name="mobile" id="mobile" placeholder="Enter your mobile number" value={mobile} onChange={(e) =>setMobile(e.target.value)}></input>
                </div>
                <div className="row g-0 justify-content-center mt-3">
                    {
                      btn ? <button className="btn_submit d-inline-block" type="submit">ADD</button> : <button className="btn_submit" type="submit">UPDATE</button>
                    }
                </div>
            </div>
        </form>  
            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            list.map((a ,index)=>
                        
                            <tr key={a.id}>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.age}</td>
                                <td>{a.mobile}</td>
                                <td>
                                    <button className='btn_edit' onClick={() =>insert(index)} >Edit</button>

                                    <button className='btn_delete' onClick={() =>del(index)} >Delete</button>
                                </td>
                            </tr>  
                            )                            
                        }
                    </tbody>
                </table>
            </div>
            {/* <div className="container">
                <input type='text' className='search' value={search} onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search for Data...'></input>
                    
                <table>
                {
                    list.map((m,index) =>{
                        if(m.name == search || m.email == search || m.age == search || m.mobile == search)
                        {
                            return(
                                <tr>
                                    <td>{m.name}</td>
                                    <td>{m.email}</td>
                                    <td>{m.age}</td>
                                    <td>{m.mobile}</td>
                                </tr>
                            )
                        }
                    })
                }
                </table>   
            </div> */}
 
                    
        </>    
    

    );
}
export default Form1;