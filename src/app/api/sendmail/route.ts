import { Resend } from "resend";


const resend = new Resend('re_H15z1Z2Y_GFCPARR5XPsc62XaAp8f5Bc8');

// Email validation function

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const res = await request.json(); 
    if (!isValidEmail(res.email)) {
        throw new Error("Invalid email format");
      }
    await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: res.email,
            subject: 'Welcome invitation from zedops ',
            html: successMailTemplate(res.email)
    });
      
    await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'admin@zedops.com',
            subject: 'Got a new Subscription from zedops site',
            html: adminReceivedMailTemplate(res.email, res.firstName, res.lastName, res.phone, res.message)
        });
    return new Response(
      JSON.stringify({ success:true, message:"mail send successfully to zedops" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
      console.log(error)
    return new Response(
      JSON.stringify({ success: false, message:"please try after some time" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

const successMailTemplate = (email: string) => {
    return ` <div style="background-color: transparent;">  
    <div class="m_6582305671658957918block-grid" style="min-width: 320px; max-width: 600px; word-wrap: break-word; word-break: break-word; margin: 0 auto; background-color: transparent;">
      <div style="border-collapse: collapse; display: table; width: 100%; background-color: transparent;">
        <div class="m_6582305671658957918col" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">
          <div class="m_6582305671658957918col_cont" style="width: 100% !important;">
            <div
              style="
                            border-top: 0 solid transparent;
                            border-left: 0 solid transparent;
                            border-bottom: 0 solid transparent;
                            border-right: 0 solid transparent;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            padding-right: 0;
                            padding-left: 0;
                        "
            >
              <table cellpadding="0" cellspacing="0" role="presentation" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse;" valign="top">
                <tbody>
                  <tr style="vertical-align: top;" valign="top">
                    <td
                      style="word-break: break-word; vertical-align: top; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 20px; text-align: center; width: 100%;"
                      width="100%"
                      align="center"
                      valign="top"
                    >
                      <h1
                        style="
                                                color: #555;
                                                direction: ltr;
                                                font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                                                font-size: 25px;
                                                font-weight: 700;
                                                letter-spacing: normal;
                                                line-height: 120%;
                                                text-align: center;
                                                margin-top: 0;
                                                margin-bottom: 0;
                                            "
                      >
                        <a
                          href="https://track.Appracadabra.co/CL0/https:%2F%2Fdevpishon.Appracadabra.dev/1/01090191209a7945-91b6bcac-46c7-4edb-8aea-9e0d7fe88079-000000/bHd8Eze9phuazvmaFO0gwiqDaFuss6gcX6yEGZp5Yk8=166"
                          style="text-decoration: none; color: #252525;"
                          rel="noopener"
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://track.Appracadabra.co/CL0/https:%252F%252Fdevpishon.Appracadabra.dev/1/01090191209a7945-91b6bcac-46c7-4edb-8aea-9e0d7fe88079-000000/bHd8Eze9phuazvmaFO0gwiqDaFuss6gcX6yEGZp5Yk8%3D166&amp;source=gmail&amp;ust=1722915541782000&amp;usg=AOvVaw2K32y-aV1FgjmHVFawH9w9"
                        >
                          Zedops's build
                        </a>
                      </h1>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="background-color: transparent;">
    <div class="m_6582305671658957918block-grid" style="min-width: 320px; max-width: 600px; word-wrap: break-word; word-break: break-word; margin: 0 auto; background-color: transparent;">
      <div style="border-collapse: collapse; display: table; width: 100%; background-color: transparent;">
        <div class="m_6582305671658957918col" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; background-color:hsl( 81 100% 90%); width: 598px;">
          <div class="m_6582305671658957918col_cont" style="width: 100% !important;">
            <div
              style="
                            border-top: 1px solid #e2e8f0;
                            border-left: 1px solid #e2e8f0;
                            border-bottom: 1px solid #e2e8f0;
                            border-right: 1px solid #e2e8f0;
                            padding-top: 20px;
                            padding-bottom: 20px;
                            padding-right: 20px;
                            padding-left: 20px;
                        "
            >
              <div class="m_6582305671658957918img-container" align="center" style="padding-right: 0; padding-left: 0;">
                <img
                  align="center"
                  border="0"
                  src="https://ci3.googleusercontent.com/meips/ADKq_NaSTxTajeqTTN5eoqlxcI2L2TheXgw5M3AnPvc3R5OjujHRe_LhnFmJLz60dTrq62V8V4MXQxAaZcb8Vpy0fcP42_MsZlvHEmulvlE7E-60agytJ6eN7NWTuvqZ_oWcZnrIHGR2VFvG0PadnZoPJ5m7hCk=s0-d-e1-ft#https://cdn.Appracadabra.com/res/Appracadabra/image/upload/v1651394603889/OyoRi_CVy.png?auto=compress"
                  style="text-decoration: none; height: auto; border: 0; width: 112px; max-width: 100%; display: block;"
                  width="112"
                  class="CToWUd"
                  data-bit="iit"
                />
              </div>
              <div style="color: #4b4b60; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; line-height: 1.2; padding-top: 10px; padding-right: 20px; padding-bottom: 10px; padding-left: 20px;">
                <div style="font-size: 12px; line-height: 1.2; color: #4b4b60; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                  <p style="margin: 0; font-size: 24px; text-align: center; line-height: 1.2; word-break: break-word; margin-top: 0; margin-bottom: 0;">
                    <span style="font-size: 24px;">Thank you for subscribing to our Construction Insights !</span>
                  </p>
                </div>
              </div>
              <div style="color: #4b4b60; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; line-height: 1.5; padding-top: 0; padding-right: 0; padding-bottom: 10px; padding-left: 0;">
                <div style="font-size: 12px; line-height: 1.5; color: #4b4b60; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                  <p style="margin: 0; font-size: 16px; line-height: 1.5; word-break: break-word; text-align: center; margin-top: 0; margin-bottom: 0;">
                    <span style="font-size: 16px;">Stay tuned for valuable insights that can help you stay ahead in the field. </span><span style="font-size: 16px;"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="background-color: transparent;">
    <div class="m_6582305671658957918block-grid" style="min-width: 320px; max-width: 600px; word-wrap: break-word; word-break: break-word; margin: 0 auto; background-color: transparent;">
      <div style="border-collapse: collapse; display: table; width: 100%; background-color: transparent;">
        <div class="m_6582305671658957918col" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">
          <div class="m_6582305671658957918col_cont" style="width: 100% !important;">
            <div
              style="
                            border-top: 0 solid transparent;
                            border-left: 0 solid transparent;
                            border-bottom: 0 solid transparent;
                            border-right: 0 solid transparent;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            padding-right: 0;
                            padding-left: 0;
                        "
            >
              <div style="color: #64748b; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; line-height: 1.2; padding-top: 15px; padding-right: 15px; padding-bottom: 5px; padding-left: 15px;">
                <div style="font-size: 12px; line-height: 1.2; text-align: center; color: #64748b; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                  <p style="margin: 0; line-height: 1.2; word-break: break-word; font-size: 16px; margin-top: 0; margin-bottom: 0;">
                    <span style="font-size: 16px;">Powered by</span>
                  </p>
                </div>
              </div>
              <div class="m_6582305671658957918img-container" 
                align="center" 
                style="background-color:hsl(182, 76%, 14%); width: 152px; margin-left: auto; margin-right: auto; display: flex; align-items: center; justify-content: center; padding: 10px; border-radius: 8px;">
    
              <a href="https://zedops.com" style="outline: 0;" target="_blank">
                 <img
                 src="https://www.zedops.com/images/logo-with-text-svg.svg"
                 alt="Zedops logo"
                 title="Zedops logo"
                style="text-decoration: none; height: auto; border: 0; width: 100%; max-width: 130px; display: block;"
                 class="CToWUd"
                 data-bit="iit"
        />
    </a>
</div>

                <div style="font-size: 1px; line-height: 15px;">&nbsp;</div>
              </div>
              <div style="color: #64748b; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; line-height: 1.2; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px;">
                <div style="font-size: 12px; line-height: 1.2; color: #64748b; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
                  <p style="margin: 0; font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; margin-top: 0; margin-bottom: 0;">
                    <span style="font-size: 14px;">
                      The email was sent to <a href='mailto:${email}' target="_blank">${email}</a>. You are receiving this email because you subscribed up on
                      <a
                        href="https://appracadabra.com"
                        target="_blank"
                        data-saferedirecturl="https://www.google.com/url?q=https://devpishon.Appracadabra.dev&amp;source=gmail&amp;ust=1722915541782000&amp;usg=AOvVaw2F50jcb_25JA8mNDl6c5-w"
                      >
                        https://Zedops.com
                      </a>
                      .
                    </span>
                  </p>
                  <p style="margin: 0; font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; margin-top: 0; margin-bottom: 0;">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
}

const adminReceivedMailTemplate = (email:string, firstName:string, lastName:string, phoneNumber:string, message:string) => {
    return `<div style="margin: 0; padding: 0; background: #fff; text-align: left; font-size: 14px; line-height: 1.4; font-family: 'Helvetica Neue', helvetica, 'Segoe UI', arial, sans-serif; font-weight: 400;">
    <div style="padding: 15px 25px;">
        <table style="background: #fff; margin: 0; padding: 0; border: 0; border-collapse: collapse; border-spacing: 0; width: 100%; max-width: 40em;">
            <tbody>
                <tr>
                    <td>
                        <h3 style="margin: 0; line-height: 1.2; font-size: 1.3em;">You’ve got a new Subscription</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                            <tbody>
                                <tr>
                                    <td style="font-weight: bold; width: 30%; padding: 8px; font-size: 1.1em;">First Name:</td>
                                    <td style="padding: 8px; font-size: 1.1em;">${firstName}</td>
                                </tr>
                                <tr>
                                    <td style="font-weight: bold; width: 30%; padding: 8px; font-size: 1.1em;">Last Name:</td>
                                    <td style="padding: 8px; font-size: 1.1em;">${lastName}</td>
                                </tr>
                                <tr>
                                    <td style="font-weight: bold; width: 30%; padding: 8px; font-size: 1.1em;">Email:</td>
                                    <td style="padding: 8px; font-size: 1.1em;">${email}</td>
                                </tr>
                                <tr>
                                    <td style="font-weight: bold; width: 30%; padding: 8px; font-size: 1.1em;">Phone Number:</td>
                                    <td style="padding: 8px; font-size: 1.1em;">${phoneNumber}</td>
                                </tr>
                                 <tr>
                                    <td style="font-weight: bold; width: 30%; padding: 8px; font-size: 1.1em;">Message:</td>
                                    <td style="padding: 8px; font-size: 1.1em;">${message}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style="margin-top: 15px;">
                            You can get in touch with our new subscriber to welcome them and provide any necessary assistance.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding-top: 20px; border-top: 1px solid #d8d8d8;">
                        <table style="width: 100%; font-size: 12px; color: #6d6d6d;">
                            <tr>
                                <td style="width: 100px; padding: 1em; vertical-align: top;">
                                    <img width="120" alt="Company Logo" src="https://www.zedops.com/images/logo-with-text-svg.svg" />
                                </td>
                                <td style="font-size: 14px; color: #000;">
                                    You can reply to this email <a href="mailto:${email}" target="_blank">${email}</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`
}
