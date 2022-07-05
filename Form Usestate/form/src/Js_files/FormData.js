import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css_files/Style.css';

function FormData() {

    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [age,setAge] = useState("");

    const [spanEmail , setSpanEmail] = useState();
    const [spanName , setSpanName] = useState();
    const [spanAge , setSpanAge] = useState();
    const [spanNumber, setSpanNumber] = useState();

    const [search,setSearch] = useState('');
    const [spanSearch , setSpanSearch] = useState();

    const [isEdit , setEdit] = useState(false);
    const [isEdit1 , setEdit1] = useState('');

    const [list , setList] = useState([]);

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
    
        const obj = {name:name , 
            age :age ,
            email:email ,
            number:number
        };

        if(name && email && age && number && isEdit)
        {
            const updatedObject = list.map((user,ind) =>
            
                ind===isEdit1?obj:user
                // console.log(ind + user)
            );
            setList(updatedObject);
            setEdit(false);
            setAge('');
            setEmail('');
            setName('');
            setNumber('');
        }
        else
        {
            setList([...list,obj]);

            setAge('');
            setEmail('');
            setName('');
            setNumber('');
        }
    }
    

    const handleDelete =(i)=>
    {
        list.splice(i,1);
        console.log(list);
        setList([...list]);
    }

    const handleEdit = (i) =>{
        
        setEdit(true);
        setEdit1(i);

        const getdata = list[i];
        setName(getdata.name);
        setEmail(getdata.email);
        setAge(getdata.age);
        setNumber(getdata.number);
    }

    const handleSearch = (name) =>{

         if(!name)
        {
            setSpanSearch("**Oops ...! No Record Found");
        }
        else if(name)
        {
            let notSearch = list.some(item => item['name'] === name);
            if(notSearch)
            {
                setList(list.filter(item => item['name'] === name));
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
                            !isEdit ? <button className='btn_submit' onClick={handleSubmit}>ADD</button> :  <button className='btn_submit' onClick={handleSubmit}>UPDATE</button>
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
                            list.map((a,i)=>
                        
                            <tr key={i}>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.number}</td>
                                <td>{a.age}</td>
                                <td>
                                    <button className='btn_edit' onClick={() => handleEdit(i)} >Edit</button>

                                    <button className='btn_delete' onClick={() => handleDelete(i)} >Delete</button>
                                </td>
                            </tr>  
                            )                            
                        }
                    </tbody>
                </table>
            </div>

            <div className='container mb-2 justify-content-between'>
                <div className='row'>
                    <label className='text-center label-search'>-:  Search Record  :- </label>
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
  )
}

export default FormData;