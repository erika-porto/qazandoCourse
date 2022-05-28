Feature('login');

const { login_page } = inject()


Scenario('login with sucess', ({ I , home_page }) => {

    I.runOnAndroid(()=> {
        console.log('estou no android')
    })

    
     
   login_page.doLogin('teste@teste.com', '123456')
   
    home_page.checkLoginSuccess()
});

Scenario('login with error', ({ I }) => {
     
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
 });


