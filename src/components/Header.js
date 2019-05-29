import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        let character = this.props.search;
        let type = this.props.searchPrefix;

        if(!type) {
            type = '';
        }

        if(!character) {
            character = 'All Character';
        }

        return /*html*/`
            <header>
                <h1 id="header">The Last Airbender</h1>
                <a href="index.html"><button>Show All Characters</button></a>
                <h3>${character}'s ${type}</h3>
            </header>
        `;
    }
}

export default Header;