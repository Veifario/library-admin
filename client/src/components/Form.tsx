import { Formik } from "formik";

import { Box, Button, TextField } from "@mui/material";
import { TBook } from "@/types/books";

type TProps = {
  formType: "edit" | "add";

  handleSubmit: (values: TBook) => Promise<any>;

  initValues?: TBook;
};

const Form = ({ formType, handleSubmit, initValues }: TProps) => {
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

  return (
    <Box>
      <Formik
        initialValues={{
          title: initValues?.title || "",
          author: initValues?.author || "",
          genre: initValues?.genre || "",
          description: initValues?.description || "",
        }}
        onSubmit={(values) => {
          if (Object.values(values).some((value) => value === "")) return;
          handleSubmit(values);
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
              {formType === "add" ? "Create Book" : "Edit"}
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
