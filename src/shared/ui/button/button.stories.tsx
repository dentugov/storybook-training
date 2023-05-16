import type { Meta, StoryObj } from '@storybook/react';
import { GoIcon } from 'shared/icons';
import { Button } from './button';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Button> = {
  title: 'HTC Design/BUTTONS/Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    args: { sort: 'alpha' }
  },
  argTypes: {
    label: {
      name: 'Text',
      description: 'Text of the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      name: 'Size',
      description: 'Defines the size of the button.',
      options: ['small', 'large', undefined],
      control: { type: 'radio' },
      table: {
        type: { summary: 'undefined | "small" | "large"' },
        defaultValue: { summary: 'undefined', detail: 'the button appears with the default size' },
      },
    },
    text: {
      name: 'Tertiary',
      description: 'Tertiary buttons are displayed as textual elements.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'When disabled is present, the element cannot be edited and focused.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    outlined: {
      name: 'Outline',
      description: 'Outline buttons display a border without a background initially.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    icon: {
      name: 'Icon',
      control: 'boolean'
    },
    iconPos: {
      name: 'Icon Position',
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'radio' },
    }
  }
}

export default meta;

export const Default: Story = {
  render: (args) => {
    const { icon, ...restArgs } = args;

    return (
      icon
        ? <Button icon={<GoIcon />} {...restArgs} />
        : <Button {...args} />
    )
  },
  args: {
    label: 'Default',
    outlined: false,
    text: false,
    disabled: false,
    icon: false
  },

}

export const Outline: Story = {
  args: {
    label: 'Outline',
    outlined: true,
    text: false,
    disabled: false,
  }
}

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    outlined: false,
    text: true,
    disabled: false,
  }
}
