import nodemailer from 'nodemailer';
import { htmlTemplate } from './template';

export async function sendEmail(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.WORK_EMAIL,
    subject: `Portfolio: Message from ${name}.`,
    text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
    html: htmlTemplate({ name, email, message }),
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: any, response: any) => {
      if (error) {
        console.log('error: ', error);
        reject(error);
      } else {
        console.log('Email sent: ' + response);
        resolve(response);
      }
    });
  });
}
