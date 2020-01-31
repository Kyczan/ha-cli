const turnOnWebhooks = [
  {
    name: 'Hall on',
    value: 'hall_on',
  },
  {
    name: 'Bedroom on',
    value: 'bedroom_on',
  },
  {
    name: 'Bedroom lamp on',
    value: 'bedroom_lamp_on',
  },
  {
    name: 'Kitchen on',
    value: 'kitchen_on',
  },
  {
    name: 'WC on',
    value: 'wc_on',
  },
  {
    name: 'Living room on',
    value: 'living_on',
  },
  {
    name: 'Living room lamp on',
    value: 'living_lamp_on',
  },
];

const turnOffWebhooks = [
  {
    name: 'Hall off',
    value: 'hall_off',
  },
  {
    name: 'Bedroom off',
    value: 'bedroom_off',
  },
  {
    name: 'Bedroom lamp off',
    value: 'bedroom_lamp_off',
  },
  {
    name: 'Kitchen off',
    value: 'kitchen_off',
  },
  {
    name: 'WC off',
    value: 'wc_off',
  },
  {
    name: 'Living room off',
    value: 'living_off',
  },
  {
    name: 'Living room lamp off',
    value: 'living_lamp_off',
  },
];

const webhooks = [...turnOnWebhooks, ...turnOffWebhooks];
webhooks.sort((a, b) => (a.value > b.value ? 1 : -1));

const config = {
  groups: [
    {
      name: 'All off',
      value: turnOffWebhooks,
    },
    {
      name: 'All on',
      value: turnOnWebhooks,
    },
  ],
  webhooks,
};

export default config;
