import { instance } from "./instance";

import { TBook } from "@/types/books";

export const postBook = (book: TBook) => instance.post("/books", book);

export const deleteBook = (id: number) =>
  instance.delete("/books/:id".replace(":id", String(id)));

export const putBook = (id: number, book: TBook) =>
  instance.put("/books/:id".replace(":id", String(id)), book);
