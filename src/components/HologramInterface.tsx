interface HologramInterfaceProps {
  active: boolean;
  wish: string;
}

const HologramInterface = ({ active, wish }: HologramInterfaceProps) => {
  if (!active) return null;

  return (
    <div className="relative mb-8 flex justify-center">
      {/* Realistic hologram projection like in the image */}
      <div className="relative w-72 h-48 md:w-80 md:h-60">
        {/* Hologram base with realistic glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-cyan-400/20 to-purple-500/30 rounded-xl border border-cyan-300/40 backdrop-blur-sm">
          {/* Multiple glow layers for realism */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-300/30 to-purple-400/20 rounded-xl animate-pulse" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 to-blue-500/10 rounded-xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Hologram content with realistic positioning */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
            {/* Wish text with holographic effect */}
            <div className="text-cyan-200 text-base md:text-lg font-rubik text-center mb-6 opacity-95 leading-relaxed">
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-medium">
                "{wish}"
              </span>
            </div>

            {/* Central magical energy core */}
            <div className="relative flex items-center justify-center">
              {/* Multiple energy rings like in the image */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border-2 rounded-full animate-ping"
                  style={{
                    width: `${48 + i * 16}px`,
                    height: `${48 + i * 16}px`,
                    borderColor:
                      i % 2 === 0
                        ? "rgba(34, 211, 238, 0.6)"
                        : "rgba(168, 85, 247, 0.6)",
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: "3s",
                  }}
                />
              ))}

              {/* Central core with realistic glow */}
              <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-pulse opacity-90">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full animate-pulse blur-sm"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>

          {/* Realistic scan lines effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/5 to-transparent animate-pulse rounded-xl" />
          <div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-400/5 to-transparent animate-pulse rounded-xl"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Hologram projection base with realistic lighting */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-gradient-to-r from-cyan-400/40 via-blue-400/60 to-purple-400/40 rounded-full blur-md animate-pulse" />
        <div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gradient-to-r from-cyan-500/60 to-purple-500/60 rounded-full blur-sm animate-pulse"
          style={{ animationDelay: "0.3s" }}
        />
      </div>
    </div>
  );
};

export default HologramInterface;
