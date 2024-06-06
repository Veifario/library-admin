import { Container } from "@mui/material";

import { postBook } from "@/api/services";

import { TBook } from "@/types/books";
import Form from "@/components/Form";

const BookForm = () => {
  const handleSubmitForm = async (values: TBook) => {
    await postBook(values);
  };

  return (
    <Container>
      <Form formType="add" handleSubmit={handleSubmitForm} />
    </Container>
  );
};

export default BookForm;
