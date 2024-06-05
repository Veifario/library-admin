import { ChangeEvent, useState } from "react";

import { Container, Input } from "@mui/material";
import BoooksList from "@/components/main/BoooksList";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchBook = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  return (
    <Container>
      <Input value={searchValue} onChange={handleSearchBook} />
      <BoooksList />
    </Container>
  );
};

export default Main;
