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
    <div className="w-full max-w-sm md:max-w-md relative z-20 px-4 md:px-0">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            disabled={disabled}
            placeholder="Коснитесь и загадайте желание..."
            className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-cyan-400/50 rounded-full text-white placeholder-cyan-200/70 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 font-rubik text-sm md:text-base"
          />

          <button
            type="submit"
            disabled={disabled || !wish.trim()}
            className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium transition-all duration-300 hover:from-cyan-400 hover:to-purple-400 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 text-sm md:text-base"
          >
            ✨
          </button>
        </div>

        {/* Enhanced magic glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse opacity-60" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse opacity-40"
          style={{ animationDelay: "0.5s" }}
        />
      </form>
    </div>
  );
};

export default WishInput;
