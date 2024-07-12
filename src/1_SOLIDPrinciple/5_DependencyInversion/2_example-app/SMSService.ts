// High Level Module

import { ISMSSender } from './interface/ISMSSender.interface';

export class SMSService {
  private smsSender: ISMSSender;

  constructor(smsSender: ISMSSender) {
    this.smsSender = smsSender;
  }

  notify(recipient: string, message: string): void {
    this.smsSender.sendMessage(recipient, message);
  }
}
