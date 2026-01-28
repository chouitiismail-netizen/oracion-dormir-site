import HomeClient from '../components/HomeClient';
import { getSpiritualPages } from '../lib/content';
import { getHomePageSchemas } from '../lib/schema';

export default function HomePage() {
  const allPages = getSpiritualPages();
  const schemas = getHomePageSchemas();

  return (
    <>
      {/* JSON-LD Structured Data */}
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HomeClient allPages={allPages} />
    </>
  );
}
