import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "943e6da8f72b52",
    pass: "04b81235c94c08"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Wandyer Silva <wandyer.s@gmail.com>',
      subject,
      html: body
   });
  }
}
