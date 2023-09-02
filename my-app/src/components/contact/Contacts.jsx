import Sns from "./Sns";
import Form from "./Form";
import { ContactsContainer } from "./ContactStyle";

export default function Contents() {
	return (
		<ContactsContainer>
			<Form />
			<Sns />
		</ContactsContainer>
	);
}
