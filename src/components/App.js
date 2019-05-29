import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';
import Loading from './Loading.js';
import airbenderApi from '../services/airbender-api.js';

class App extends Component {

    render() {
        const app = this.renderDOM();
        const main = app.querySelector('main');

        const header = new Header({ search: '', searchPrefix: '' });
        app.insertBefore(header.render(), main);

        const airbenderList = new AirbenderList({ airbenders: [] });
        main.appendChild(airbenderList.render());

        const loading = new Loading({ loading: false });
        main.appendChild(loading.render());

        function getAirbenders() {
            loading.update({ loading: true });

            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            
            let searchPrefix = '';

            if(searchParams.get('allies')) {
                searchPrefix = 'allies';
            } else if(searchParams.get('enemies')) {
                searchPrefix = 'enemies';
            }

            const search = searchParams.get(searchPrefix);
            header.update({ search, searchPrefix });

            airbenderApi.getAirbenders(search, searchPrefix)
                .then(airbenders => {
                    airbenderList.update({ airbenders });
                })

                .finally(() => {
                    loading.update({ loading: false });
                });
        }

        getAirbenders();

        window.addEventListener('hashchange', () => {
            getAirbenders();
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