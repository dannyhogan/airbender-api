import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <h1>The Last Airbender</h1>
                <h3>Character List</h3>
            </header>
        `;
    }
}

export default Header;