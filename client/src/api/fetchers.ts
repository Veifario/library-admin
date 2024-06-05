import { instance } from "./instance";

export const getFetcher = (url: string) =>
  instance.get(url).then((res) => res.data);

export const postFetcher = (url: string) => instance.post(url);
