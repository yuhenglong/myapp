import React from "react";

const Contact = (props) => {
    const { contactForm,handleDel } = props;
    return (<div className="formList">
        {contactForm.map(contact => {
            return contact.age >= 25 ? (<div className="ContactForm" key={contact.id}>
                <div>{contact.name}</div>
                <div>{contact.age}</div>
                <div>{contact.sex}</div>
                <button onClick={()=>handleDel(contact.id)}>删除</button>
            </div>
            ) : null;
        })
        }
    </div>)

}
export default Contact;