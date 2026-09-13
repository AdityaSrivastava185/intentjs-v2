import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>
          Easily integrate storages like{" "}
          <span className="text-primary-color">AWS S3</span>, and
          <span className="text-primary-color"> Local</span> with just a single
          configuration.
        </p>
      </div>
      <div className="py-3">
        <p className="py-2">1. Configure your storage disk in `.env`.</p>

        <FeaturesCodeBlockDemo code={`DEFAULT_STORAGE=s3`} />
      </div>
      <div className="py-3">
        <p className="py-2">
          2. Use the Storage facade to interact with the storage disk.
        </p>

        <FeaturesCodeBlockDemo
          code={`import { Storage } from '@intentjs/core/storage';

// Get a file from the storage disk
await Storage.disk('invoices').get('order_1234.pdf');

// Upload a file to the storage disk
await Storage.disk('invoices').put('order_23456.pdf', bufferContent, {
  mimeType: 'application/pdf',
});`}
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
