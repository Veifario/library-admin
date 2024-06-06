import { Dispatch, Fragment, SetStateAction } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { TBook } from "@/types/books";
import { deleteBook } from "@/api/services";

type TProps = {
  bookInfo: TBook;

  setBooksList: Dispatch<SetStateAction<TBook[]>>;
  setEdditingItem: Dispatch<SetStateAction<TBook | null>>;
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function BookCard({
  bookInfo,
  setBooksList,
  setEdditingItem,
  setIsEditModalOpen,
}: TProps) {
  const { author, genre, description, title, id } = bookInfo;

  const handleRemoveBook = async () => {
    if (!id) return;
    await deleteBook(id);
    setBooksList((books) => books.filter((book) => book.id !== id));
  };
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
    setEdditingItem(bookInfo);
  };

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader
        action={
          <Fragment>
            <IconButton aria-label="settings" onClick={handleRemoveBook}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="settings" onClick={handleOpenEditModal}>
              <EditIcon />
            </IconButton>
          </Fragment>
        }
        title={title}
        subheader={author}
      />
      <CardContent>
        <Typography variant="caption" color="text.primary">
          <b>Genre: </b>
          {genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
