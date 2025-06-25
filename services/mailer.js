import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "naver",
  host: "smtp.naver.com",
  port: 465,
  auth: {
    user: "msm4167@naver.com",
    pass: process.env.APP_KEY,
  },
});

export const sendMail = async (to, text) => {
  await transporter.sendMail({
    from: "msm4167@naver.com",
    to: "msm4167@naver.com",
    subject: "웹사이트 문의 메일",
    text,
  });
};
