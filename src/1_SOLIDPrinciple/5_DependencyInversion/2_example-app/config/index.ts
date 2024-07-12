import { IJioConfig } from '../interface/IJioConfig.interface';
import { IVodafoneConfig } from '../interface/IVodafoneConfig.interface';

export const jioConfig: IJioConfig = {
  hostname: 'https://jio.com/sms-gateway',
  port: 5000,
  apiKey: 'x32jfu-bjdjk3-fhdks-3493nnwj',
  maxRetry: 3,
  maxRecipients: 100,
};

export const vodafoneConfig: IVodafoneConfig = {
  hostname: 'sock://10.100.34.10',
  port: 3010,
  username: 'some-user',
  password: 'some-passowrd',
  licenseKey: 'ABDS-EFG-HIJK-LM-NOPQRS',
  autoRetry: true,
};
