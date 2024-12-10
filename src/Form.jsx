import React from "react";

const Form = () => {
  return (
    <div>
      <form action="https://formspree.io/f/mvgonqzw" method="POST">
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          autoComplete="off"
          required
        />

        <textarea
          name="message"
          cols="30"
          rows="6"
          autoComplete="off"
        ></textarea>

        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default Form;
