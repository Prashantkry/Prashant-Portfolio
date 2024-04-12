import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const sendMail = async (req, res) => {
  if (req.method !== "POST") {
    return NextResponse.error(new Error("Method not allowed"), { status: 405 });
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.APP_Password,
    },
  });

  const mailOptions = {
    from: {
      name: name,
      address: process.env.USER,
    },
    to: [email],
    subject: subject,
    text: message,
  };

  try {
    const mailSentData = await transporter.sendMail(mailOptions);

    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db("PrashantPortfolio");
    const collection = db.collection("mailData");
    const insertData = await collection.insertOne(mailOptions);
    console.log(insertData, "Email sent and data inserted into database");
  } catch (error) {
    console.error("Error sending email or inserting data:", error);
    return NextResponse.error(new Error("Failed to send email"), {
      status: 500,
    });
  }

  return res.json({ message: "Email Sent" });
};

export default sendMail;
