export class VodafoneApi {
  config: any;
  constructor() {

  }
  configure(parameters: any) {
    this.config = parameters;
    //connect to jio gateway using jioConfig object.
  }

  sendMessage(message: string, recipients: string[]): void {
    console.log(`Sending SMS to ${recipients}: ${message}`);
  }
}