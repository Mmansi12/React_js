import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css_files/Style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function FormAPI() {
  let formDataSchema = yup.object().shape({
    fname: yup.string().required("** FirstName is Required..!"),
    lname: yup.string().required("** LaststName is Required..!"),
    email: yup
      .string()
      .required("** Enter Valid Email..!")
      .email("** Invalid Email..!"),
    mobile: yup
      .string()
      .required("**Enter Valid Mobile Number")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Invalid phone number"
      ),
    age: yup.number().required("**Age is required..!").positive().integer(),
    city: yup.string().required("**Plz Selected..!"),

    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  let [fname, setfName] = useState("");
  let [lname, setlName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [age, setAge] = useState("");
  let [city, setCity] = useState("");

  let [val, setVal] = useState([]);
  let [btnAdd, setBtnadd] = useState('ADD');
  let [edit, setEdit] = useState();
  let [search,setSearch] = useState("");

  const obj = {
    fname: fname,
    lname: lname,
    email: email,
    mobile: mobile,
    age: age,
    city: city,
  };

  const handleEdit =(i) =>{
    setBtnadd('UPDATE');
    setEdit(i);
    const getdata = val[i];
    setfName(getdata.fname);
    setEmail(getdata.email);
    setAge(getdata.age);
    setMobile(getdata.mobile);
    
  }

  const handleDelete =(i) =>{
    val.splice(i,1);
    setVal([...val]);
  }

  const handleSearch = (name) =>{
    setSearch(name);
    val.filter((item) =>{
      setVal(...val.values(item).includes(name))
    })
  }
  return (
    <>
      <div>
        <h1 className="text-center">Signup</h1>
        <Formik
          initialValues={{
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            age: "",
            city: "",
          }}
          validationSchema={formDataSchema}
          onSubmit={(values,{resetForm}) => {
            setfName(values.fname);
            setlName(values.lname);
            setEmail(values.email);
            setMobile(values.mobile);
            setAge(values.age);
            setCity(values.city);

            setVal([...val, values]);
            console.log(val);

            resetForm({values:''});
           
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="row g-0">
                <label>FirstName :- </label>
                <Field
                  name="fname"
                  type="text"
                  placeholder="enter your firstname"
                />
                {errors.fname && touched.fname ? (
                  <span>{errors.fname}</span>
                ) : null}
              </div>
              <div className="row g-0">
                <label>LastName :- </label>
                <Field
                  name="lname"
                  type="text"
                  placeholder="enter your lastname"
                />
                {errors.lname && touched.lname ? (
                  <span>{errors.lname}</span>
                ) : null}
              </div>
              <div className="row g-0">
                <label>Email :- </label>
                <Field
                  name="email"
                  type="text"
                  placeholder="enter your email"
                />
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}
              </div>
              <div className="row g-0">
                <label>Mobile No :- </label>
                <Field
                  name="mobile"
                  type="text"
                  placeholder="enter your number"
                />
                {errors.city && touched.mobile ? (
                  <span>{errors.mobile}</span>
                ) : null}
              </div>
              <div className="row g-0">
                <label>Age :- </label>
                <Field name="age" type="number" />
                {errors.age && touched.age ? <span>{errors.age}</span> : null}
              </div>
              <div className="row g-0">
                <label>City :-</label>
                <Field name="city" as="select">
                  <option value="" disabled selected>
                    -- Select City --
                  </option>
                  <option value="surat">Surat</option>
                  <option value="vapi">Vapi</option>
                  <option value="valsad">Valsad</option>
                  <option value="navsari">Navsari</option>
                </Field>
                {errors.age && touched.city ? <span>{errors.city}</span> : null}
              </div>

              <div className="row g-0 btn_row justify-content-center mt-4">
                <button type="submit" className="btn_submit" >
                  {btnAdd}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              <th>EMAIL</th>
              <th>MOBILE</th>
              <th>AGE</th>
              <th>CITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
            val.map((item, i) => {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>
                      <button className='btn_edit' onClick={() => handleEdit(item.i)} >Edit</button>
                      <button className='btn_delete' onClick={() => handleDelete(item.i)} >Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='container mb-2 justify-content-between'>
                <div className='row'>
                    <label className='text-center label-search'>-:  Search Record  :- </label>
                </div> 
                <div className='row justify-content-center align-items-center'>
                    <div className='col-8'>
                        <input className='search' placeholder='Search Record By Name' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                        <span id="valSearch">{}</span>

                    </div>
                    <div className='col-4 text-center'>
                        <button className='btn_search ' onClick={() => handleSearch()} >SEARCH</button>
                    </div>
                </div>
            </div>

      <div className='container'>
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
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.number}</td>
              <td>{val.age}</td>
            </tr>  
          </tbody>
        </table>
      </div>       
    
    </>
  );
}
export default FormAPI;
