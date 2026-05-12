export const googleEmailConfig = {
    email: process.env.GMAIL_USER || "",
    password: process.env.GMAIL_APP_PASSWORD || "",
    app_name: process.env.APP_NAME || "",
    to_email: process.env.GOOGLE_TO_EMAIL || ""
};