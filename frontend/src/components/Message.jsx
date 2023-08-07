import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};
Message.defautProp = {
  variant: "info",
};
export default Message;
