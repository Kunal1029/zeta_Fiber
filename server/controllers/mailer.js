import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import ENV from "../config.js";

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ENV.EMAIL, // Gmail address
    pass: ENV.PASSWORD, // Gmail app password
  },
});

// Initialize Mailgen
const MailGenerator = new Mailgen({
  // theme: "default",
  theme: "cerberus",
  product: {
    name: "kunal Shivhare",
    link: "https://ks.com", // Your company link
  },
});

/** POST: http://localhost:8080/api/registerMail 
 * @param: {
 *  "username" : "example123",
 *  "userEmail" : "admin123",
 *  "text" : "",
 *  "subject" : "",
 * }
 */
export const registerMail = async (req, res) => {
  const { username, userEmail, text, subject } = req.body;
  console.log(req.body, " Mailer.js");

  // Body of the email using Mailgen
  let email = {
    body: {
      name: username,
      intro: text || "Welcome to Daily Tuition! We're very excited to have you on board.",
      outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  // Generate HTML
  let emailBody = MailGenerator.generate(email);

  // Message object
  let message = {
    from: ENV.EMAIL,
    to: userEmail,
    subject: subject || "Signup Successful",
    html: emailBody, // Use the generated HTML here
  };

  // Send mail
  const sendMail = async (message) => {
    try {
      await transporter.sendMail(message);
      console.log("Email sent successfully!");
      return { success: true, message: "Email sent successfully" };
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "Failed to send email", error };
    }
  };

  const result = await sendMail(message);

  if (result.success) {
    return res.status(200).send(result.message);
  } else {
    return res.status(500).send(result.message);
  }
};

// more effective mail designs are below


// import Mailgen from "mailgen";

// // Example 1: Default theme
// const defaultMailGenerator = new Mailgen({
//   theme: "default",
//   product: {
//     name: "Daily Tuition",
//     link: "https://daily-tuition.com",
//     logo: "https://daily-tuition.com/logo.png", // Optional logo
//     copyright: "© 2024 Daily Tuition. All rights reserved.",
//     social: {
//       facebook: "https://facebook.com/dailytuition",
//       twitter: "https://twitter.com/dailytuition",
//       linkedin: "https://linkedin.com/company/dailytuition",
//     },
//   },
// });

// // Example 2: Cerberus theme
// const cerberusMailGenerator = new Mailgen({
//   theme: "cerberus",
//   product: {
//     name: "Kunal Shivhare",
//     link: "https://kunalshivhare.com",
//     logo: "https://kunalshivhare.com/logo.png",
//     copyright: "© 2024 Kunal Shivhare. All rights reserved.",
//   },
// });

// // Example 3: Neutral theme with more details
// const neutralMailGenerator = new Mailgen({
//   theme: "neutral",
//   product: {
//     name: "My Awesome Service",
//     link: "https://myawesomeservice.com",
//     logo: "https://myawesomeservice.com/logo.png",
//     copyright: "© 2024 My Awesome Service. All rights reserved.",
//     social: {
//       instagram: "https://instagram.com/myawesomeservice",
//       github: "https://github.com/myawesomeservice",
//     },
//   },
// });
