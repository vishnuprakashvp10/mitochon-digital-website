import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
export const transporter = nodemailer.createTransport(
	smtpTransport({
		host: "smtpout.secureserver.net",
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
	from: "contact@mitochondigital.com",
	to: "contact@mitochondigital.com",
};
