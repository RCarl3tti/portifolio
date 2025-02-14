"use client";
import { IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "./InputForm";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function mandarEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: nome,
      email: email,
      message: mensagem,
    };

    if (serviceId && templateId && publicKey) {
      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email enviado com sucesso");
          setNome("");
          setEmail("");
          setMensagem("");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    } else {
      console.log("Service ID, Template ID, or Public Key is missing.");
    }
  }

  return (
    <div className="w-full">
      <form action="" className="flex flex-col items-center justify-center gap-5 " onSubmit={mandarEmail}>
        <Input
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />

        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          textArea
          placeholder="Mensagem"
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
        ></Input>

        <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white p-2 rounded-md flex items-center justify-center gap-2">
          Enviar
          <IconArrowRight size={20} />
        </button>
      </form>
    </div>
  );
}
