import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        const loading = this.props.loading;

        if(!loading) {
            return `<div></div>`;
        }

        return /*html*/`
        
            <div>
                <img id="loading" src="../../assets/loading.gif">
            </div>
        `;
    }
}

export default Loading;