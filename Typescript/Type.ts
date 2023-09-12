type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (
  x: infer R
) => any
  ? R
  : never;
type Format320 = { urls: { format320p: string } };
type Format480 = { urls: { format480p: string } };
type Format720 = { urls: { format720p: string } };
type Format1080 = { urls: { format1080p: string } };
type BasicVideoData = { urls: { format: string } };
type Video = BasicVideoData & (Format320 | Format480 | Format720 | Format1080);

type Intersected = UnionToIntersection<Video["urls"]>;

// equals to

type IntersectedS = UnionToIntersection<
  | { format320p: string }
  | { format480p: string }
  | { format720p: string }
  | { format1080p: string }
>;

type VideoUrls = {
  name: string;
  url: string;
};

function isFormatAvailable(
  obj: VideoUrls,
  key: string
): key is keyof VideoUrls {
  return key in obj;
}

const videoUrl = isFormatAvailable(
  {
    name: "string",
    url: "string",
  },
  "name"
);
