import chalk from 'chalk';
import clear from 'clear';
import CLI from 'clui';
import dotenv from 'dotenv';

dotenv.config();

import getWebhook from './getWebhook';
import sendRequest from './sendRequest';

const Spinner = CLI.Spinner;
const spinner = new Spinner('Toggling switch...');

const run = async () => {
  clear();
  console.log(chalk.yellow('Home Automation CLI'));

  const { selectedWebhook } = await getWebhook();

  spinner.start();
  const { status, payload } = await sendRequest(selectedWebhook);
  spinner.stop();

  const outputColor = status === 'ok' ? chalk.green : chalk.red;

  console.log(outputColor(`${payload}`));

  process.exit();
};

run();
