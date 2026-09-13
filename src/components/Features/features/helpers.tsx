import { FeaturesCodeBlockDemo } from "../FeaturesCodeBlock";

export default function FeatureDescription() {
  return (
    <>
      <div className="py-3">
        <p>
          Intent comes packed with tons of different helper methods for Arrays,
          Object, Strings and Numbers that you can use to speed up your
          development.
        </p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`const goats = [
  { name: 'Saina Nehwal', sport: 'Badminton' },
  { name: 'Virat Kohli', sport: 'Cricket' },
];

Arr.except(goats, ['*.sport']);
/**
  [{ name: 'Saina Nehwal' }, { name: 'Virat Kohli' }]
*/`}
        />
      </div>
      <div className="py-3.5">
        <p>
          Another example, would be to get the value of a nested key by using
          it&apos;s dot notation inside a nested object.
        </p>
      </div>
      <div className="py-3">
        <FeaturesCodeBlockDemo
          code={`const obj = {
  wishlist: [{ id: 1, name: 'Product 1' }],
  address: { country: { code: 'IN', name: 'India' }, },
};

Obj.get(obj, 'wishlist.0.name'); 
// Product 1

Obj.get(obj, 'address.country.name');
// India`}
        />
      </div>
      <p className="py-3">
        For more information on the various helper methods, check out the{" "}
        <a href="/docs/helpers" className="underline text-primary-color">
          documentation
        </a>
        .
      </p>
    </>
  );
}
