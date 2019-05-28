import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';
import airbenderApi from '../services/airbender-api.js';

class App extends Component {

    render() {
        const app = this.renderDOM();
        const main = app.querySelector('main');

        const header = new Header();
        app.insertBefore(header.render(), main);

        const airbenderList = new AirbenderList({ airbenders: [] });
        main.appendChild(airbenderList.render());

        airbenderApi.getAirbenders()
            .then(airbenders => {
                airbenderList.update({ airbenders });
            });        

        return app;
    }
    
    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;