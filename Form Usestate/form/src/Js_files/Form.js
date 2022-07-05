import React,{useState} from 'react';
import '../Css_files/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Form (){

    let [name , setName] = useState('');
    let [email , setEmail] = useState('');
    let [mobile , setMobile] = useState('');
    let [age , setAge] = useState('');
    let [list , setList] = useState([]);

    let [spanEmail , setSpanEmail] = useState();
    let [spanName , setSpanName] = useState();
    let [spanAge , setSpanAge] = useState();
    let [spanMobile, setSpanMobile] = useState();

    let [isedit , setEdit] = useState(false);
    let [isedit1 , setEdit1] = useState('');
    let [search , setSearch] = useState('');
    let [spanSearch , setSpanSearch] = useState();


    let letterNumber =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        const handleSubmit = () =>
        {
            if(name === "")
            {
                setSpanName("**Please enter valid username");
                return false;
            }
            else if(name.length <=2 || name.length >=15)
            {
                setSpanName("**Length should be in between 2 to 15");
                return false;
            }
            else if(/\d/.test(name))
            {
                setSpanName("**Name shouldn't contain any number");
                return false;
            }
            else
            {
                setSpanName("");
            }

            if(email === "")
            {
                setSpanEmail( "**Please enter Email");
                return false;
            }
            else if(!letterNumber.test(email))
            {
                setSpanEmail( "**Please enter valid Email ");
                return false;
            }
            else
            {
                setSpanEmail("");
            }

            if(mobile === "")
            {
                setSpanMobile("**Please Enter valid Mobile number");
                return false;
            }
            else if(mobile.length <10 || mobile.length > 10)
            {
                setSpanMobile("**Mobile number should be 10 digits");
                return false;
            }
            else if(isNaN(mobile))
            {
                setSpanMobile("**Mobile number should only contain digits");
                return false;
            }
            else
            {
                setSpanMobile("");
            }

            if(age === "")
            {
                setSpanAge("**Please Enter valid age");
                return false;
            }
            else if(age<=1 || age>=100)
            {
                setSpanAge("**Age should be in between 2 to 100");
                return false;
            }
            else
            {
                setSpanAge("");
            }    
            const obj = {
                name : name,
                email : email,
                mobile : mobile,
                age : age
            }
                if (isedit){
                    const updatedObject = list.map((user,ind) =>
                        ind === isedit1 ? obj : user
                    );
                    setList(updatedObject);
                    setEdit('false')
                    setName('');
                    setEmail('');
                    setMobile('');
                    setAge('');
                }
                else{
                    setList([...list , obj]);
                    setName('');
                    setEmail('');
                    setMobile('');
                    setAge('');
                }        
                
        }
        const handleDelete = (i) =>{
            list.splice(i,1);
            setList([...list]);
        }
        const handleEdit =(i) =>{
            setEdit(true);
            setEdit1(i);

            const getdata = list[i];
            setName(getdata.name);
            setEmail(getdata.email);
            setMobile(getdata.mobile);
            setAge(getdata.age);
        }
        const handleSearch = (nameval) =>{
            setSearch(nameval);
            list.filter((item) =>{
                setList(...list.values(item).includes(nameval))
            })
        }
        
   
      return(
       <>
            <div className='container'>
                <div className='row m-3'>
                    <h2>Sign Up</h2>
                </div>
                    <div className='row g-0'>
                        <label>First Name :-</label><br />
                        <input name='name' type={'text'} placeholder='enter your name' value={name} onChange={(e) =>setName(e.target.value)} /><br />
                        <span id="valName">{spanName}</span>
                    </div>
                    <div className='row g-0'>
                        <label>Email :-</label><br />
                        <input type={'text'} name='email' placeholder='enter your email' value={email} onChange={(e) =>setEmail(e.target.value)} /><br />
                        <span id="valEmail">{spanEmail}</span>
                    </div>
                    <div className='row g-0'>   
                        <label>Mobile No :-</label><br />
                        <input type={'text'} name='mobile' placeholder='enter your mobile number' value={mobile} onChange={(e) =>setMobile(e.target.value)} /><br />
                        <span id="valNumber">{spanMobile}</span>
                    </div>
                    <div className='row g-0'>   
                        <label>Age :-</label><br />
                        <input type={'number'} name='age' placeholder='enter your age' value={age} onChange={(e) =>setAge(e.target.value)} /><br />
                        <span id="valAge">{spanAge}</span>
                    </div>
                    <div className='row g-0 btn_row justify-content-center mt-3'>  
                    {
                        !isedit ? <button className='btn_submit' onClick={handleSubmit}>ADD</button> :  <button className='btn_submit' onClick={handleSubmit}>UPDATE</button>
                    } 
                    </div>
            </div>
       
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>MOBILE</th>
                            <th>AGE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    {
                        list.map((item,i) =>{
                            return(
                                <tr>
                                    <td>{i}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button className='btn_edit' onClick={() => handleEdit(i)} >Edit</button>

                                        <button className='btn_delete' onClick={() => handleDelete(i)} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

            <div className='container mb-2 justify-content-between'>
                <div className='row m-3'>
                    <label className='text-center label-search'>***  Search Record  ***</label>
                </div> 
                <div className='row justify-content-center align-items-center'>
                    <div className='col-10'>
                        <input className='search' placeholder='Search Record By Name' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                        <span id="valSearch">{spanSearch}</span> 
                    </div>
                    <div className='col-2 text-center'>
                        <button className='btn_search ' onClick={() => handleSearch(search)} >SEARCH</button>
                    </div>
                </div>
            </div>
            
      
       </>
   );
}
export default Form