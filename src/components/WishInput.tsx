import { useState } from "react";

interface WishInputProps {
  onWishSubmit: (wish: string) => void;
  disabled: boolean;
}

const WishInput = ({ onWishSubmit, disabled }: WishInputProps) => {
  const [wish, setWish] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wish.trim()) {
      onWishSubmit(wish.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md relative z-20">
      <div className="relative">
        <input
          type="text"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          disabled={disabled}
          placeholder="Загадайте желание..."
          className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-cyan-400/50 rounded-full text-white placeholder-cyan-200/70 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 font-rubik"
        />

        <button
          type="submit"
          disabled={disabled || !wish.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
        >
          ✨
        </button>
      </div>

      {/* Magic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse opacity-50" />
    </form>
  );
};

export default WishInput;
