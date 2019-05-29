import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        return /*html*/`
            <div>
                <img id="loading" src="../../assets/loading.gif">
            </div>
        `;
    }
}

export default Loading;