/** @format */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Input from './Input';
storiesOf('Atom - Input', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add(
    'Default',
    () => ({
      components: { Input },
      template: '<Input @change="action" />',
      methods: { action: action('Changed : Default') },
    }),
    {
      notes: 'Example of Input',
    }
  );
