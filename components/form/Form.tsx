"use client";

import React from "react";
import { Input } from "../ui/input";
import {
  ArrowRightIcon,
  MailIcon,
  MessagesSquareIcon,
  User,
} from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Form = () => {
  return (
    <form
      className="flex flex-col gap-y-4"
      action="https://formsubmit.co/fiificode@gmail.com"
      method="POST"
    >
      <div className="relative flex items-center">
        <Input type="text" name="user_name" required placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          name="user_email"
          required
          placeholder="your-email@email.com"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea id="message" name="message" placeholder="Your Message" />
        <MessagesSquareIcon className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        id="submit"
        className="flex gap-1 items-center max-w-[166px]"
      >
        Let&apos;s Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
