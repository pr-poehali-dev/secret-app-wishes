interface HologramInterfaceProps {
  active: boolean;
  wish: string;
}

const HologramInterface = ({ active, wish }: HologramInterfaceProps) => {
  if (!active) return null;

  return (
    <div className="relative mb-8">
      {/* Hologram projection */}
      <div className="relative w-80 h-60 bg-gradient-to-t from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-400/50 backdrop-blur-sm">
        {/* Hologram glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-lg animate-pulse" />

        {/* Hologram content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
          <div className="text-cyan-300 text-lg font-rubik text-center mb-4 opacity-90">
            "{wish}"
          </div>

          {/* Magical energy rings */}
          <div className="relative">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 border-2 border-cyan-400/60 rounded-full animate-ping"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse opacity-70" />
          </div>
        </div>

        {/* Hologram scan lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse" />
      </div>

      {/* Hologram base */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-full blur-sm animate-pulse" />
    </div>
  );
};

export default HologramInterface;
