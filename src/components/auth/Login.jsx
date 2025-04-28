import React from "react";
import Input from "../UI/Input";
import LinkItem from "../UI/LinkItem";
import FormHeading from "../UI/FormHeading";
import Button from "../UI/Button";

const Login = () => {
  return (
    <div className="mx-auto flex flex-col w-[400px] items-stretch h-fit px-6 py-12 formShadow m-12 rounded-2xl">
      <FormHeading label="Log In" />
      <form className="flex flex-col gap-4" action="/">
        <Input
          name="name"
          label="Username"
          type="text"
          pattern="[A-Za-zА-Яа-яЁё\s\-]{2,50}"
        />
        <div>
          <Input name="password" label="Password" type="password" pattern="" />
          <LinkItem href="/" text="Forgot Password" />
        </div>
        <Button label="Log In" classes="submitButton" />
        {/* AUTH THROUGH GOOGLE AND PHONE */}
        {/* <div className="flex flex-row justify-between gap-4">
          <Button label="Google" classes="authButton" />
          <Button label="Phone" classes="authButton" />
        </div> */}
        <LinkItem
          href="/register"
          text="Already have an account? Sign in here!"
        />
      </form>
    </div>
  );
};

export default Login;
