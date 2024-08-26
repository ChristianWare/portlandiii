import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

// import { datatset, projectId } from "../.env";

const imageBuilder = createImageUrlBuilder({
  projectId: "us728tww",
  dataset: "production",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
