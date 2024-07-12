// Low Level Module

import { jioConfig } from './config';
import { ISMSSender } from './interface/ISMSSender.interface';
import { IJioConfig } from './interface/IJioConfig.interface';
import { JioApi } from './lib/jio.lib';

export class JioSMSGateway implements ISMSSender {
  jioInstance = new JioApi();
  constructor() {
    this.connect();
  }
  connect() {
    //connect to jio gateway using jioConfig object.
  }

  sendMessage(recipient: string, message: string): void {
    this.jioInstance.init();
    this.jioInstance.sendSimpleText(recipient, message);
    // console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}
