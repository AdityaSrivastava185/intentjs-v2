import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>
          Easily integrate caches like{" "}
          <span className="text-primary-color">Redis</span>,{" "}
          <span className="text-primary-color">KeyDB</span>,{" "}
          <span className="text-primary-color">Dice</span>,{" "}
          <span className="text-primary-color">Memcached</span> and more, with
          just a single configuration.
        </p>
      </div>
      <div className="py-3">
        <p className="py-2">1. Configure your cache store in `.env`.</p>

        <FeaturesCodeBlockDemo code={`DEFAULT_CACHE=dicedb`} />
      </div>
      <div className="py-3">
        <p className="py-2">
          2. Use the cache facade to interact with the cache store.
        </p>

        <FeaturesCodeBlockDemo
          code={`import { Cache } from '@intentjs/core/cache';

// Set a value in the cache
await Cache.store().set('book_name', 'Shoe Dog');

// Get the cached value
const cachedValue = await Cache.store().get('key');`}
        />
      </div>

      <p>
        For more information on IntentJS&apos;s cache features, check out the{" "}
        <a href="#" className="text-primary-color underline">
          documentation
        </a>
        .
      </p>
    </>
  );
}
