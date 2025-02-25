'use client'
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Dropdown } from "@/components/Dropdown";
import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";
import { Spinner } from "@/components/Spinner";
import { ToggleSwitch } from "@/components/ToggleSwitch";
import Image from "next/image";
import React from "react";
import { ChangeEvent } from "react";

export default function Home() {
  const [likes, setLikes] = React.useState(0);
  function setIsModalOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

  function setTrue(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div >
        <Button text="Click Me" className="mb-4" onClick={() => setIsModalOpen(true)} />
          <Input label="Password" placeholder = "PEEEE" ></Input>
          <Card title = "dawdwa" description = "desc adawd da" buttonText="SUBMIT" children = {<Button text="dadwad"></Button>}></Card>
          <ToggleSwitch checked={true} onChange={setTrue}></ToggleSwitch>
          <Dropdown label = "dropdown1" options = {[{ value: '1', label: 'test1' }, { value: '2', label: 'test2' }]}></Dropdown>
          <Spinner></Spinner>
          <Modal isOpen={true} onClose={function (): void {
        throw new Error("Function not implemented.");
      } } title={"test 1234"} children={undefined}></Modal>
    </div>
  );
}
