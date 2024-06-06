import { Dispatch, SetStateAction } from "react";
import useSWR from "swr";

import { Box } from "@mui/material";

import BookCard from "./BookCard";
import Loader from "../ui/Loader";

import { fetcher } from "@/api/fetchers";

import { TBook } from "@/types/books";

type TProps = {
  booksList: TBook[];

  setBooksList: Dispatch<SetStateAction<TBook[]>>;
  setEdditingItem: Dispatch<SetStateAction<TBook | null>>;
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>;
};
const BoooksList = ({
  booksList,
  setBooksList,
  setEdditingItem,
  setIsEditModalOpen,
}: TProps) => {
  const { isLoading } = useSWR("/books", fetcher);

  if (isLoading) return <Loader />;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      {booksList.map((book: TBook) => (
        <BookCard
          key={book.id}
          bookInfo={book}
          setBooksList={setBooksList}
          setEdditingItem={setEdditingItem}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      ))}
      {booksList.length === 0 && <Box>Oops, your's books list is empty ((</Box>}
    </Box>
  );
};

export default BoooksList;
