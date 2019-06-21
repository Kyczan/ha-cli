import inquirer from 'inquirer';

import config from '../config.json';

const getWebhook = () => {
  const { webhooks } = config;
  const selectWebhook = [
    {
      type: 'list',
      name: 'selectedWebhook',
      message: 'Select what to toggle:',
      choices: webhooks
    }
  ];

  return inquirer.prompt(selectWebhook);
};

export default getWebhook;
