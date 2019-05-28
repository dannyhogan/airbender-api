import Component from './Component.js';

class App extends Component {

    render() {
        const app = this.renderDOM();

        return app;
    }
    
    renderTemplate() {
        return /*html*/`
            <div>
                <main>Hello</main>
            </div>
        `;
    }
}

export default App;