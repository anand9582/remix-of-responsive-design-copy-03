import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  image?: string;
  type?: string;
  robots?: string;
  schema?: object;
}

const SITE_URL = "https://campulse.app";

export default function SEO({
  title,
  description,
  keywords = "",
  path,
  image = "/logo.png", // Put logo inside public/logo.png
  type = "website",
  robots = "index, follow",
  schema,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (
      selector: string,
      attribute: string,
      value: string,
      content: string
    ) => {
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    const canonicalUrl =
      path === "/"
        ? SITE_URL
        : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

    const imageUrl = image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`;

    // Description
    updateMeta(
      'meta[name="description"]',
      "name",
      "description",
      description
    );

    // Keywords
    if (keywords) {
      updateMeta(
        'meta[name="keywords"]',
        "name",
        "keywords",
        keywords
      );
    }

    // Robots
    updateMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      robots
    );

    // Author
    updateMeta(
      'meta[name="author"]',
      "name",
      "author",
      "CamPulse"
    );

    // Open Graph
    updateMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      title
    );

    updateMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );

    updateMeta(
      'meta[property="og:url"]',
      "property",
      "og:url",
      canonicalUrl
    );

    updateMeta(
      'meta[property="og:image"]',
      "property",
      "og:image",
      imageUrl
    );

    updateMeta(
      'meta[property="og:type"]',
      "property",
      "og:type",
      type
    );

    updateMeta(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
      "CamPulse"
    );

    // Twitter
    updateMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image"
    );

    updateMeta(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      title
    );

    updateMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description
    );

    updateMeta(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
      imageUrl
    );

    updateMeta(
      'meta[name="twitter:site"]',
      "name",
      "twitter:site",
      "@CamPulse"
    );

    // Canonical
    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    // JSON-LD Schema
    const existingSchema = document.getElementById(
      "schema-org"
    ) as HTMLScriptElement | null;

    if (schema) {
      if (existingSchema) {
        existingSchema.textContent = JSON.stringify(schema);
      } else {
        const script = document.createElement("script");
        script.id = "schema-org";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    } else if (existingSchema) {
      existingSchema.remove();
    }
  }, [
    title,
    description,
    keywords,
    path,
    image,
    type,
    robots,
    schema,
  ]);

  return null;
}