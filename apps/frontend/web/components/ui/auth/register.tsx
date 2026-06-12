'use client';

import { useState, type FormEvent } from "react";

type RegisterUIProps = {
  onSwitchToLogin?: () => void;
};

export default function RegisterUI({ onSwitchToLogin }: RegisterUIProps) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim()) return "O nome é obrigatório";
    if (name.length < 3) return "O nome deve ter pelo menos 3 caracteres";
    if (bio.length > 120) return "A bio não pode passar de 120 caracteres";
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setLoading(true);


    await new Promise((res) => setTimeout(res, 1500));

    setLoading(false);

    alert("Conta criada com sucesso!");
    setName("");
    setBio("");
  };

  const isValid = !validate();

  return (
    <div className="w-full sm:rounded-4xl h-full flex items-center justify-center flex-col bg-linear-to-br from-black via-zinc-900 to-black text-white px-4">
      
      <form
        onSubmit={handleSubmit}
        className="w-full h-full  flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-linear-to-br from-black via-zinc-900 to-black text-white"
      >

        <h1 className="text-2xl font-bold text-center">
          Criar Conta
        </h1>

     
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome ou Alcunha"
          className={`w-full p-3 rounded-lg bg-white/10 outline-none ${
            error && name.trim().length < 3 ? "border border-red-500" : ""
          }`}
        />

   
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Escreva uma bio (opcional)"
          className={`w-full h-40 p-3 rounded-lg bg-white/10 outline-none resize-none ${
            bio.length > 120 ? "border border-red-500" : ""
          }`}
        />


        {error && (
          <p className="text-red-400 text-sm">
            {error}
          </p>
        )}


        <p className="text-xs text-gray-400 text-right">
          {bio.length}/120
        </p>


        <button
          type="submit"
          disabled={!isValid || loading}
          className={`w-full p-3 rounded-full font-semibold transition ${
            !isValid || loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-400"
          }`}
        >
          {loading ? "Criando conta..." : "Criar Conta"}
        </button>


        <p className="text-sm text-center text-gray-400">
          Já tem conta?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-cyan-400 underline decoration-dashed cursor-pointer"
          >
            Entrar agora
          </button>
        </p>

      </form>
    </div>
  );
}