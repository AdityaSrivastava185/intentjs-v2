import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>It&apos;s very easy to create middlewares in your application.</p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`import { HttpMiddleware } from '@intentjs/core/http';
import { MiddlewareNext, Request, Response } from '@intentjs/hyper-express'; 

export class AuthMiddleware extends HttpMiddleware {
  use(req: Request, res: Response, next: MiddlewareNext): void {
    const payload = req.all();
    // your code here.
    next();
  }
}`}
        />
      </div>
      <div className="py-3">
        <p>
          Once the middleware is defined, you can apply to any of the routes
          inside the `http/kernel.ts` file.
        </p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`public routeMiddlewares(configurator: MiddlewareConfigurator): Type<HttpMiddleware>[] {
    configurator
      .use(AuthMiddleware)
      .for(UserController);
  }`}
        />
      </div>
      <p className="py-3">
        Of course, you can exclude routes, apply the middlewares globally,
        allowing you to have full control of it&apos;s application.
      </p>
      <p>
        For more information on middleware feature, check out the{" "}
        <a href="/docs/middlewares" className="underline text-primary-color">
          documentation
        </a>
        .
      </p>
    </>
  );
}
