import { useState } from "react";

const Contact_page = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setmessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, mail, message});
    };
    const nameChange = (e) => setName(e.target.value);
    const mailChange = (e) => setMail(e.target.value);
    const messagechange=(e)=>setmessage(e.target.value);
    return (
        <div className="contact-page">
            <div className="contact-page-header">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-page-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" onChange={nameChange} value={name} />
                    </div>
                    <div>
                        <label>Mail:</label>
                        <input type="email" onChange={mailChange} value={mail} />
                    </div>
                    <div>
                        <label>Message:</label>
                        <input type="text" onChange={ messagechange} value={message}/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="personal-info">
                <h1>Contact Information</h1>
                <h3>Email: ranaprashant282@gmail.com</h3>
                <h3>Mobile Number: 8700489531</h3>
            </div>
        </div>
    )
}
export default Contact_page;