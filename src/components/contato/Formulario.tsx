"use client";
import { IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import Input from "./InputForm";
import axios from 'axios';

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function mandarEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post('/api/send', {
        nome,
        email,
        mensagem
      });

      if (response.status === 200) {
        alert("Email enviado com sucesso!");
      } else {
        setError("Erro ao enviar email. Tente novamente mais tarde.");
      }
    } catch {
      setError("Erro ao enviar email. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
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

        <button
          className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white p-2 rounded-md flex items-center justify-center gap-2"
          type="submit"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
          <IconArrowRight size={20} />
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
