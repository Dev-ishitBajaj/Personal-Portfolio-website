import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "0a6je1uo",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skfle47TPxXRFb7aDyqOzeBRolc7OEw7MTzAu2RwzkI37wjYjJ9ZbOdcdnkRnlYSHZG6aATMenhHvkyqtLATcj1qQPPcOd6ZFJN8clomuSclI028rG9QscDfiqlWSkvIcchbw4Jeng86f6rX1y4LVaViUkpKtg3evuipMfb81llURsVSz3ye",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
