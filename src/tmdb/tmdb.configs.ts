type Quality = "original" | "w500";

export const imagePath = (imgEndpoint: string, quality: Quality = "original") =>
  `https://image.tmdb.org/t/p/${quality}${imgEndpoint}`;
