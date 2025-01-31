// import nodemailer from "nodemailer";
// import smtpTransport from "nodemailer-smtp-transport";

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;
// export const transporter = nodemailer.createTransport(
// 	smtpTransport({
// 		host: "smtpout.secureserver.net",
// 		port: 465,
// 		secure: true, // Use SSL
// 		auth: {
// 			user: email,
// 			pass: pass,
// 		},
// 		tls: {
// 			// do not fail on invalid certs
// 			rejectUnauthorized: false,
// 		},
// 	})
// ); 

// export const mailOptions = {
// 	from: "contact@mitochonpixel.co.uk",
// 	to: "contact@mitochonpixel.co.uk",
// };


// src/config/nodemailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your mail service, e.g., 'gmail'
  auth: {
    user: 'contact@mitochonpixel.co.uk', // Replace with your email
    pass: 'obbzqceuxspvakxh', // Replace with your email password or app password
  },
});

const mailOptions = {
  from: 'contact@mitochonpixel.co.uk', // Sender address
  to: 'contact@mitochonpixel.co.uk', // Replace with actual recipient email
};

export { mailOptions, transporter };
