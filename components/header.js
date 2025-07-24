class Header extends HTMLElement {
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

            header {
                position: sticky;
                top: 0;
                background: #fff;
                color: #333;
                padding: 1rem 0;
                text-align: center;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 20px;
                padding-right: 20px;
            }

            header .title {
                font-weight: 100;
            }

            nav {
                display: flex;
                position: relative;
                white-space: nowrap;
            }

            header nav ul li a:hover{
                color:#bcbaba;
            }

            /* header nav ul li:hover{
                text-decoration:underline;
                color:#555;
            } */

            .nav-left {
                flex: 1;
                justify-content: flex-start;
            }

            #capsule-items{
                position: relative;
            }

            #dropdown-items {
                display: none;
                position: absolute;
                font-size: 11px;
                animation: animateToBottom .3s;
            }
            
            #capsule-items:hover #dropdown-items {
                display: block;
            }

            @keyframes animateFromBottom {
                from {
                transform: translate3d(0, 10px, 0);
                opacity: 0
                }
                to {
                transform: translate3d(0, 0, 0);
                opacity: 1
                }
            }

            @keyframes animateToBottom {
                from {
                transform: translate3d(0, -5px, 0);
                opacity: 1
                }
                to {
                transform: translate3d(0, 0, 0);
                opacity: 1
                }
            }

            .title {
                text-align: center;
                /* flex: 0 1 auto; */
                flex-grow: 1; 
                margin: 0;
            }

            .nav-right {
                flex: 1;
                justify-content: flex-end;
            }

            nav ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: center;
            }

            nav ul li {
                margin: 0 15px;
            }

            nav ul li a {
                color: #333;
                text-decoration: none;
            }
        </style>
        <header>
            <nav class="nav-left">
                <ul>
                    <li id="capsule-items"><a href="interests.html">interests</a>
                        <ul id="dropdown-items">
                            <li><a href="fashion.html">fashion</a></li>
                            <li><a href="food.html">food</a></li>
                            <li><a href="friends.html">friends</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <h1 class="title"><a href="index.html">jasmine lo</a></h1>
            <nav class="nav-right">
                <ul>
                    <li><a href="projects.html">projects</a></li>
                    <!-- <li><a href="about.html">about</a></li> -->
                    <li><a href="resume.html">resume</a></li>
                </ul>
            </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);