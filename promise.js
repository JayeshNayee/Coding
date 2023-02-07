// Using Promise*****************************************
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register end");
      resolve("Sucess");
    }, 3000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("Error while sending e-mail");
      console.log("Email end");
      resolve();

    }, 6000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login end");
      resolve();
    }, 3000);
  })

}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user data end");
      resolve();
    }, 3000);
  })
}
function displayUserData() {
  return new Promise((resolve, rejecet) => {
    setTimeout(() => {
      console.log("Display user data");
      resolve();
    }, 3000);

  });

};

//   register()
//   // resolve
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   // rejecet 
//   .catch((err)=>{
// console.log(Error)
//   })
//   console.log("Other application work");

//Using -Async/await*****************************************


async function authenticate() {
  try {
   const messeage = await register();
                await sendEmail();
                await login();
                await getUserData();
                await displayUserData();

                console.log(messeage);
  }
  catch (err) {
    console.log(err);
    throw new Error();
  }
}
authenticate().then(()=>{
  console.log("All Set");
}).catch((err)=>{
  console.log(err);
})

console.log("Other Application work !!");

