import { Resend } from "resend";

const resend =
new Resend(
process.env.RESEND_API_KEY
);

export async function sendDriftEmail(

email:string,

title:string,

description:string

){

await resend.emails.send({

from:
"alerts@sentinelasm.com",

to:email,

subject:title,

html:`

<h1>
Security Drift Detected
</h1>

<p>
${description}
</p>

`

});

}