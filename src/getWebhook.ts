import inquirer from 'inquirer';

import config from './config';

const getWebhook = () => {
  const { groups, webhooks } = config;
  const choices = [...groups, ...webhooks];
  const selectWebhook = [
    {
      choices,
      message: 'Select what to toggle:',
      name: 'selectedWebhook',
      type: 'list',
    },
  ];
  // @ts-ignore
  return inquirer.prompt(selectWebhook);
};

export default getWebhook;
