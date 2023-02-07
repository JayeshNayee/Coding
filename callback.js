<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

</body>
<script>
  // ***************filter
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  // let a2 =  arr.filter(function(a){
  //   return a<5;
  // })
  // console.log(a2);
  // ***************map
  //  map for operation on the Array 
  // let arr= [2,5,6,7];
  // let a = arr.map((value,index)=>{
  //   console.log(value,index);
  //   return value+1;
  // });
  // console.log(a);

  // call back

  function register(callback) {
    setTimeout(()=>{
      console.log("register end");
      callback();
    },3000)
    
  }
  function sendEmail(callback) {
    setTimeout(()=>{
      console.log("Email end");
      callback();
    },2000)
  }
  function login(callback) {
    setTimeout(()=>{
      console.log("Login end");
      callback();
    },4000)
  }
  function getUserData(callback) {
  setTimeout(()=>{
    console.log("Get user data");
    callback();
  },1000)
  }
  function displayUserData(callback) {
    setTimeout(()=>{
    console.log("Display user data");
    callback();
  },1000)
  }
// calling 
  register(function(){
      sendEmail(function(){
            login(function(){
              getUserData(function(){
                displayUserData(function(){
                    console.log("Other application work..");

                });
              });
        
            });
    
      });
  });
  


</script>

</html>