class Login {
    static logado
    static matricula
    static nome
    static acesso
    static config
    static endpoint
    static callbackTrue
    static callbackFalse

    static login(callbackTrue, callbackFalse, config = null) {
        if (config) {
            this.config = config
        } else {
            this.config = {
                corBtn: '#048'
            }
        }
        this.callbackTrue = () => {
            callbackTrue()
        }
        this.callbackFalse = () => {
            callbackFalse()
        }
        const fundoLogin = document.createElement('div')
        fundoLogin.setAttribute('id', 'fundoLogin')
        document.body.prepend(fundoLogin)

        const baseLogin = document.createElement('div')
        baseLogin.setAttribute('id', 'baseLogin')
        fundoLogin.appendChild(baseLogin)

        const elementosLogin = document.createElement('div')
        elementosLogin.setAttribute('id', 'elementosLogin')
        baseLogin.appendChild(elementosLogin)

        const campoLogin1 = document.createElement('div')
        campoLogin1.setAttribute('class', 'campoLogin')
        elementosLogin.appendChild(campoLogin1)

        const campoLogin2 = document.createElement('div')
        campoLogin2.setAttribute('class', 'campoLogin')
        elementosLogin.appendChild(campoLogin2)

        const labelUserName = document.createElement('label')
        labelUserName.setAttribute('for', 'fUsername')
        labelUserName.innerHTML = 'Username: '
        campoLogin1.appendChild(labelUserName)

        const fUsername = document.createElement('input')
        fUsername.setAttribute('id', 'fUsername')
        fUsername.setAttribute('type', 'text')
        fUsername.setAttribute('name', 'fUsername')
        campoLogin1.appendChild(fUsername)

        const labelSenha = document.createElement('label')
        labelSenha.setAttribute('for', 'fSenha')
        labelSenha.innerHTML = 'Senha: '
        campoLogin2.appendChild(labelSenha)

        const fSenha = document.createElement('input')
        fSenha.setAttribute('id', 'fSenha')
        fSenha.setAttribute('type', 'password')
        fSenha.setAttribute('name', 'fSenha')
        campoLogin2.appendChild(fSenha)

        const botoesLogin = document.createElement('div')
        botoesLogin.setAttribute('id', 'botoesLogin')

        const btnLogin = document.createElement('button')
        btnLogin.setAttribute('id', 'btnLogin')
        btnLogin.innerHTML = 'Login'
        btnLogin.style.backgroundColor = this.config.corBtn
        btnLogin.addEventListener('click', () => {
            this.verificaLogin()
        })

        const btnCancelar = document.createElement('button')
        btnCancelar.setAttribute('id', 'btnCancelar')
        btnCancelar.innerHTML = 'Cancelar'
        btnCancelar.style.backgroundColor = this.config.corBtn
        btnCancelar.addEventListener('click', () => {
            this.fechar()
        })

        botoesLogin.appendChild(btnLogin)
        botoesLogin.appendChild(btnCancelar)
        elementosLogin.appendChild(botoesLogin)

        const logoLogin = document.createElement('div')
        logoLogin.setAttribute('id', 'logoLogin')
        const img = document.createElement('img')
        img.setAttribute('src', './logo.png')
        img.setAttribute('title', 'CFBCursos')
        logoLogin.appendChild(img)
        baseLogin.appendChild(logoLogin)
    }

    static verificaLogin() {
        const mat = document.getElementById('fUsername').value
        const pas = document.getElementById('fSenha').value
        const endpoint = `https://9736e837-dcc8-4a0e-b38d-61fcce2ebc42-00-1ph3m4i04kmk3.spock.replit.dev/?matricula=${mat}&senha=${pas}`
        fetch(endpoint)
            .then(res => res.json()) // to object
            .then(res => {
                if (res) {
                    this.logado = true
                    this.matricula = mat
                    this.nome = res.nome
                    this.acesso = res.acesso
                    this.callbackTrue()
                    this.fechar()
                } else {
                    this.logado = false
                    this.matricula = null
                    this.nome = null
                    this.acesso = null
                    this.callbackFalse()
                }
            })
    }

    static fechar() {
        const fundoLogin = document.getElementById('fundoLogin')
        fundoLogin.remove()
        const estilo = document.getElementById('estiloLogin')
        estilo.remove()
    }
}

export { Login }