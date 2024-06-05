import useSWR from "swr";

import { Box } from "@mui/material";

import BookCard from "./BookCard";
import Loader from "../ui/Loader";

import { getFetcher } from "@/api/fetchers";

import { TBook } from "@/types/books";

const BoooksList = () => {
  const { data: booksList, isLoading } = useSWR("/books", getFetcher);

  if (isLoading) return <Loader />;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {booksList.map((book: TBook) => (
        <BookCard bookInfo={book} />
      ))}
    </Box>
  );
};

export default BoooksList;
