export class JioApi {
  constructor() {}
  init() {
    //connect to jio gateway using jioConfig object.
  }

  sendSimpleText(recipient: string, message: string): void {
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}
