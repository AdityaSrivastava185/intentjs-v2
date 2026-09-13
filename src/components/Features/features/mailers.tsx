import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>
          Intent comes with a mailer integrated which you can use to quickly
          send e-mails to your users without even writing a single line of html.
        </p>
      </div>
      <div className="py-3.5">
        <p>
          You can use the inbuilt MailMessage class to build your emails
          programmatically.
        </p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`const mail = MailMessage.init()
  .greeting('Hello admin')
  .line('One of your invoices #12345 has been paid!')
  .action('Check invoice', 'https://tryintent.com')
  .line('Please let us know if you are facing any issue!')
  .subject('INVOICE PAID: #12345');`}
        />
      </div>
      <div className="py-3.5">
        <p>
          Once the mail is generated, you can now quickly send it your users.
        </p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`
          Mail.init()
  .to('hi@tryintent.com') // OR .to(['id1@email.com', 'id2@email.com'])
  .send(mail);
`}
        />
      </div>
      <p>
        For more information on IntentJS&apos;s mailing features, check out the{" "}
        <a href="/docs/mailers" className="underline">
          mailer documentation
        </a>
        .
      </p>
    </>
  );
}
