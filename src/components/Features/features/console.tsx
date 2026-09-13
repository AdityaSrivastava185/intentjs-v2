import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>It has never been easy to build CLI scripts in your application.</p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`@Command('hello')
export class HelloWorldCommand {
  async handle() {
    _cli.info('Hello there!');
    return;
  }
}`}
        />
      </div>
      <div className="py-3.5">
        <p>Now, you can simply run the command by running:</p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo code={`node intent hello`} />
      </div>
      <p className="py-3">
        You can also pass your own arguments, options, and customise it as per
        your need. For more information on Intent&apos;s console commands, check
        out the{" "}
        <a href="/docs/console" className="underline text-primary-color">
          console documentation
        </a>
        .
      </p>
      <p></p>
    </>
  );
}
