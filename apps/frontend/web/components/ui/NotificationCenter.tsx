import { X } from "lucide-react";

const colors = {
  blue: {
    bg: "bg-blue-500/60",
    border: "border-blue-500/30",
    text: "text-blue-400",
  },
  red: {
    bg: "bg-red-500/60",
    border: "border-red-500/30",
    text: "text-red-400",
  },
  green: {
    bg: "bg-green-500/60",
    border: "border-green-500/30",
    text: "text-green-400",
  },
  yellow: {
    bg: "bg-yellow-500/60",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
  },
};

export default function Notification({
  icon,
  title,
  message,
  link,
  color = "blue",
  onClose,
}: {
  icon: React.ReactNode;
  title: string;
  message: string;
  link?: { href: string; label: string };
  color?: keyof typeof colors;
  onClose: () => void;
}) {
  const style = colors[color] || colors.blue;


  if (!message) return null;

  return (
    <div
      className={`
        flex items-center w-[96%] justify-center gap-3 p-4 rounded-lg border
        ${style.bg} ${style.border}
      `}
    >

      <div className={`text-2xl ${style.text}`}>
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm text-white/90">
          {message}

          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`ml-1 font-medium ${style.text} hover:underline`}
            >
              {link.label}
            </a>
          )}
        </p>
      </div>


      <button
        onClick={onClose}
        className="text-white/70 cursor-pointer hover:text-white"
      >
        <X size={18} />
      </button>
    </div>
  );
}