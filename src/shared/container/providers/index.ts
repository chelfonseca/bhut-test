import { container } from "tsyringe";

import { SMSTwilioProvider } from "./webhook/implementations/SMSProvider";
import { ISMSProvider } from "./webhook/ISMSProvider";

container.registerInstance<ISMSProvider>(
  "SMSTwilioProvider",
  new SMSTwilioProvider(),
);
