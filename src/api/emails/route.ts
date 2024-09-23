import { Resend } from 'resend';
import Email from '../../email';

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, surname, message } = await request.json();

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: '',
        subject: 'Message',
        react: Email({ name, surname, message }),
      });
}