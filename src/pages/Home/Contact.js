import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import appointment from "../../assets/images/appointment.png";
import auth from "../../firebase.init";
// import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
  
  const [user] = useAuthState(auth);
  const handleBooking = (event) => {
    event.preventDefault();
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    const comment = {
      name: user.displayName,
      email: user.email,
      subject,
      message
    };

    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('comment', result);
        toast.success('comment added');
        
        
      });
  };

  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="bg-primary px-10 py-14 m-5"
    >
      <div className="text-center pb-14 text-white">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary">
          Contact Us
        </p>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>

      <form
        onSubmit={handleBooking}
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
      >
        <input
          type="text"
          name="name"
          disabled
          value={user?.displayName || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          value={user?.email || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="input required input-bordered w-full max-w-xs "
          required
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="input required input-bordered w-full max-w-xs "
          required
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-secondary w-full max-w-xs"
        />
      </form>
    </div>
  );
};
// };

export default Contact;
