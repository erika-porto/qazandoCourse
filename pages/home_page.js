const { I } = inject();

module.exports = {

  buttons: {
    save: '~salvar'
  },
  fields: {
    code: {
      ios: '{//XCUIElementTypeTextField[@name="RNE_Input_text-input"]}[1]',
      android: '~codigo'
    },
    nome: {
      ios: '{//XCUIElementTypeTextField[@name="RNE_Input_text-input"]}[2]',
      android: '~aluno'
    },
    search: {
      ios: '{//XCUIElementTypeTextField[@name="RNE_Input_text-input"]}[3]',
      android: '~search',
    }
  },

  registerStudent( code , nome ){
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.nome, nome)
    I.tap(this.buttons.save)
  },

  searchStudent( search , check , code ){
    I.fillField(this.fields.search, search)
    I.runOnIOS('{//XCUIElementTypeOther[@name="' + check + '"]}[2]')
    
    I.runOnAndroid('//android.view.ViewGroup[@content-desc="' + code +'"]')
    // I.seeElement('//android.view.ViewGroup[@content-desc="' + code +'"]')
  },
  
  checkLoginSuccess(){
    I.waitForElement(this.buttons.save, 5);
    I.waitForElement(this.buttons.save)
  },

}
