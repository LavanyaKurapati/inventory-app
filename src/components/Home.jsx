import { useState } from "react";
import { Button, Container, Row } from "reactstrap";
import Add from "./Add";
import Item from "./Item";
import Update from "./Update";

const initialList = [
  {
    id: 1,
    title: "one plus",
    imageUrl:
      "https://images.firstpost.com/wp-content/uploads/2021/06/OnePlus-9R.jpg",
    quantity: 3,
    price: "25,000",
  },
  {
    id: 2,
    title: "mac pro",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/R2SA3MYsidEVim4BuRPsPa0A5zc=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/70247197/akrales_211020_4803_0004.0.jpg",
    quantity: 2,
    price: "45,000",
  },
  {
    id: 3,
    title: "hp laptop",
    imageUrl:
      "https://static.toiimg.com/thumb/resizemode-4,msid-59642405,width-1200,height-900/59642405.jpg",
    quantity: 10,
    price: "35,000",
  },
  {
    id: 4,
    title: "ipad Apple",
    imageUrl:
      "https://s.yimg.com/uu/api/res/1.2/15rAxiM1hQ16L_Y1kkkXFw--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-10/53aaa740-1301-11eb-b5fe-608fd08339b9.cf.jpg",
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
