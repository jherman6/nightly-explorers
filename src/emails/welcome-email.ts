interface WelcomeEmailProps {
  firstName: string;
}

const COLORS = {
  forestNight: "#0D2A16",
  explorerGreen: "#3E6F39",
  moonbeam: "#F2E8C9",
  amberGlow: "#C47B1F",
  bodyText: "#3a4a3d",
};

/**
 * Renders the welcome email as a self-contained HTML string with inline
 * styles (email clients routinely strip <style> blocks, so every style
 * lives on the tag itself). This is the single source of truth for the
 * welcome email's markup — reuse this function anywhere else the same
 * email needs to be sent or previewed, rather than re-writing the markup.
 */
export function getWelcomeEmailHtml({ firstName }: WelcomeEmailProps): string {
  const safeName = firstName.trim() || "there";

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0; padding:0; background-color:${COLORS.moonbeam}; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.moonbeam}; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px; background-color:#ffffff; border-radius:18px; overflow:hidden;">
            <tr>
              <td style="background-color:${COLORS.forestNight}; padding:36px 40px; text-align:center;">
                <span style="font-family:Georgia,'Times New Roman',serif; font-size:22px; font-weight:700; color:${COLORS.moonbeam}; letter-spacing:0.02em;">
                  🌙 The Nightly Explorers
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:40px 40px 8px 40px;">
                <p style="font-family:Georgia,'Times New Roman',serif; font-size:24px; font-weight:700; color:${COLORS.forestNight}; margin:0 0 18px 0;">
                  Welcome, ${safeName}! 🎉
                </p>
                <p style="font-size:15.5px; line-height:1.7; color:${COLORS.bodyText}; margin:0 0 16px 0;">
                  Thank you for joining The Nightly Explorers. We're so glad you're here.
                </p>
                <p style="font-size:15.5px; line-height:1.7; color:${COLORS.bodyText}; margin:0 0 16px 0;">
                  Our mission is simple: help families build stronger connections, grow positive character traits, and turn ordinary evenings into meaningful traditions — one bedtime story, conversation, and small family challenge at a time.
                </p>
                <p style="font-size:15.5px; line-height:1.7; color:${COLORS.bodyText}; margin:0 0 28px 0;">
                  Your first adventure is on its way — keep an eye on your inbox. We can't wait for your family to dive in.
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:${COLORS.amberGlow}; border-radius:999px;">
                      <a href="https://nightlyexplorers.com" style="display:inline-block; padding:14px 28px; font-size:15px; font-weight:700; color:#2a1604; text-decoration:none;">
                        Visit The Nightly Explorers
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 40px 36px 40px; border-top:1px solid rgba(13,42,22,0.08);">
                <p style="font-size:13px; line-height:1.6; color:rgba(58,74,61,0.65); margin:0;">
                  With warmth,<br />The Nightly Explorers Team
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/** Plain-text fallback — required by most deliverability best practices,
 * and what shows up in clients that can't render HTML. */
export function getWelcomeEmailText({ firstName }: WelcomeEmailProps): string {
  const safeName = firstName.trim() || "there";

  return [
    `Welcome, ${safeName}!`,
    "",
    "Thank you for joining The Nightly Explorers. We're so glad you're here.",
    "",
    "Our mission is simple: help families build stronger connections, grow positive character traits, and turn ordinary evenings into meaningful traditions — one bedtime story, conversation, and small family challenge at a time.",
    "",
    "Your first adventure is on its way — keep an eye on your inbox. We can't wait for your family to dive in.",
    "",
    "With warmth,",
    "The Nightly Explorers Team",
  ].join("\n");
}

export const WELCOME_EMAIL_SUBJECT = "Welcome to The Nightly Explorers";
