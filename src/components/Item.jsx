import { MdDelete, MdModeEdit } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  CardImg,
} from "reactstrap";

const Item = ({ details, deleteItem, updateItem }) => {
  const { title, id, quantity, price, imageUrl, colors } = details;

  const onDeleteItem = () => {
    deleteItem(id);
  };

  return (
    <Col xs="12" sm="6" lg="4" className="mb-3">
      <Card>
        <CardBody>
          <CardImg src={imageUrl} alt={title} height="200" />
          <CardTitle tag="h4" className="title">
            {title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Quantity: <span className="quantity">{quantity}</span>
          </CardSubtitle>
          <CardText tag="p" className="color-text">
            Available Colors: <span className="pro-color">{colors}</span>
          </CardText>
          <CardText className="price" tag="p">
            Price : <span className="price-val">Rs {price}/-</span>
          </CardText>
          <Button color="transparent" onClick={onDeleteItem}>
            <MdDelete color="red" fontSize={20} />
          </Button>
          <Button color="transparent" onClick={() => updateItem(details)}>
            <MdModeEdit color="blue" fontSize={20} />
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Item;
