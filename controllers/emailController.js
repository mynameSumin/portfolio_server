import { sendMail } from "../services/mailer.js";

export const sendEmail = async (req, res) => {
  const { email, message } = req.body;
  try {
    await sendMail(email, message);
    res.status(200).send("메일 전송 성공");
  } catch (err) {
    res.status(500).send("메일 전송 실패");
    console.error(err);
  }
};
