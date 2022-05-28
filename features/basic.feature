Feature: Login
  Eu como usuário
  Gostaria de fazer login na aplicação
  Para acessar o sistema 
  
  Scenario: Login with success
    Given I fill email
    Given I fill password
    When I tap on Entrar    
    Then I see the Salvar button 
