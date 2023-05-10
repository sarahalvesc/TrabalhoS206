# TrabalhoS206
Repositório criado para o trabalho de qualidade de software
Integrantes: Sarah Alves Chagas e Davi dos Santos Balbino Marcelino

Para acompanhar os testes realizados nesse trabalho, será necessário utilizar algumas ferramentas para quem utiliza o SO Windows:

Instalação do ambiente de desenvolvimento:
Git Bash (Git for Windows - mais leve) https://gitforwindows.org/

Nodejs (node): https://nodejs.org/en/

IDE VSCode (code): https://code.visualstudio.com/ OBS: A escolha da IDE fica a seu critério, essa é apenas uma sugestão.

JDK (java): https://www.oracle.com/java/technologies/javase-downloads.html

Maven (mvn) https://maven.apache.org

Instalação - Cypress (Teste de UI):
Faça a instalação do cypress via linha de comando. Abra o terminal e digite
npm install cypress
Caso não queira utilizar o cypress pelo NPM, pode fazer o download direto do site: https://www.cypress.io/
Link para download direto: https://download.cypress.io/desktop

Basta baixar, extrair, executar o Cypress.exe e apontar para o diretório do projeto desejado na interface do cypress. Utilize a IDE para editar o código.

Comandos úteis cypress:
Criar o diretório inicial e indicar para o node que o diretório é um projeto
npm init

Baixar as dependencias do projeto (caso já tenha baixado o código do git)
npm install

Abrir cypress pela linha de comando:
./node_modules/.bin/cypress open

Rodar specs por linha de comando:
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
