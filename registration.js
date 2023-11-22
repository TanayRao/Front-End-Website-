
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs=()=>{
 const usernameValue= document.forms['myform']['username'].value;
 console.log(usernameValue);
 const emailValue=document.forms['myform']['email'].value;
 const ageValue=document.forms['myform']['age'].value
 const mobilenoValue=document.forms['myform']['mobileno'].value

  if(usernameValue===''){
    alert('Username is Required');
}

 if(emailValue===''){
  alert('Email is required');
}else if (!isValidEmail(emailValue)){
    alert('Provide a valid email address'); 
}
  if(ageValue.length>0 && ageValue.length<=3){
    document.getElementById("age").innerText('');
}
  else{
   alert('Enter Maximum age of 3 digits');
}

if(mobilenoValue.length==10){
    document.getElementById("mobileno").innerText('');
}
else{
    alert('Mobile No should be of 10 digits');
}
}
  