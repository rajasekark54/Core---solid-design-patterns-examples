// Abstract module

export interface ISMSSender {
  sendMessage(recipient: string, message: string): void;
}
