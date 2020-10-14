/** @format */

import { storiesOf } from '@storybook/vue';

import Textbox from './Textbox.vue';
storiesOf('Atom - Textbox', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add(
    'Default',
    () => ({
      components: { Textbox },
      template: '<Textbox placeholder="hello" />',
    }),
    {
      notes: 'Example of Default Textbox',
    }
  );
