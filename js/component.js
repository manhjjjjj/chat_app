const component = {};
component.Register = `
<div class="container">
    <div class="register-container">
        <div class="title">REGISTER</div>
        <form class="register-form" id ="registerForm">
            <div class="ibt">
                <div class="inputs"><input type="text" placeholder="FirstName" name = "firstName"></div>
                <div class="error"  id="firsName">  </div>
            </div>
            <div class="ibt">
                <div class="inputs"><input type="text" placeholder="LastName" name = "lastName"></div>
                <div class="error" id="lastName">  </div>
            </div>
            <div class="ibt">
                <div class="inputs"><input id="inputs" type="text" placeholder="Email" name = "email"></div>
                <div class="error" id="email">  </div>
            </div>
            <div class="ibt">
                <div class="inputs"><input type="text" placeholder="Password" name = "password"></div>
                <div class="error" id="password"> </div>
            </div>
            <div class="ibt">
                <div class="inputs"><input type="text" placeholder="confirmPassword" name = "confirmPassword"></div>
                <div class="error" id="confirmPassword">  </div>
            </div>
            <div class="btn">
                <button id="registerPage" type="submit">Register</button>
            </div>
            <div class="wh"> Bạn đã có tài khoản? <a id="redirectLogin"> Login Now </a> </div>
        </form>
    </div>
</div>
`
component.LoginPage = `
<div class="container">
    <div class="login-container">
        <div class="title">LOGIN</div>
        <form class="login-form" id ="loginForm">
            <div class="ibt">
                <div class="inputs"><input type="text" placeholder="Email" name = "email"></div>
                <div class="error" id="email">  </div>
            </div>
            <div class="ibt">
                <div class="inputs"><input type="text" placeholder="Password" name = "password"></div>
                <div class="error" id="password"> </div>
            </div>
            <div class="btn">
                <button id="loginPage" type="submit">Login</button>
            </div>
            <div class="wh"> Bạn chưa có tài khoản? <a id="redirectRegister" > Register Now </a> </div>
        </form>
    </div>
</div>
`
component.web = `
<div class="chat-container">
        <div class="webpage">
                <div id = "titleUser">
                     
                </div>
                <div><button><a id = "singout"> Sign out </a></button></div>
        </div>
        <div class="header">
            hello  RA!
        </div>
        <div class="main">
            <div class="conversation-detail">
                <div class="tittle">
                    first conversation
                </div>
                <div class="list-chat" id = "listChat">
                    <div class="message me">
                            
                    </div>
                    <div class="message owner">
                        
                    </div>
                </div>
                <form class = "form-chatapp" id = "valueInputForm">
                    <div class="input-chat">
                        <input placeholder ="message chat!" name = "valueInput">
                    </div>
                    <button class="send" id = "send" type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    </div>
`



