import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';
import Loading from './Loading.js';
import airbenderApi from '../services/airbender-api.js';

class App extends Component {

    render() {
        const app = this.renderDOM();
        const main = app.querySelector('main');

        const header = new Header();
        app.insertBefore(header.render(), main);

        const airbenderList = new AirbenderList({ airbenders: [] });
        main.appendChild(airbenderList.render());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        airbenderApi.getAirbenders()
            .then(airbenders => {
                airbenderList.update({ airbenders });
            })

            .finally(() => {
                loading.update({ loading: false });
            });

        return app;
    }
    
    renderTemplate() {
        return /*html*/`
            <div id="app">
                <main></main>
            </div>
        `;
    }
}

export default App;