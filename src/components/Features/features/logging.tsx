import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>
          Authenticating users is as simple as adding an authentication
          middleware to your Laravel route definition:
        </p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo />
      </div>
      <div className="py-3.5">
        <p>
          Once the user is authenticated, you can access the authenticated user
          via the Auth facade:
        </p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo />
      </div>
      <p className="py-3">
        Of course, you may define your own authentication middleware, allowing
        you to customize the authentication process.
      </p>
      <p>
        For more information on Laravel&apos;s authentication features, check
        out the{" "}
        <a href="#" className="underline">
          authentication documentation
        </a>
        .
      </p>
    </>
  );
}
