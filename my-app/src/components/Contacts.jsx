import Sns from "./Sns";
import Form from "./Form";
import { ContactsContainer } from "./style/ContactStyle";

export default function Contents(){
  return(
    <ContactsContainer>
      <Form/>
      <Sns/>
    </ContactsContainer>
  )
};