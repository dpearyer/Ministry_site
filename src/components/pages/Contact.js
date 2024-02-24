import React from "react";
import '../Contact.css';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4948894a-fbb6-47fd-9a83-a004e680ed96");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    
      
    return (
        
        

        <section className="contactp-section">
            <div className="contactp-container">   
            <form className="contactp-left" onSubmit={onSubmit}>
                <div className="contactp-left-title">
                    <h2>Get in touch</h2>
                    <hr></hr>

                </div>
                <input type="text" name="name" placeholder="Your Name" className="contactp-inputs" required></input>
                <input type="email" email="name" placeholder="Your Email" className="contactp-inputs" required></input>
                <textarea name="message" placeholder="Your Message(Once you submit, your message has been sent!)" className="contactp-inputs" required></textarea>
                <button type="submit">Submit <img src="/images/arrow_icon.png" alt=""></img></button>
                <a href="/">
                <button type="button">Go Back</button>
                </a>
            </form>
             
            <div className="contactp-right">
                <img src="/images/conversation.png" alt=""></img>
            </div>
       
       </div>
       </section>
    )}

export default Contact