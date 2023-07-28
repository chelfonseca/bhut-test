import { injectable } from "tsyringe";
import { Twilio } from "twilio";
import "dotenv/config";

import { ISMSProvider } from "../ISMSProvider";

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

@injectable()
class SMSTwilioProvider implements ISMSProvider {
  private client: Twilio;

  constructor() {
    this.client = new Twilio(accountSid, authToken);
  }
  async sendSMS(): Promise<void> {
    this.client.messages
      .create({
        from: "+17625256474",
        to: "+5511995418955",
        body: "A new Car register has been created",
      })
      .then((message) => console.log(message.sid));
  }
}

export { SMSTwilioProvider };
