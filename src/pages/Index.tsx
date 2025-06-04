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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <MagicBackground />

      <div className="min-h-screen flex flex-col items-center justify-center p-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 font-montserrat">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Секретное Приложение
            </span>
          </h1>
          <p className="text-xl text-blue-200 font-rubik opacity-80">
            Загадайте желание и увидите магию ✨
          </p>
        </div>

        <HologramInterface active={wishMade} wish={currentWish} />

        <WishInput onWishSubmit={handleWishSubmit} disabled={wishMade} />

        {wishMade && <FallingGifts />}
      </div>
    </div>
  );
};

export default Index;
