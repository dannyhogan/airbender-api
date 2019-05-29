import Component from './Component.js';

class AirbenderItem extends Component {

    renderTemplate() {
        const airbender = this.props.airbender;

        return /*html*/`
            <li class="airbender-item">
                <h1>${airbender.name}</h1>
                <img src="${airbender.photoUrl}">
                <section>
                    <a href="#allies=${airbender.name}">Allies</a>
                    <a href="#enemies=${airbender.name}">Enemies</a>
                </section>
            </li>
        `;
    }
}

export default AirbenderItem;