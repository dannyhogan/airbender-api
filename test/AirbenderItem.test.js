const test = QUnit.test;
import AirbenderItem from '../src/components/AirbenderItem.js';
import airbenders from './airbenders.js';

QUnit.module('Airbender item');

test('Creates correct dom for airbender item', assert => {
    //arrange
    const airbender = airbenders[0];

    //act
    const item = new AirbenderItem({ airbender });
    const renderedItem = item.renderTemplate();
    //assert
    assert.htmlEqual(renderedItem, `
    <li>
        <h1>46th Earth King</h1>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441">
    </li>`
    );
});