import { instance } from "./instance";

import { TBook } from "@/types/books";

export const postBook = (url: string, book: TBook) =>
  instance.post(url, book);
