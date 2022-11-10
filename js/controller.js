const controller={};
controller.register = (data)=>{
    // console.log("11111",data);
    if(data.firstName==""){
        view.setErrorMessage("firsName","please input FirsName again!");
    }else{
        view.setErrorMessage("firsName","")
    }

    if(data.lastName==""){
        view.setErrorMessage("lastName","please input LastName again!");
    }else{
        view.setErrorMessage("lastName","");
    } 

    if (data.email=="") {
        // console.log("5555",data.email);
        view.setErrorMessage("email","please input Email again!");
    } 
    // else if(data.email != validateEmail){
    //    view.setErrorMessage("email","email khong hop le");
    // } 
    else{
        view.setErrorMessage("email","");
    }

    if (data.password=="") {
        view.setErrorMessage("password","please input Password again!");
    } else if(data.password.length < 6){
        view.setErrorMessage("password","Password must be have mor than 6 charater ");
    } else{
        view.setErrorMessage("password","");
    }

    if (data.confirmPassword=="") {
        view.setErrorMessage("confirmPassword","please input confirmPassword again!");
    } else if(data.confirmPassword !== data.password){
        view.setErrorMessage("confirmPassword","Password does not match please re-enter password!");
    } else{
        view.setErrorMessage("confirmPassword","");
    }
    if(data.firstName !="" && data.lastName!="" && data.email !="" && data.password!="" && data.confirmPassword!=""){
        // console.log("day la data",data);
        model.register(data);
    }
}
controller.loginPage = (data)=>{
    console.log("2222",data);
    if(data.email==""){
        view.setErrorMessage("email","please input email again!");
    } else {
        view.setErrorMessage("email","")
    }
    
    if(data.password==""){
        view.setErrorMessage("password","plaese input password again!");
    } else {
        view.setErrorMessage("password","");
    }
    if(data.email !="" && data.password!=""){
        model.login(data);
    }


    //xu ly 
    // model.login(data)
}


controller.checkMessage = (checkMessage) =>{
    let listChat = document.getElementById("listChat");
    // console.log(checkMessage,"wwwwwwwwwwwwwwwwwwwwww");
    if(checkMessage.message.content != "") {
        // view.messagechat(checkMessage.message); 
        // view.messagechat(checkMessage.messageFormBot); 
        // let listChat = document.getElementById("listChat");  
        listChat.scrollTop = listChat.scrollHeight;
    }
    model.dataSendFirebase(checkMessage);
}




// function validateEmail(data) {
//     console.log("1111111");
//     var re = /\S+@\S+\.\S+/;
//     return re.test(data);
// }
// function checkEmail() {
//     let a= document.getElementById("inputs").value;
//     console.log("66666",validateEmail(a));
//     if(validateEmail(a)==true){
//      console.log("đăng kí thành công!");
//     }else{
//      console.log("email sai định dạng!");
//     }
//  }
 