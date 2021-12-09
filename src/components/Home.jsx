import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import Item from "./Item";

const initialList = [
  {
    id: 1,
    name: "one plus",
    quantity: 3,
    price: "25,000",
  },
  {
    id: 2,
    name: "mac pro",
    quantity: 2,
    price: "45,000",
  },
  {
    id: 3,
    name: "hp laptop",
    quantity: 10,
    price: "35,000",
  },
  {
    id: 4,
    name: "ipad Apple",
    quantity: 3,
    price: "30,900",
  },
];

const Home = () => {
  const [data, setData] = useState(initialList);
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [id, setId] = useState(data.length);

  const addItem = (e) => {
    e.preventDefault();
    setData((data) => ({ ...data, newItem }));
    console.log(newItem);
  };

  const deleteItem = (id) => {
    const filteredItems = data.filter((item) => item.id !== id);
    setData(filteredItems);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setId(id + 1);
    setNewItem((newItem) => ({ ...newItem, [name]: value, id: id }));
  };

  return (
    <Container className="mt-3">
      <Button className="mb-3" onClick={() => setIsButtonClick(true)}>
        Add
      </Button>
      {isButtonClick && (
        <Modal isOpen>
          <ModalHeader
            toggle={() => {
              setIsButtonClick(false);
            }}
          >
            Add Item
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={addItem}>
              <FormGroup>
                <Label for="Title">Title</Label>
                <Input
                  id="Title"
                  placeholder="Enter Title"
                  name="title"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Quantity">Quantity</Label>
                <Input
                  id="Quantity"
                  placeholder="Enter Quantity"
                  type="text"
                  name="quantity"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Price">Price</Label>
                <Input
                  id="Price"
                  placeholder="Enter Price"
                  type="text"
                  name="price"
                  onChange={handleChange}
                />
              </FormGroup>
            </Form>
            <Button>Save</Button>
          </ModalBody>
        </Modal>
      )}
      <Row>
        {data.map((item) => (
          <Item key={item.id} details={item} deleteItem={deleteItem} />
        ))}
      </Row>
    </Container>
  );
};
export default Home;
