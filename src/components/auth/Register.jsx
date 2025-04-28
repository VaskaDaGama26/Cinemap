import React from "react";
import Input from "../UI/Input";
import LinkItem from "../UI/LinkItem";
import FormHeading from "../UI/FormHeading";
import Button from "../UI/Button";

const Register = () => {
  return (
    <div className="mx-auto flex flex-col w-[400px] px-6 py-12 formShadow m-12 rounded-2xl">
      <FormHeading label="Register" />
      <form className="flex flex-col gap-4" action="/">
        <Input
          name="username"
          label="Username"
          type="text"
          pattern="[A-Za-zА-Яа-яЁё\s\-]{2,50}"
        />
        <Input
          name="email"
          label="Email"
          type="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        />
        <Input name="password" label="Password" type="password" pattern="" />
        <div className="flex flex-row gap-2 items-center">
          <Input name="agreement" type="checkbox" pattern="" />
          <p className="text-sm text-(--darkblue)">
            Agree with <LinkItem href="/" text="Privacy Policy" /> and{" "}
            <LinkItem href="/" text="Terms of Service" />
          </p>
        </div>

        <Button label="Register" classes="submitButton" />
        <LinkItem
          href="/login"
          text="Still don't have an account? Register Here!"
        />
      </form>
    </div>
  );
};

export default Register;
