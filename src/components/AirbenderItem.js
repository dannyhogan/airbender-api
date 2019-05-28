import Component from './Component.js';

class AirbenderItem extends Component {
    renderTemplate() {
        const airbender = this.props.airbender;

        return /*html*/`
            <li>
                <h1>${airbender.name}</h1>
                <img src="${airbender.photoUrl}">
            </li>
        `;
    }
}

export default AirbenderItem;