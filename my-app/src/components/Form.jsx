import { useRef } from "react";

export default function(){
  const getName = useRef(null);
  const getMail = useRef(null);
  const getSubject = useRef(null);
  const getMessage = useRef(null);
 
  const submitHandler =(event) => {
    event.preventDefault();
    console.log("clicked");
    validationHandler();
    getName.current.value = "";
    getMail.current.value = "";
    getSubject.current.value = "";
    getMessage.current.value = "";
  };

  function validationHandler() {
    if(getName.current.value === ""){
      alert("Please enter a name");
    } else if(getMail.current.value === ""){
      alert("Please enter a mail address");
    } else if(getSubject.current.value === ""){
      alert("Please enter a subject");
    } else if(getMessage.current.value === ""){
      alert("Please enter a message");
    }else{
      console.log( 
        `name: ${getName.current.value} 
        mail: ${getMail.current.value} 
        subject: ${getSubject.current.value} 
        message: ${getMessage.current.value}
        `);
    }
  };

  return(
    <form onSubmit={submitHandler}>
      <label htmlFor="name" >name</label>
      <input type="text" id="name" ref={getName}/>
      <label htmlFor="mail">Email</label>
      <input type="text" id="mail" ref={getMail}/>
      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" ref={getSubject}/>
      <label htmlFor="comment"></label>
      <textarea name="" id="comment" cols="30" rows="10" ref={getMessage}></textarea>
      <button >SUBMIT</button>
    </form>
  )
};