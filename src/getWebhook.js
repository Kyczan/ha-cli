import inquirer from 'inquirer';

import config from '../config.js';

const getWebhook = () => {
  const { groups, webhooks } = config;
  const choices = [...groups, ...webhooks];
  const selectWebhook = [
    {
      type: 'list',
      name: 'selectedWebhook',
      message: 'Select what to toggle:',
      choices
    }
  ];

  return inquirer.prompt(selectWebhook);
};

export default getWebhook;
