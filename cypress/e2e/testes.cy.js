/// <referance types= "cypress"/>

describe("Criando cenario de teste do site Inatel", ()=>{

    it("Caso de teste: Aceitando cookies e LGPD", ()=>{
      let info = Cookie()
    })
    
    it("Caso de teste: Acessando a página do estudante",()=>{
    let info = Cookie()
    let info2 = Estudante()
    })
    
    it("Caso de teste: Acessando a página do Portal da Graduação",()=>{
      let info3 = Portal()
      })

      it("Caso de teste: Acessando a página sobre Santa Rita do Sapucaí", ()=>{
        let info = Cookie()
        cy.get('#dropbtn > .fa').click()
        cy.get(':nth-child(1) > .scroll-link').click()
        cy.get('.backComImgFaixa6 > .wrap1396 > .wrapCont > .flexBoxGeral > .flexCol2 > .flexFaixas-col2 > p > .btn').click()
        cy.get('.wrapSobrepoeDestaque > :nth-child(1) > .SJ-MB-15').should("contain.text", "Santa Rita")
    })

    it("Caso de teste: Acessando a página sobre Pesquisa e Inovação", ()=>{
        let info = Cookie()
        cy.get('#compartilhamosIdeias > .align-items-center > :nth-child(1) > .flexFaixas-col2 > p > .btn').click()
        cy.visit('https://inatel.br/pesquisador/')
        cy.get('.IconBox1-Pesquisa').should("have.text", "MESTRADO E DOUTORADO")
    })
    it("Caso de teste: Acessando a página sobre Notícias e Eventos futuros", ()=>{
        let info = Cookie()
        cy.get('.btn-verdeFundo').click()
        cy.visit('https://inatel.br/eventos/')
        cy.get('.wrap1200-padding-25 > .SJ-FZ-21').should("have.text", "EVENTOS")
    })
    
    function Cookie(){
      let horas = new Date().getHours().toString()
      let minutos = new Date().getMinutes().toString()
      let segundos = new Date().getSeconds().toString()
      
      cy.visit('https://inatel.br/home/')
      cy.get('#contract-1 > .policyMessage > .actionUser > .acceptCookie').click() //Apertando o botão do cookie
      cy.get('.modal-footer > .btn').click() //Apertando aceitar no LGPD
      cy.get('#contactar').should("contain.text", "Conheça o Inatel") //Verifica se tem o texto Conheça o inatel
      return
    }
    
    function Estudante(){
      cy.get('#dropbtn > .fa').click()
      cy.get('.ma-menu > :nth-child(1) > :nth-child(6) > a').click()
      cy.get('.col-sm-12 > .SJ-FZ-16').should("contain.text", "FORMAÇÃO COMPLEMENTAR")
    }
    
    function Portal(){
      let horas = new Date().getHours().toString()
      let minutos = new Date().getMinutes().toString()
      let segundos = new Date().getSeconds().toString()
      cy.visit("https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico")
      cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_tbMatricula').type(horas)
      cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_Password').type(horas+minutos+segundos)
      cy.get('#ctl00_Corpo_TabAcessoLogin_TabAluno_LogOn_LoginButton').click()
      cy.get('#ctl00_Corpo_lblErro').should("contain.text", '')
    }
    })