import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
console.log(process.env.EMAIL);
export const transporter = nodemailer.createTransport(
	smtpTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true, // Use SSL
		auth: {
			user: email,
			pass: pass,
		},
		tls: {
			// do not fail on invalid certs
			rejectUnauthorized: false,
		},
	})
);

export const mailOptions = {
	from: email,
	to: "sukhvantsingh2@gmail.com",
};
