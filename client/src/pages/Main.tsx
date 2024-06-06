import { ChangeEvent, Fragment, useEffect, useState } from "react";
import useSWR from "swr";

import { Container, Input } from "@mui/material";

import BoooksList from "@/components/main/BoooksList";
import EditModal from "@/components/main/EditModal";

import { TBook } from "@/types/books";

import { fetcher } from "@/api/fetchers";

const Main = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [edditingItem, setEdditingItem] = useState<TBook | null>(null);
  const [booksList, setBooksList] = useState<TBook[]>([]);

  const { data } = useSWR("/books", fetcher);

  useEffect(() => {
    setBooksList(data || []);
  }, [data]);

  const handleSearchBook = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  return (
    <Fragment>
      <Container>
        <Input value={searchValue} onChange={handleSearchBook} />
        <BoooksList
          booksList={booksList}
          setBooksList={setBooksList}
          setEdditingItem={setEdditingItem}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      </Container>

      <EditModal
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        edditingItem={edditingItem}
        setBooksList={setBooksList}
      />
    </Fragment>
  );
};

export default Main;
