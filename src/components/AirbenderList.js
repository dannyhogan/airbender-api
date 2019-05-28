import Component from './Component.js';
import AirbenderItem from './AirbenderItem.js';

class AirbenderList extends Component {

    render() {
        const list = this.renderDOM();

        const airbenders = this.props.airbenders;
        airbenders.forEach(airbender => {
            const item = new AirbenderItem({ airbender });
            list.appendChild(item.render());
        });

        return list;
    }
    renderTemplate() {
        return /*html*/`
            <ul id="airbender-list">
            </ul>
        `;
    }
}

export default AirbenderList;