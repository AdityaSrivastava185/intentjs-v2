import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>
          IntentJS provides a poweful queueing system which integrates with
          Databases, Redis and AWS SQS.
        </p>
      </div>

      <div className="py-3">
        <p>1. Define a Job.</p>
      </div>

      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`@Injectable()
export class NotificationJob {
  constructor() {}

  @Job('notification')
  async create(data: Record<string, any>) {
    // write your logic here
  }
}`}
        />
      </div>
      <div className="py-3.5">
        <p>2. Dispatch the job.</p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`Dispatch({
  job: 'notification',
  data: {
    email: 'hi@tryintent.com',
    subject: 'Yay! Your payment is succesful!',
  },
});`}
        />
      </div>
      <p className="py-3">3. Run the queue worker.</p>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`node intent queue:work`}
          language="bash"
        />
      </div>

      <p>
        For more information on IntentJS&apos;s queue features, check out the{" "}
        <a href="/docs/queues" className="underline">
          queue documentation
        </a>
        .
      </p>
    </>
  );
}
