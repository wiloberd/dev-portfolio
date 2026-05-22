import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <h1>404 - Página não encontrada</h1>

      <p>
        Ops! A página que você está procurando não existe ou foi movida.
      </p>

      <Link href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
}