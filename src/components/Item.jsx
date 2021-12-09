import "bootstrap/dist/css/bootstrap.min.css";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
} from "reactstrap";

const Item = ({ details, deleteItem, updateItem }) => {
  const { title, id, quantity, price } = details;

  const onDeleteItem = () => {
    deleteItem(id);
  };

  return (
    <Col xs="12" md="6" lg="4" className="mb-3">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Quantity: {quantity}
          </CardSubtitle>
          <CardText>Price : Rs {price}/-</CardText>
          <Button color="danger" onClick={onDeleteItem}>
            Delete
          </Button>
          <Button onClick={() => updateItem(details)}>Update</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Item;
