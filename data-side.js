class TagElement extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: "open" })
        this.button = document.querySelector('.hi')
    }

    connectedCallback () {
        this.shadowRoot.innerHTML =`
        Hello World! 
        \n How are you?`
        
    }
}

customElements.define('superb-b', TagElement)