import * as React from "react";

interface EmailTemplateProps {
  nome: string;
  email: string;
  mensagem: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nome,
  email,
  mensagem,
}) => (
  <div>
    <h1>{nome} entrou em contato!</h1>
    <p>Email: {email}</p>
    <p>Mensagem: {mensagem}</p>
  </div>
);
