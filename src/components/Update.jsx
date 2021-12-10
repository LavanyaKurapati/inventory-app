import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

const Update = ({ closeModal, editObj, updatedItem }) => {
  const [newUpdateItem, setNewUpdateItem] = useState(editObj);
  //console.log(newUpdateItem);

  const updateInputValue = (event) => {
    const { name, value } = event.target;
    setNewUpdateItem({ ...newUpdateItem, [name]: value });
  };

  return (
    <Modal isOpen>
      <ModalHeader toggle={closeModal}>Update Item</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="Title">Title</Label>
            <Input
              id="Title"
              placeholder="Enter Title"
              name="title"
              value={newUpdateItem.title}
              type="text"
              onChange={updateInputValue}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Quantity">Quantity</Label>
            <Input
              id="Quantity"
              placeholder="Enter Quantity"
              type="text"
              value={newUpdateItem.quantity}
              name="quantity"
              onChange={updateInputValue}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Color">Available Colors</Label>
            <Input
              id="Color"
              placeholder="Enter Colors"
              type="text"
              value={newUpdateItem.colors}
              name="colors"
              onChange={updateInputValue}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Price">Price</Label>
            <Input
              id="Price"
              placeholder="Enter Price"
              type="text"
              value={newUpdateItem.price}
              name="price"
              onChange={updateInputValue}
            />
          </FormGroup>
          <Button onClick={() => updatedItem(newUpdateItem)}>Save</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default Update;
