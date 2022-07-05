import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css_files/StyleUserTable.css';
import { v4 as uuidv4 } from 'uuid';


function UserTable2() {
    
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [age,setAge] = useState("");

    const [toggleSubmit , setToggleSubmit] = useState(true);
    const [editItem ,setEditItem] = useState(null);

    const [spanEmail , setSpanEmail] = useState();
    const [spanName , setSpanName] = useState();
    const [spanAge , setSpanAge] = useState();
    const [spanNumber, setSpanNumber] = useState();

    const [search,setSearch] = useState();
    const [record , setRecord] = useState({});
    const [spanSearch , setSpanSearch] = useState();

    const [list , setList] = useState([]);

    let letterNumber =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const handleSubmit = (e) =>
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

        if(number === "")
        {
            setSpanNumber("**Please Enter valid Mobile number");
            return false;
        }
        else if(number.length <10 || number.length > 10)
        {
            setSpanNumber("**Mobile number should be 10 digits");
            return false;
        }
        else if(isNaN(number))
		{
            setSpanNumber("**Mobile number should only contain digits");
			return false;
		}
		else
		{
            setSpanNumber("");
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
    
        if(name && email && age && number && !toggleSubmit)
        {
            setList(
                list.map((elem) =>{
                    if(elem.id === editItem)
                    {
                        return {...elem,name:name , age:age , email:email , number :number}
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setEditItem(null);

            setAge('');
            setEmail('');
            setName('');
            setNumber('');
        }
        else{
            const data = {id:uuidv4(),name , email,number,age};
            setList((ls)=>[...ls,data]);
            setAge("");
            setEmail("");
            setName("");
            setNumber("");
        }
             
    }

    const handleEdit = (id) =>{
        let newEditItem = list.find((elem) =>{
            return elem.id === id;
        });
        console.log(newEditItem);
        setToggleSubmit(false);

        setAge(newEditItem.age);
        setEmail(newEditItem.email);
        setName(newEditItem.name);
        setNumber(newEditItem.number);

        setEditItem(id);

        setSpanAge('');
        setSpanEmail('');
        setSpanName('');
        setSpanNumber('');

    }

    const handleDelete = (index) =>{
        
        const updatedList = list.filter((elem) =>{
            return index !== elem.id;
        });
        setList(updatedList);

        setSpanAge('');
        setSpanEmail('');
        setSpanName('');
        setSpanNumber('');
    }

    const handleSearch = () =>{

        // if(!search)
        // {
        //     setSpanSearch(" **Oops !...No Record Found ");
        //     console.log("no record");
        // }
        // else
        // {
        //     let searchRecord = list.find((elem) =>{
        //         if(elem.name === search)
        //         {
        //             return elem;
        //         }
        //         return elem.name === search;
        //         setSpanSearch('');
        //     });           
        //     setSearch('');
        //     setSpanSearch('');
        //     setRecord(searchRecord);        
        // }

        if(!search)
        {
            setSpanSearch("**Oops ...! No Record Found");
        }
        else if(search)
        {
            let notSearch = list.some(item => item['name'] === search);
            if(notSearch)
            {
                setList(list.filter(item => item['name'] === search));
                setSpanSearch('');
                setSearch('');
            }
           else if(!notSearch)
           {
                setSpanSearch("**Oops ...! there is no record that you'have entered");
                setSearch('');
           }
        }
        
    }

    console.log(record);
    
  return (
        <>
            <div className='container'>
                    <div className='row g-0'>
                        <label>Name :</label><br></br>
                        <input type={'text'} name='name' id='name' placeholder='Please Enter Your UserName' value={name} onChange={(e) => setName(e.target.value)}></input>
                        <span id="valName">{spanName}</span>
                    </div>
                    <div className='row g-0'>
                        <label>Email :</label><br></br>
                        <input type={'text'} name='email' id='email' placeholder='Please Enter Your Email-Address' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <span id="valEmail">{spanEmail}</span>
                    </div>
                    <div className='row g-0'>
                    <label>Mobile No. :</label><br></br>
                        <input type={'text'} name='number' id='number' placeholder='Please Enter Your Contact number' value={number} onChange={(e) => setNumber(e.target.value)}></input>
                        <span id="valNumber">{spanNumber}</span>
                    </div>
                    <div className='row g-0'>
                        <label>Age :</label><br></br>
                        <input type={'number'} name='age' id='age' placeholder='Please Enter Your Age' value={age} onChange={(e) => setAge(e.target.value)}></input>
                        <span id="valAge">{spanAge}</span>
                    </div>
                    <div className='row btn_row g-0 justify-content-center'>
                        {
                            toggleSubmit ? <button className='btn_submit' onClick={handleSubmit}>ADD</button> :  <button className='btn_submit' onClick={handleSubmit}>UPDATE</button>
                        }
                    </div>
            </div>
            

            {/* SHOW DATA (TABLE) */}

            

            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            list.map((a)=>
                        
                            <tr key={a.id}>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.number}</td>
                                <td>{a.age}</td>
                                <td>
                                    <button className='btn_edit' onClick={() => handleEdit(a.id)} >Edit</button>

                                    <button className='btn_delete' onClick={() => handleDelete(a.id)} >Delete</button>
                                </td>
                            </tr>  
                            )                            
                        }
                    </tbody>
                </table>
            </div>
                    
            
            {/* SEARCH BY NAME */}

            <div className='container mb-2 justify-content-between'>
                <div className='row'>
                    <label className='text-center label-search'>-:  Search Record  :- </label>
                </div> 
                <div className='row justify-content-center align-items-center'>
                    <div className='col-8'>
                        <input className='search' placeholder='Search Record By Name' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                        <span id="valSearch">{spanSearch}</span>

                    </div>
                    <div className='col-4 text-center'>
                        <button className='btn_search ' onClick={() => handleSearch()} >SEARCH</button>
                    </div>
                </div>
            </div>

            {/* SEARCH TABLE */}

            {/* <div className='container'>
                <div className='row'>
                    <h3 className='heading_h3'>SEARCH RECORD LIST</h3>
                </div>
            </div>

            <div className='container'>
                <table className='search-table'>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>{record.name}</td>
                            <td>{record.email}</td>
                            <td>{record.number}</td>
                            <td>{record.age}</td>
                        </tr>  
                    </tbody>
                </table>
            </div> */}

            
        </>
    )
}

export default UserTable2;