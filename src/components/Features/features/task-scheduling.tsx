import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>
          IntentJS offers a modern, code-first approach to scheduling tasks in
          your nodejs apps.
        </p>
      </div>

      <div className="py-3">
        <p>
          1. Define a schedule inside any of your `app/boot/sp/console#schedule`
          file.
        </p>
      </div>

      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`Schedule.call(() => {
    const count = db.users.count();
    console.log('total number of users ===', count);
}).dailyAt('13:00').run();`}
        />
      </div>
      <div className="py-3.5">
        <p>2. Run the scheduler.</p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`node intent schedule:work`}
          language="bash"
        />
      </div>
      <p className="py-3">
        For more information on IntentJS&apos;s task scheduling features, check
        out the{" "}
        <a href="/docs/task-scheduling" className="underline">
          task scheduling documentation
        </a>
        .
      </p>
    </>
  );
}
