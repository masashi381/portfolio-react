import { useState } from "react";
import { FormStyle } from "./ContactStyle";
import { SpanStyle } from "./ContactStyle";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const publicKey = `${import.meta.env.VITE_API_PUBLIC_ID}`;
  const serviceId = `${import.meta.env.VITE_API_SERVICE_ID}`;
  const templateId = `${import.meta.env.VITE_API_TEMPLATE_ID}`;

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("clicked");
    if (name === "") {
      alert("Please enter a name");
      return;
    } else if (mail === "") {
      alert("Please enter a mail address");
      return;
    } else if (subject === "") {
      alert("Please enter a subject");
      return;
    } else if (message === "") {
      alert("Please enter a message");
      return;
    } else {
      const template_params = {
        to_name: "Masa",
        from_name: name,
        from_mail: mail,
        subject: subject,
        message: message,
      };
      await emailjs.send(serviceId, templateId, template_params, publicKey).then(
        () => {
          console.log("successfully");
          alert("email sent successfully");
        },
        (err) => {
          console.log("failed", err.text);
        }
      );
    }

    setName("");
    setMail("");
    setSubject("");
    setMessage("");
  };

  return (
    <FormStyle onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">
          name<SpanStyle>*</SpanStyle>
        </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="mail">
          Email<SpanStyle>*</SpanStyle>
        </label>
        <input type="text" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="subject">
          Subject<SpanStyle>*</SpanStyle>
        </label>
        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div>
        <label htmlFor="comment">
          Message<SpanStyle>*</SpanStyle>
        </label>
        <textarea
          name=""
          id="comment"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button>SUBMIT</button>
    </FormStyle>
  );
}
