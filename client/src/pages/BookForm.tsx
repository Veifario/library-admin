import { Formik } from "formik";

import { Button, Container, TextField } from "@mui/material";

import { postBook } from "@/api/services";
import { TBook } from "@/types/books";

const BookForm = () => {
  const fields: {
    field: "title" | "author" | "genre" | "description";
    label: string;
  }[] = [
    {
      field: "title",
      label: "Title",
    },
    {
      field: "author",
      label: "Author",
    },
    {
      field: "genre",
      label: "Genre",
    },
    {
      field: "description",
      label: "Description",
    },
  ];

  const handleSubmitForm = async (values: TBook) => {
    if (Object.values(values).some((value) => value === "")) return;
    await postBook("/books", values);
  };

  return (
    <Container>
      <Formik
        initialValues={{ title: "", author: "", genre: "", description: "" }}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            {fields.map(({ field, label }) => (
              <TextField
                key={field}
                type={field}
                name={field}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[field]}
                variant="outlined"
                label={label}
                {...(values[field] === "" && isSubmitting
                  ? { helperText: "*Required" }
                  : "")}
                error={values[field] === "" && isSubmitting}
                fullWidth
                margin="dense"
              />
            ))}

            <Button sx={{ display: "block" }} variant="outlined" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default BookForm;
