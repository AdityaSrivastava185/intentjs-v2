import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>
          Handle the incoming requests with elegance. You don&apos;t need to
          define routes seperately.
        </p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`@Controller('/users')
export class UserController {
  constructor() {}

  @Get('')
  async create() {
    return 'Hello world! This is a GET /users request!';
  }
}`}
        />
      </div>
      <div className="py-3.5">
        <p>
          You can define various methods, apply guards, use middlewares, etc
          inside the controllers.
        </p>
      </div>
      <p>
        For more information on Intent&apos;s controller and routing features,
        check out the{" "}
        <a href="/docs/controllers" className="underline text-primary-color">
          controller documentation
        </a>
        .
      </p>
    </>
  );
}
