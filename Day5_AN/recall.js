function submitform(submit,db){
    var [dbname,comment]=db()
    console.log(dbname,comment);
    
      console.log("db name is",submit);
  }
  function database(){
      dbname="SECE"
      return [dbname,"data stored successfully"]
      console.log("From ")
  }
  submitform("form is submitted",database)
  
  
  function submitform(submit,isformvalid){
    if(isformvalid){
        console.log("field validated successfully" )
        console.log(submit);
    }
    else{
        console.log("field validated failed" )
        console.log("form submission unsuccessful");
    }

  }
  function formvalidation(){
email="sece@sece.ac.in"
password="938898"
if (email==="sece@sece.ac.in"&& password) {
    return true
}  
}
  submitform("form submitted successfully",formvalidation)