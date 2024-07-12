// Low Level Module

import { vodafoneConfig } from './config';
import { ISMSSender } from './interface/ISMSSender.interface';
import { IVodafoneConfig } from './interface/IVodafoneConfig.interface';
import { VodafoneApi } from './lib/vodafone.lib';

export class VodafoneSMSGateway implements ISMSSender {
  vodafoneInstance = new VodafoneApi();
  constructor() {
    this.connect();
  }
  connect() {
    //connect to vodafone gateway using vodafoneConfig object.
    // this.vodafoneInstance.config({});
  }

  sendMessage(recipient: string, message: string): void {
    this.vodafoneInstance.sendMessage(message, [recipient]);
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}
