const view = {};
let dataUsername = '';
view.dataUser = (dataUser) => {
    dataUsername = dataUser;
    console.log(data);
}
view.setScreenActive=(screenName)=>{
    // console.log(screenName);
    switch (screenName) {
        case "registerPage" :
            let app = document.getElementById("app");
            app.innerHTML = component.Register;
            let  registerForm = document.getElementById("registerForm");
            registerForm.addEventListener("submit",(e)=>{
                e.preventDefault();
                // let a = registerForm.FirstName.value;
                // console.log(a);
                const data ={
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                // console.log(data);
                controller.register(data);
            })
            view.setErrorMessage = (id,content)=>{
                document.getElementById(id).innerHTML = content
            }
            document.getElementById("redirectLogin").addEventListener("click",()=>{
                view.setScreenActive("loginPage")
                // console.log("11111",loginPage);
            })
            break;

            case "loginPage" :
            document.getElementById("app").innerHTML = component.LoginPage ;
            let  loginForm = document.getElementById("loginForm");
            let redirectRegister = document.getElementById("loginPage");
            redirectRegister.addEventListener("click",(e)=>{
                e.preventDefault()
                     const data = {
                        email: loginForm.email.value,
                        password: loginForm.password.value,
                    }
                controller.loginPage(data);
            })
            view.setErrorMessage = (id,content)=>{
                document.getElementById(id).innerHTML = content
            }
            document.getElementById("redirectRegister").addEventListener("click",()=>{
                view.setScreenActive("registerPage");
                // console.log(registerPage);
            })
            break;
            case "web":
                document.getElementById("app").innerHTML = component.web;
                document.getElementById("titleUser").innerHTML ="Xin Chào," + dataUsername;
                
                

                document.getElementById("singout").addEventListener("click",()=>{
                    let text = "Do you want to sign out?";
                    if(confirm(text) == true){
                        firebase.auth().signOut()
                    }
                })
                // console.log(value);
                let send = document.getElementById("send");
                // console.log(send);
                send.addEventListener("click",(e)=>{
                    e.preventDefault();
                    let valueInput = document.getElementById("valueInputForm").valueInput.value;
                    console.log("valueInput",valueInput);
                    let message = {
                        owner:"owner",
                        content: valueInput,
                    }
                    let messageFormBot = {
                        owner:"Bot",
                        content: valueInput,
                    }
                    document.getElementById("valueInputForm").valueInput.value = "";
                    // view.messagechat(messageFormBot);
                    // let listChat = document.getElementById("listchat");
                    // listChat.scrollTop = listChat.scrollHeight;
                    var today = new Date();
                    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dateTime = date + " " + time;
                    console.log(dateTime,"00000000000000");
                    let checkMessage = {
                        message:{
                           owner: firebase.auth().currentUser.email,
                           content: valueInput,
                           createdAt: dateTime,
                        }
                    }
                    controller.checkMessage(checkMessage);
                    model.getListMessage();
                    
                    
                    
                    // let checkMessage = {
                    //     message:{
                    //         owner: "owner",
                    //         content: valueInput
                    //     },
                    //     messageFormBot:{
                    //         owner:"Bot",
                    //         content: valueInput
                    //     }
                    // }
                    // controller.checkMessage(checkMessage);
                })
            break;
            
        default:
            break;
    }
}
view.renderListChat = (listChat)=>{ //tham số nhận vào
    console.log("123456789");
    let result = '';
    console.log("firebase.auth().currentUser",firebase.auth().currentUser);
    for (let i = 0; i < listChat.length; i++) {
        if(listChat[i].message.owner == firebase.auth().currentUser.email){
            result += `
                            <div class = "message me" id ="me">
                                <div class="content_nameIcon">
                                     <img class="image_user" src="../image/icon-user.png">
                                </div>
                                <div class="content">
                                    ${listChat[i].message.content}
                                </div>
                                <div class="content_time">
                                    ${listChat[i].message.createdAt}
                                </div>
                            </div>
            `
        }else{
            result += `
                            <div class="message owner">
                                <div class="content_nameIcon">
                                    <img class="image_user" src="../image/icon-user.png">
                                    ${listChat[i].message.owner}
                                </div>
                                <div class="content">
                                    ${listChat[i].message.content}
                                </div>
                                <div class="content_time">
                                    ${listChat[i].message.createdAt}
                                </div>
                            </div>
            `
        }
        document.getElementById("listChat").innerHTML = result;
        // console.log(createElementDiv,"555555555555555");
        
    }



}
