'use client';

import { useEffect, useState, useCallback, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { ArrowLeft, KeySquare, RotateCcw } from "lucide-react";
import Button from "../Button";

type NostrLoginProps = {
    onSwitchToRegister?: () => void;
};

export default function NostrLogin({ onSwitchToRegister }: NostrLoginProps) {

    const [step, setStep] = useState<1 | 2>(1);
    const [nsec, setNsec] = useState("");
    const [loading, setLoading] = useState(false);
    const [sessionId, setSessionId] = useState(generateSessionId());
    const [expired, setExpired] = useState(false);
    const [nsecError, setNsecError] = useState("");

    const qrRef = useRef<HTMLDivElement>(null);
    const qrCode = useRef<QRCodeStyling | null>(null);

    function generateSessionId() {
        return crypto.randomUUID();
    }

    const qrValue = `nostr-login:${sessionId}`;

    const validateNsec = () => {
        if (!nsec.trim()) return "Cole sua nsec para continuar";
        if (!nsec.toLowerCase().startsWith("nsec1")) return "Formato de nsec inválido";
        if (nsec.trim().length < 20) return "Sua nsec parece muito curta";
        return "";
    };

    const resetSession = useCallback(() => {
        setSessionId(generateSessionId());
        setExpired(false);
        setLoading(false);
    }, []);


    useEffect(() => {
        qrCode.current = new QRCodeStyling({
            width: 220,
            height: 220,
            data: qrValue,
            margin: 8,

            image: "/icons/nostrapp.svg", 

            imageOptions: {
                hideBackgroundDots: true,
                imageSize: 0.5, 
                margin: 4,
                crossOrigin: "anonymous",
            },

            dotsOptions: {
                color: "#000000",
                type: "rounded",
            },

            cornersSquareOptions: {
                color: "#22d3ee",
                type: "extra-rounded",
            },

            cornersDotOptions: {
                color: "#67e8f9",
                type: "dot",
            },

            backgroundOptions: {
                color: "#FFFFFF",
            },
        });

        if (qrRef.current) {
            qrCode.current.append(qrRef.current);
        }
    }, []);


    useEffect(() => {
        qrCode.current?.update({
            data: qrValue,
        });
    }, [qrValue]);


    useEffect(() => {
        if (step !== 1) return;
        if (!qrRef.current || !qrCode.current) return;

        qrRef.current.innerHTML = "";
        qrCode.current.append(qrRef.current);
    }, [step]);

    useEffect(() => {
        setExpired(false);

        const timer = setTimeout(() => {
            setExpired(true);
            setLoading(false);
        }, 60000);

        return () => clearTimeout(timer);
    }, [sessionId]);

    useEffect(() => {
        if (expired) return;

        const interval = setInterval(() => {
            const success = false;

            if (success) {
                setLoading(true);
                clearInterval(interval);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [expired]);

    return (
        <div className="w-full sm:rounded-4xl h-full flex items-center justify-center ">

            {step == 1 && (
                <div className="w-full sm:rounded-4xl h-full flex items-center justify-center flex-col bg-linear-to-br from-black via-zinc-900 to-black text-white px-4">

                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold">Login</h1>
                        <p className="text-sm text-zinc-400 mt-1">
                            Use sua app Nostr para entrar com segurança
                        </p>
                    </div>

                    <div className="flex flex-col items-center">

                        <div className="relative p-4 rounded-2xl bg-gray-500">

                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                <div className="scan-line" />
                            </div>

                            <div className="relative items-center justify-center rounded-xl ">

                                <div
                                    ref={qrRef}
                                    className="flex items-center justify-center rounded-2xl overflow-hidden"
                                />

                                {expired && (
                                    <button
                                        onClick={resetSession}
                                        className="absolute rounded-2xl flex items-center justify-center left-0 right-0 w-full h-full top-0 z-10 bg-black/20 backdrop-blur-xs"
                                    >
                                        <RotateCcw size={50} />
                                    </button>
                                )}
                            </div>
                        </div>

                        <p className="text-xs text-zinc-400 mt-4 text-center">
                            Escaneie com sua app Nostr e confirme no telefone
                        </p>

                        {loading && (
                            <p className="text-xs text-cyan-400 mt-2 animate-pulse">
                                Aguardando confirmação...
                            </p>
                        )}
                    </div>

                    <div className="my-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-xs text-zinc-500">ou continue com</span>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <button
                        onClick={() => setStep(2)}
                        className="bg-white/10 cursor-pointer flex items-center justify-center gap-2 hover:bg-white/20 transition p-3 rounded-xl text-sm"
                    >
                        <KeySquare /> <span>Nostr nSec</span>
                    </button>

                    <p className="mt-6 text-sm transition text-red-500">
                        Ainda não tem conta?{" "}
                        <button
                            type="button"
                            onClick={onSwitchToRegister}
                            className="text-cyan-400 hover:text-cyan-300 underline decoration-dashed cursor-pointer"
                        >
                            Criar agora
                        </button>
                    </p>

                    <style>{`
                        .scan-line {
                            position: absolute;
                            width: 100%;
                            height: 2px;
                            background: rgba(0, 255, 255, 0.6);
                            top: 0;
                            animation: scan 2.5s infinite;
                            box-shadow: 0 0 10px cyan;
                        }

                        @keyframes scan {
                            0% { top: 0%; }
                            50% { top: 100%; }
                            100% { top: 0%; }
                        }
                    `}</style>
                </div>
            )}

            {step === 2 && (
                <div className="w-full sm:rounded-4xl h-full flex items-center justify-center flex-col bg-linear-to-br from-black via-zinc-900 to-black text-white px-4 gap-6">

                    <h2 className="text-lg font-semibold text-center">
                        Entrar com nSec
                    </h2>

                    <input
                        value={nsec}
                        onChange={(e) => {
                            setNsec(e.target.value);
                            if (nsecError) setNsecError("");
                        }}
                        placeholder="Cole sua nsec aqui"
                        className={`w-[80%] p-3 rounded-full bg-white/10 text-white outline-none ${
                            nsecError ? "border border-red-500" : ""
                        }`}
                    />

                    {nsecError && <p className="text-sm text-red-400">{nsecError}</p>}

                    <button className="w-[80%] p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                        Importar nSec
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            const err = validateNsec();
                            setNsecError(err);
                            if (err) return;
                            setNsecError("");
                            setLoading(true);
                        }}
                        disabled={!nsec.trim() || !!validateNsec()}
                        className="p-3 rounded-full cursor-pointer bg-cyan-500 text-black font-semibold disabled:opacity-40"
                    >
                        Continuar
                    </button>

                    <Button
                        text="Back"
                        icon={<ArrowLeft />}
                        onClick={() => setStep(1)}
                        className="bg-amber-400 flex gap-1 absolute top-2 p-2 rounded-full left-2 cursor-pointer"
                    />
                </div>
            )}
        </div>
    );
}