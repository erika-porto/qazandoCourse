Feature('Students');

const { login_page , home_page } = inject()

Scenario('Add student with success', ({ I }) => {

    const code = require('../utils/code');
    const name = require('../utils/name');

    const codeGenerated = code.getCode();
    const nameGenerated = name.getName();

    login_page.doLogin('teste@teste.com' , '123456')
    home_page.registerStudent( codeGenerated , nameGenerated )
    home_page.searchStudent( nameGenerated , codeGenerated)
});
