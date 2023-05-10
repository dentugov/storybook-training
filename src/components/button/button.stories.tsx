import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ArrowRight, RoundPlus, Delete } from '../icons';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
}

export default meta;

export const Accent: Story = {
  args: {
    children: 'Accent',
    size: 'medium',
    variant: 'accent',
    startIcon: 'None',
    endIcon: 'None'
  },
  argTypes: {
    children: {
      name: 'Text'
    },
    size: {
      name: 'Size'
    },
    variant: {
      name: 'Variant',
    },
    startIcon: {
      name: 'Start icon',
      options: ['None', 'ArrowRight', 'RoundPlus', 'Delete'],
      mapping: {
        None: null,
        ArrowRight: <ArrowRight />,
        RoundPlus: <RoundPlus />,
        Delete: <Delete />,
      },
      control: {
        type: 'select',
        labels: {
          None: 'None',
          ArrowRight: 'Arrow Right',
          RoundPlus: 'Round Plus',
          Delete: 'Delete',
        }
      }
    },
    endIcon: {
      name: 'End icon',
      options: ['None', 'ArrowRight', 'RoundPlus', 'Delete'],
      mapping: {
        None: null,
        ArrowRight: <ArrowRight />,
        RoundPlus: <RoundPlus />,
        Delete: <Delete />,
      },
      control: {
        type: 'select',
        labels: {
          None: 'None',
          ArrowRight: 'Arrow Right',
          RoundPlus: 'Round Plus',
          Delete: 'Delete',
        }
      }
    },
  }
}

export const Primary: Story = {
  args: {
    children: 'Primary',
    size: 'medium',
    variant: 'primary',
    startIcon: 'None',
    endIcon: 'None'
  },
  argTypes: {
    children: {
      name: 'Text'
    },
    size: {
      name: 'Size'
    },
    variant: {
      name: 'Variant',
    },
    startIcon: {
      name: 'Start icon',
      options: ['None', 'ArrowRight', 'RoundPlus', 'Delete'],
      mapping: {
        None: null,
        ArrowRight: <ArrowRight />,
        RoundPlus: <RoundPlus />,
        Delete: <Delete />,
      },
      control: {
        type: 'select',
        labels: {
          None: 'None',
          ArrowRight: 'Arrow Right',
          RoundPlus: 'Round Plus',
          Delete: 'Delete',
        }
      }
    },
    endIcon: {
      name: 'End icon',
      options: ['None', 'ArrowRight', 'RoundPlus', 'Delete'],
      mapping: {
        None: null,
        ArrowRight: <ArrowRight />,
        RoundPlus: <RoundPlus />,
        Delete: <Delete />,
      },
      control: {
        type: 'select',
        labels: {
          None: 'None',
          ArrowRight: 'Arrow Right',
          RoundPlus: 'Round Plus',
          Delete: 'Delete',
        }
      }
    },
  }
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    size: 'medium',
    variant: 'outline',
    startIcon: 'None',
    endIcon: 'None'
  },
  argTypes: {
    children: {
      name: 'Text'
    },
    size: {
      name: 'Size'
    },
    variant: {
      name: 'Variant',
    },
    startIcon: {
      name: 'Start icon',
      options: ['None', 'ArrowRight', 'RoundPlus', 'Delete'],
      mapping: {
        None: null,
        ArrowRight: <ArrowRight />,
        RoundPlus: <RoundPlus />,
        Delete: <Delete />,
      },
      control: {
        type: 'select',
        labels: {
          None: 'None',
          ArrowRight: 'Arrow Right',
          RoundPlus: 'Round Plus',
          Delete: 'Delete',
        }
      }
    },
    endIcon: {
      name: 'End icon',
      options: ['None', 'ArrowRight', 'RoundPlus', 'Delete'],
      mapping: {
        None: null,
        ArrowRight: <ArrowRight />,
        RoundPlus: <RoundPlus />,
        Delete: <Delete />,
      },
      control: {
        type: 'select',
        labels: {
          None: 'None',
          ArrowRight: 'Arrow Right',
          RoundPlus: 'Round Plus',
          Delete: 'Delete',
        }
      }
    },
  }
}
