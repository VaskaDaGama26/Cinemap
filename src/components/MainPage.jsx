import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";

const MainPage = () => {
  const navigate = useNavigate();

  const loginNavigate = () => {
    navigate("/login");
  };
  const registerNavigate = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="flex flex-row justify-between px-20">
        <div className="flex flex-col justify-center gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl">Welcome to Cinemap</h1>
            <h2 className="text-(--darkblue) text-2xl">
              Cinema as you watch it — shaped by your choices, moods, and
              moments
            </h2>
          </div>
          <Button
            label="Get Started"
            classes="text-2xl w-[250px] font-medium text-(--white) bg-(--blue) py-3 rounded-xl cursor-pointer duration-300 hover:shadow-xl"
            action=""
          />
        </div>
        <div className="flex bg-(--light-blue) px-6 flex-col gap-16 w-[350px] h-dvh justify-center">
          <Button
            label="Log In"
            classes="text-2xl font-medium text-(--blue) bg-(--white) py-3 rounded-xl cursor-pointer duration-300 hover:shadow-xl"
            action={loginNavigate}
          />
          <Button
            label="Register"
            classes="text-2xl font-medium text-(--white) bg-(--lighter-blue) py-3 rounded-xl cursor-pointer duration-300 hover:shadow-xl"
            action={registerNavigate}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
