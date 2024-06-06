import { TBook } from "@/types/books";
import { Box, Modal, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import Form from "../Form";
import { putBook } from "@/api/services";

type TProps = {
  isOpen: boolean;
  edditingItem: TBook | null;

  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setBooksList: Dispatch<SetStateAction<TBook[]>>;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const EditModal = ({
  isOpen,
  edditingItem,
  setIsOpen,
  setBooksList,
}: TProps) => {
  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleEditBook = async (values: TBook) => {
    if (edditingItem === null) return;

    await putBook(edditingItem?.id as number, values);
    setBooksList((books) =>
      books.map((book) =>
        book.id === edditingItem.id ? { id: edditingItem.id, ...values } : book
      )
    );

    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {edditingItem === null ? (
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Edition is not available
          </Typography>
        </Box>
      ) : (
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            marginBottom={2}
          >
            Edit <b>{edditingItem?.title}</b>
          </Typography>

          <Form
            formType="edit"
            initValues={edditingItem}
            handleSubmit={handleEditBook}
          />
        </Box>
      )}
    </Modal>
  );
};

export default EditModal;
