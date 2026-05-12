'use server'
import {sendEmailService} from "@/lib/services/sendMailService";

interface FormMessage {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    message: string;
}

async function sendFeedbackMessageAction(_: unknown, formData: FormData) {
    const formDetails = Object.fromEntries(formData.entries()) as unknown as FormMessage;
    console.log(process.env.GMAIL_USER, process.env.GMAIL_APP_PASSWORD);

    const {first_name, last_name, email, phone_number, message} = formDetails;

    const adminMail = process.env.GOOGLE_TO_EMAIL || "";

    const fullName = last_name ? `${first_name} ${last_name}` : first_name;

    const emailBody = `
           <html>
              <body style="background-color: #f9f9f9; padding: 20px;">
                <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px;">
                  <p>Hello,</p>
                  <p>A new form has been submitted on your website. Details below.</p>
            
                  <div style="margin-top: 10px;">
                    <span style="color: #031F43; font-weight: bold;">Name</span>
                    <p style="color: #3E4F64; margin: 2px 0 10px 0;">${fullName}</p>
                  </div>
            
                  <div style="margin-top: 10px;">
                    <span style="color: #031F43; font-weight: bold;">Email</span>
                    <p style="color: #3E4F64; margin: 2px 0 10px 0;">${email}</p>
                  </div>
            
                  <div style="margin-top: 10px;">
                    <span style="color: #031F43; font-weight: bold;">Phone Number</span>
                    <p style="color: #3E4F64; margin: 2px 0 10px 0;">${phone_number}</p>
                  </div>
            
                  <div style="margin-top: 10px;">
                    <span style="color: #031F43; font-weight: bold;">Message</span>
                    <p style="color: #3E4F64; margin: 2px 0 10px 0;">${message}</p>
                  </div>
            
                </div>
              </body>
            </html>
           `;

    const res = await sendEmailService(
        adminMail,
        "Reach out",
        emailBody
    );

    return {success: res.success};
}

export default sendFeedbackMessageAction;