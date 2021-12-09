import { useState } from "react";
import { Button, Container, Row } from "reactstrap";
import Add from "./Add";
import Item from "./Item";
import Update from "./Update";

const initialList = [
  {
    id: 1,
    title: "one plus",
    quantity: 3,
    price: "25,000",
  },
  {
    id: 2,
    title: "mac pro",
    quantity: 2,
    price: "45,000",
  },
  {
    id: 3,
    title: "hp laptop",
    quantity: 10,
    price: "35,000",
  },
  {
    id: 4,
    title: "ipad Apple",
    quantity: 3,
    price: "30,900",
  },
];

const Home = () => {
  const [data, setData] = useState(initialList);

  //states for adding new item
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [id, setId] = useState(data.length + 1);

  //states for updating
  const [updateObj, setUpdateObj] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const deleteItem = (id) => {
    const filteredItems = data.filter((item) => item.id !== id);
    setData(filteredItems);
  };

  const onUpdateItem = (updateObject) => {
    setIsUpdate(true);
    setUpdateObj(updateObject);
  };

  const updatedItem = (obj) => {
    const updatedList = data.map((eachItem) => {
      if (eachItem.id === obj.id) {
        return obj;
      } else {
        return eachItem;
      }
    });
    setData(updatedList);
    setIsUpdate(false);
  };

  const hideUpdateItem = () => {
    setUpdateObj(null);
    setIsUpdate(false);
  };

  const hideAddItem = () => {
    setIsButtonClick(false);
  };

  return (
    <Container className="mt-3">
      <Button
        className="mb-3"
        onClick={() => {
          setIsButtonClick(true);
        }}
      >
        Add
      </Button>
      {isButtonClick && (
        <Add
          newItem={newItem}
          setNewItem={setNewItem}
          id={id}
          setId={setId}
          closeAddItem={hideAddItem}
          setData={setData}
          setIsButtonClick={setIsButtonClick}
        />
      )}
      {isUpdate && (
        <Update
          editObj={updateObj}
          closeModal={hideUpdateItem}
          updatedItem={updatedItem}
        />
      )}
      <Row>
        {data.map((item) => (
          <Item
            key={item.id}
            details={item}
            deleteItem={deleteItem}
            updateItem={onUpdateItem}
          />
        ))}
      </Row>
    </Container>
  );
};
export default Home;
