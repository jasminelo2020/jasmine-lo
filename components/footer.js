class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            * {
                font-family: Comfortaa;
                color:#333;
                text-decoration: none;
            }

            footer {
                color: #333;
                background: #fff;
                bottom: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 20px;
                padding-right: 20px;
            }

            .copyright {
                flex: 1;
                justify-content: flex-start;
                font-size: 10px;
            }

            .contact {
                flex: 1;
                justify-content: flex-end;
                font-size: 10px;
            }

            .contact li {
                list-style: none;
            }

            .contact li a:hover{
                color:#bcbaba;
            }
        </style>
        <footer>
            <nav class="copyright">
                <p>&copy; 2025 jasmine lo. all rights reserved.</p>
            </nav>
            <nav class="contact">
                <li class="footer"><a href="contact.html">contact</a></li>
            </nav>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);