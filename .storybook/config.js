import { addDecorator, configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

const req = require.context('../src/', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <div style={{ padding: '10px' }}>{story()}</div>);

setDefaults({
  header: false,
  inline: true,
  source: true
});

configure(loadStories, module);
