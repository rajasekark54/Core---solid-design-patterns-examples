import { JioSMSGateway } from './JioSMSProvider';
import { VodafoneSMSGateway } from './VodafoneSMSProvider';
import { SMSService } from './SMSService';
import { ISMSSender } from './interface/ISMSSender.interface';

const jioInstance: ISMSSender = new JioSMSGateway();
const vodafoneInstance: ISMSSender = new VodafoneSMSGateway();

const smsNotificationService1 = new SMSService(jioInstance);
smsNotificationService1.notify('9898909999', 'This is a test message via Jio.');

const smsNotificationService2 = new SMSService(vodafoneInstance);
smsNotificationService2.notify(
  '9898909999',
  'This is a test message via Vodafone.'
);
