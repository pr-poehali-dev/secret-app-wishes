import { useState } from "react";
import MagicBackground from "@/components/MagicBackground";
import HologramInterface from "@/components/HologramInterface";
import WishInput from "@/components/WishInput";
import FallingGifts from "@/components/FallingGifts";

const Index = () => {
  const [wishMade, setWishMade] = useState(false);
  const [currentWish, setCurrentWish] = useState("");

  const handleWishSubmit = (wish: string) => {
    setCurrentWish(wish);
    setWishMade(true);

    // Сброс анимации через 10 секунд
    setTimeout(() => {
      setWishMade(false);
      setCurrentWish("");
    }, 10000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950">
      <MagicBackground />

      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative z-10">
        {/* Secret app header with mobile-first design */}
        <div className="text-center mb-8 md:mb-12 max-w-sm md:max-w-none">
          <div className="mb-2 text-cyan-400 text-sm font-rubik tracking-wider opacity-80">
            🔒 СЕКРЕТНЫЙ ДОСТУП
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4 font-montserrat leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Магический Телефон
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-200 font-rubik opacity-90 leading-relaxed">
            Загадайте желание и коснитесь экрана ✨<br />
            <span className="text-cyan-300 text-base">
              Подарки упадут с неба
            </span>
          </p>
        </div>

        <HologramInterface active={wishMade} wish={currentWish} />

        <WishInput onWishSubmit={handleWishSubmit} disabled={wishMade} />

        {wishMade && <FallingGifts />}

        {/* Secret app footer */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-cyan-400/60 text-xs font-rubik">
          🌟 Магия активирована
        </div>
      </div>
    </div>
  );
};

export default Index;
