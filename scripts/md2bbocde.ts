import { md2bbcode } from "@bscotch/steam-bbcode";
const mdList = [
  ["./steam/post.md", "./steam/post.txt"],
  ["./steam/post-zh.md", "./steam/post-zh.txt"],
] as const;

for (const element of mdList) {
  const mdFile = await Bun.file(element[0]).text();
  const bbFile = md2bbcode(mdFile).bbcode;
  Bun.write(element[1], bbFile);
}
