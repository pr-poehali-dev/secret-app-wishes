import { useEffect, useState } from "react";

interface Gift {
  id: number;
  emoji: string;
  left: number;
  animationDuration: number;
  delay: number;
}

const giftEmojis = ["🎁", "🎀", "💝", "🌟", "✨", "🎊", "🎉", "💫", "🔮", "🦄"];

const FallingGifts = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    const createGifts = () => {
      const newGifts: Gift[] = [];

      for (let i = 0; i < 20; i++) {
        newGifts.push({
          id: i,
          emoji: giftEmojis[Math.floor(Math.random() * giftEmojis.length)],
          left: Math.random() * 100,
          animationDuration: 3 + Math.random() * 4,
          delay: Math.random() * 2,
        });
      }

      setGifts(newGifts);
    };

    createGifts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {gifts.map((gift) => (
        <div
          key={gift.id}
          className="absolute text-4xl animate-bounce"
          style={{
            left: `${gift.left}%`,
            top: "-10%",
            animationName: "fall-and-fade",
            animationDuration: `${gift.animationDuration}s`,
            animationDelay: `${gift.delay}s`,
            animationTimingFunction: "ease-in",
            animationFillMode: "forwards",
          }}
        >
          {gift.emoji}
        </div>
      ))}

      <style jsx>{`
        @keyframes fall-and-fade {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FallingGifts;
