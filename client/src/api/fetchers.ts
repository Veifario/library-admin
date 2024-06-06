import { instance } from "./instance";

export const fetcher = (url: string) =>
  instance.get(url).then((res) => res.data);
