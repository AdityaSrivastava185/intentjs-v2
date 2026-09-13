import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>
          With IntentJS, you can very easily integrate multiple languages into
          your server and send them as per your client&apos;s chosen locale.
        </p>
      </div>
      <div className="py-3">
        <p className="py-2">
          1. Configure your locale strings in `resources/lang` folder.
        </p>

        <FeaturesCodeBlockDemo
          language="json"
          code={`// en.json
{
  "quote": "If your dreams do not scare you, they are already becoming a reality.",
  "apples": "[0] There is no apple|[1,10] There are some apples|[11,*] There are many apples"
}`}
        />
      </div>
      <div className="py-3">
        <p className="py-2">
          2. Use the `__` helper function to retrieve the translated strings.
        </p>

        <FeaturesCodeBlockDemo
          code={`__("quote");
// If your dreams do not scare you, they are already becoming a reality.

transChoice("apples", 10);
// There are some apples`}
        />
      </div>

      <p>
        For more information on IntentJS&apos;s localization features, check out
        the{" "}
        <a href="/docs/localization" className="text-primary-color underline">
          documentation
        </a>
        .
      </p>
    </>
  );
}
