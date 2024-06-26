type RowObj = {
  name: string;
  tech: string[];
  date: string;
  progress: number;
  image: string;
};

const tableDataComplex: RowObj[] = [
  {
    name: "Marketplace",
    tech: ["apple", "android", "windows"],
    date: "12.Jan.2021",
    progress: 75.5,
    image:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
  },
  {
    name: "Venus DB PRO",
    tech: ["apple"],
    date: "21.Feb.2021",
    progress: 35.4,
    image:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
  },
  {
    name: "Venus DS",
    tech: ["apple", "windows"],
    date: "13.Mar.2021",
    progress: 25,
    image:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
  },
  {
    name: "Venus 3D Asset",
    tech: ["apple", "android", "windows"],
    date: "24.Jan.2021",
    progress: 100,
    image:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
  },
];
export default tableDataComplex;
