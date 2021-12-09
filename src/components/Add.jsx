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

const Add = ({
  newItem,
  setNewItem,
  id,
  setId,
  closeAddItem,
  setData,
  setIsButtonClick,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value, id });
  };

  const addItem = (e) => {
    e.preventDefault();
    setId(id + 1);
    setData((data) => [...data, newItem]);
    setIsButtonClick(false);
  };

  return (
    <Modal isOpen>
      <ModalHeader toggle={() => setIsButtonClick(false)}>Add Item</ModalHeader>
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
            <Label for="ImageUrl">Image Url</Label>
            <Input
              id="ImageUrl"
              placeholder="Enter Url"
              type="text"
              name="imageUrl"
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
          <Button
            disabled={!newItem.title || !newItem.quantity || !newItem.price}
          >
            Save
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default Add;
