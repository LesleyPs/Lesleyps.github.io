import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Undo2, Volume2, VolumeX, Sparkles, ChevronRight, Trophy, Maximize2, Minimize2, X } from 'lucide-react';

// Color definitions matching the portfolio's palette
export type BallColor = 'blue' | 'orange' | 'mint' | 'amber' | 'violet';

export interface BallConfig {
  id: BallColor;
  name: string;
  bg: string;
  gradient: string;
  shadow: string;
  border: string;
}

export const BALL_CONFIGS: Record<BallColor, BallConfig> = {
  blue: {
    id: 'blue',
    name: 'Cobalt Blue',
    bg: '#0052cc',
    gradient: 'radial-gradient(circle at 35% 28%, #93c5fd 0%, #0052cc 60%, #002d72 100%)',
    shadow: 'rgba(0, 82, 204, 0.4)',
    border: 'border-blue-400'
  },
  orange: {
    id: 'orange',
    name: 'Tangerine',
    bg: '#ff5500',
    gradient: 'radial-gradient(circle at 35% 28%, #fed7aa 0%, #ff5500 65%, #9a2c00 100%)',
    shadow: 'rgba(255, 85, 0, 0.4)',
    border: 'border-orange-400'
  },
  mint: {
    id: 'mint',
    name: 'Mint Emerald',
    bg: '#059669',
    gradient: 'radial-gradient(circle at 35% 28%, #a7f3d0 0%, #059669 65%, #064e3b 100%)',
    shadow: 'rgba(5, 150, 105, 0.4)',
    border: 'border-emerald-400'
  },
  amber: {
    id: 'amber',
    name: 'Amber Gold',
    bg: '#d97706',
    gradient: 'radial-gradient(circle at 35% 28%, #fef08a 0%, #d97706 65%, #78350f 100%)',
    shadow: 'rgba(217, 119, 6, 0.4)',
    border: 'border-amber-400'
  },
  violet: {
    id: 'violet',
    name: 'Deep Violet',
    bg: '#7c3aed',
    gradient: 'radial-gradient(circle at 35% 28%, #ddd6fe 0%, #7c3aed 65%, #4c1d95 100%)',
    shadow: 'rgba(124, 58, 237, 0.4)',
    border: 'border-purple-400'
  }
};

const TUBE_CAPACITY = 4;

interface LevelDefinition {
  name: string;
  tubes: BallColor[][];
}

const LEVELS: LevelDefinition[] = [
  {
    name: "01 // Quick Sort",
    tubes: [
      ['blue', 'orange', 'blue', 'orange'],
      ['orange', 'blue', 'orange', 'blue'],
      []
    ]
  },
  {
    name: "02 // Triple Element",
    tubes: [
      ['blue', 'mint', 'orange', 'blue'],
      ['orange', 'blue', 'mint', 'orange'],
      ['mint', 'orange', 'blue', 'mint'],
      []
    ]
  },
  {
    name: "03 // Buffer Lab",
    tubes: [
      ['mint', 'blue', 'orange', 'blue'],
      ['orange', 'orange', 'mint', 'mint'],
      ['blue', 'orange', 'blue', 'mint'],
      [],
      []
    ]
  },
  {
    name: "04 // Tetrad Spectrum",
    tubes: [
      ['amber', 'blue', 'orange', 'mint'],
      ['mint', 'amber', 'blue', 'orange'],
      ['orange', 'mint', 'amber', 'blue'],
      ['blue', 'orange', 'mint', 'amber'],
      []
    ]
  },
  {
    name: "05 // High Purity",
    tubes: [
      ['violet', 'blue', 'orange', 'mint'],
      ['mint', 'violet', 'blue', 'orange'],
      ['orange', 'mint', 'violet', 'blue'],
      ['blue', 'orange', 'mint', 'violet'],
      [],
      []
    ]
  }
];

// Web Audio API Sound Synthesizer
class GameAudio {
  private ctx: AudioContext | null = null;
  public enabled = true;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(360, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(580, this.ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch {
      // fallback
    }
  }

  playDrop() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.09);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.11);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch {
      // fallback
    }
  }

  playInvalid() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.11);
    } catch {
      // fallback
    }
  }

  playWin() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.09);

        gain.gain.setValueAtTime(0.001, this.ctx.currentTime + idx * 0.09);
        gain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + idx * 0.09 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.09 + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.09);
        osc.stop(this.ctx.currentTime + idx * 0.09 + 0.45);
      });
    } catch {
      // fallback
    }
  }
}

const audio = new GameAudio();

interface GameContentProps {
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export function BallBeakerGame({ isExpanded = false, onToggleExpand }: GameContentProps) {
  const [levelIndex, setLevelIndex] = useState(0);
  const [tubes, setTubes] = useState<BallColor[][]>(() => 
    LEVELS[0].tubes.map(t => [...t])
  );
  const [selectedTube, setSelectedTube] = useState<number | null>(null);
  const [history, setHistory] = useState<BallColor[][][]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [shakingTube, setShakingTube] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isPouring, setIsPouring] = useState(false);

  useEffect(() => {
    audio.enabled = soundEnabled;
  }, [soundEnabled]);

  const loadLevel = (idx: number) => {
    const safeIdx = (idx + LEVELS.length) % LEVELS.length;
    setLevelIndex(safeIdx);
    setTubes(LEVELS[safeIdx].tubes.map(t => [...t]));
    setSelectedTube(null);
    setHistory([]);
    setMoves(0);
    setIsWon(false);
    setShakingTube(null);
  };

  const checkWin = (currentTubes: BallColor[][]) => {
    const allCorrect = currentTubes.every(tube => {
      if (tube.length === 0) return true;
      if (tube.length !== TUBE_CAPACITY) return false;
      const first = tube[0];
      return tube.every(ball => ball === first);
    });

    if (allCorrect) {
      setIsWon(true);
      audio.playWin();
    }
  };

  const handleTubeClick = (tubeIndex: number) => {
    if (isWon || isPouring) return;

    if (selectedTube === null) {
      const tube = tubes[tubeIndex];
      if (tube.length === 0) {
        setShakingTube(tubeIndex);
        audio.playInvalid();
        setTimeout(() => setShakingTube(null), 300);
        return;
      }
      setSelectedTube(tubeIndex);
      audio.playPop();
      return;
    }

    if (selectedTube === tubeIndex) {
      setSelectedTube(null);
      audio.playDrop();
      return;
    }

    const sourceTube = tubes[selectedTube];
    const targetTube = tubes[tubeIndex];
    const movingBall = sourceTube[sourceTube.length - 1];

    const isTargetFull = targetTube.length >= TUBE_CAPACITY;
    const isColorMatch = targetTube.length === 0 || targetTube[targetTube.length - 1] === movingBall;

    if (!isTargetFull && isColorMatch) {
      setIsPouring(true);
      audio.playDrop();

      setHistory(prev => [...prev, tubes.map(t => [...t])]);
      setMoves(m => m + 1);

      const newTubes = tubes.map(t => [...t]);
      newTubes[selectedTube] = sourceTube.slice(0, -1);
      newTubes[tubeIndex] = [...targetTube, movingBall];

      setTubes(newTubes);
      setSelectedTube(null);

      setTimeout(() => {
        setIsPouring(false);
        checkWin(newTubes);
      }, 140);
    } else {
      if (targetTube.length > 0) {
        setSelectedTube(tubeIndex);
        audio.playPop();
      } else {
        setShakingTube(tubeIndex);
        audio.playInvalid();
        setTimeout(() => setShakingTube(null), 320);
      }
    }
  };

  const handleUndo = () => {
    if (history.length === 0 || isWon || isPouring) return;
    const previous = history[history.length - 1];
    setTubes(previous);
    setHistory(h => h.slice(0, -1));
    setSelectedTube(null);
    setMoves(m => Math.max(0, m - 1));
    audio.playPop();
  };

  const handleReset = () => {
    loadLevel(levelIndex);
    audio.playPop();
  };

  const currentLevel = LEVELS[levelIndex];

  // Dynamic tube & ball sizing based on number of tubes
  const numTubes = tubes.length;
  const tubeWidthClass = isExpanded
    ? (numTubes <= 4 ? 'w-14 h-48' : 'w-12 h-44')
    : (numTubes <= 3 ? 'w-11 sm:w-12 h-32 sm:h-36' : numTubes <= 4 ? 'w-10 sm:w-11 h-30 sm:h-34' : 'w-8.5 sm:w-10 h-28 sm:h-32');

  const ballSizeClass = isExpanded
    ? (numTubes <= 4 ? 'w-9 h-9' : 'w-8 h-8')
    : (numTubes <= 3 ? 'w-7 sm:w-7.5 h-7 sm:h-7.5' : numTubes <= 4 ? 'w-6.5 sm:w-7 h-6.5 sm:h-7' : 'w-5.5 sm:w-6 h-5.5 sm:h-6');

  return (
    <div className={`relative w-full h-full flex flex-col justify-between bg-[#f6f6f1] overflow-hidden select-none ${isExpanded ? 'p-2' : ''}`}>
      {/* Background blueprint grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 82, 204, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 82, 204, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: isExpanded ? '32px 32px' : '20px 20px'
        }}
      />

      {/* Lab Header bar */}
      <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 border-b border-blue/15 bg-white/75 backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-blue animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-[1.5px] text-blue uppercase">
            {currentLevel.name}
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="font-mono text-[11px] font-medium text-blue/80 tracking-wide">
            MOVES: <span className="font-bold text-blue">{moves}</span>
          </div>

          <div className="flex items-center gap-1 border-l border-blue/20 pl-2">
            <button
              type="button"
              onClick={handleUndo}
              disabled={history.length === 0 || isWon}
              title="Undo Move"
              className="p-1 text-blue/70 hover:text-blue disabled:opacity-25 transition-opacity hover:bg-blue/10 rounded cursor-pointer"
            >
              <Undo2 size={13} />
            </button>
            <button
              type="button"
              onClick={handleReset}
              title="Reset Level"
              className="p-1 text-blue/70 hover:text-blue transition-colors hover:bg-blue/10 rounded cursor-pointer"
            >
              <RotateCcw size={13} />
            </button>
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Mute SFX" : "Unmute SFX"}
              className="p-1 text-blue/70 hover:text-blue transition-colors hover:bg-blue/10 rounded cursor-pointer"
            >
              {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
            </button>
            {onToggleExpand && (
              <button
                type="button"
                onClick={onToggleExpand}
                title={isExpanded ? "Minimize Lab" : "Expand Lab"}
                className="p-1 text-blue/70 hover:text-blue transition-colors hover:bg-blue/10 rounded cursor-pointer ml-0.5"
              >
                {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Playable beaker stage */}
      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center p-2 sm:p-4 ${isExpanded ? 'min-h-[320px]' : 'min-h-[175px]'}`}>
        {/* Beakers Rack Shelf */}
        <div className="relative flex items-end justify-center gap-2 sm:gap-3 md:gap-4 pb-1">
          {tubes.map((tube, tIdx) => {
            const isSelected = selectedTube === tIdx;
            const isShaking = shakingTube === tIdx;
            const hasBalls = tube.length > 0;
            const isSolved = tube.length === TUBE_CAPACITY && tube.every(b => b === tube[0]);

            return (
              <div key={tIdx} className="relative flex flex-col items-center">
                {/* Floating lifted ball indicator when selected */}
                <div className={`${isExpanded ? 'h-10' : 'h-7 sm:h-8'} flex items-center justify-center mb-1`}>
                  <AnimatePresence>
                    {isSelected && hasBalls && (
                      <motion.div
                        initial={{ y: 14, scale: 0.8, opacity: 0 }}
                        animate={{ 
                          y: [0, -3, 0], 
                          scale: 1, 
                          opacity: 1 
                        }}
                        exit={{ y: 14, scale: 0.8, opacity: 0 }}
                        transition={{ 
                          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                          duration: 0.16 
                        }}
                        className={`${ballSizeClass} rounded-full border border-white/60 shadow-md relative`}
                        style={{
                          background: BALL_CONFIGS[tube[tube.length - 1]].gradient,
                          boxShadow: `0 6px 14px ${BALL_CONFIGS[tube[tube.length - 1]].shadow}`
                        }}
                      >
                        <div className="absolute top-0.5 left-1 w-2 h-1.5 bg-white/75 rounded-full blur-[0.3px] rotate-[-25deg]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Beaker Glass Tube */}
                <motion.button
                  type="button"
                  onClick={() => handleTubeClick(tIdx)}
                  animate={{
                    x: isShaking ? [-3, 3, -3, 3, 0] : 0,
                    y: isSelected ? -2 : 0
                  }}
                  transition={{ duration: isShaking ? 0.28 : 0.14 }}
                  className={`
                    group relative ${tubeWidthClass} rounded-b-[22px] cursor-pointer
                    border-2 transition-all duration-200 flex flex-col justify-end p-1 overflow-visible
                    ${isSelected 
                      ? 'border-blue bg-blue/10 shadow-[0_0_16px_rgba(0,82,204,0.22)]' 
                      : isSolved
                      ? 'border-emerald-500/60 bg-emerald-500/5 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                      : 'border-blue/35 bg-white/55 hover:border-blue hover:bg-white/80'
                    }
                  `}
                >
                  {/* Flared Beaker Rim Lip */}
                  <div 
                    className={`
                      absolute -top-1.5 -left-1 -right-1 h-2 rounded-full border-2 transition-colors
                      ${isSelected 
                        ? 'border-blue bg-blue/30' 
                        : isSolved 
                        ? 'border-emerald-500/60 bg-emerald-500/20' 
                        : 'border-blue/40 bg-white/85 group-hover:border-blue'
                      }
                    `}
                  />

                  {/* Beaker graduation measurement lines */}
                  <div className="absolute left-1 top-3.5 bottom-3.5 w-1.5 flex flex-col justify-between pointer-events-none opacity-40">
                    <div className="w-1.5 h-[1px] bg-blue" />
                    <div className="w-1 h-[1px] bg-blue" />
                    <div className="w-1.5 h-[1px] bg-blue" />
                    <div className="w-1 h-[1px] bg-blue" />
                    <div className="w-1.5 h-[1px] bg-blue" />
                  </div>

                  {/* Vertical glass specular reflection streak */}
                  <div className="absolute right-1 top-2 bottom-3 w-1 bg-gradient-to-b from-white/80 via-white/25 to-transparent rounded-full pointer-events-none opacity-70" />

                  {/* Stacked Balls inside beaker */}
                  <div className="relative z-10 w-full flex flex-col-reverse items-center gap-0.5 sm:gap-1 mb-0.5">
                    {tube.map((ballColor, bIdx) => {
                      const isTopAndSelected = isSelected && bIdx === tube.length - 1;
                      if (isTopAndSelected) {
                        return (
                          <div 
                            key={bIdx} 
                            className={`${ballSizeClass} rounded-full opacity-0`}
                          />
                        );
                      }

                      const config = BALL_CONFIGS[ballColor];
                      return (
                        <motion.div
                          key={bIdx}
                          layout
                          initial={{ scale: 0.8, y: -15, opacity: 0 }}
                          animate={{ scale: 1, y: 0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 360, damping: 24 }}
                          className={`${ballSizeClass} rounded-full border border-white/50 relative shrink-0`}
                          style={{
                            background: config.gradient,
                            boxShadow: `inset 0 -2px 3px rgba(0,0,0,0.2), 0 2px 5px ${config.shadow}`
                          }}
                        >
                          <div className="absolute top-0.5 left-1 w-1.5 h-1 bg-white/75 rounded-full blur-[0.2px] rotate-[-25deg]" />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Solved spark badge */}
                  {isSolved && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-3 right-0 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm"
                    >
                      <Sparkles size={9} />
                    </motion.div>
                  )}
                </motion.button>

                {/* Tube stand base plate */}
                <div className="w-10 sm:w-12 h-1 bg-blue/15 rounded-full mt-1 blur-[0.4px]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Card footer instruction / quick navigation */}
      <div className="relative z-10 flex items-center justify-between px-3.5 py-2 border-t border-blue/15 bg-white/80">
        <p className="font-mono text-[11px] uppercase tracking-[1.2px] text-blue/70">
          TAP BEAKER TO POUR &bull; SORT BY HUE
        </p>

        <button
          type="button"
          onClick={() => loadLevel(levelIndex + 1)}
          className="flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-[1px] text-blue hover:underline cursor-pointer"
        >
          NEXT LEVEL <ChevronRight size={11} />
        </button>
      </div>

      {/* Win celebration modal overlay */}
      <AnimatePresence>
        {isWon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 bg-blue/90 backdrop-blur-sm flex flex-col items-center justify-center p-5 text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.7, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="flex flex-col items-center max-w-xs"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center mb-2.5 shadow-inner">
                <Trophy size={22} className="text-yellow-300" />
              </div>

              <span className="font-mono text-[11px] tracking-[2.5px] text-white/80 uppercase mb-1">
                SEPARATION COMPLETE
              </span>
              <h4 className="font-sans font-extrabold text-[16px] tracking-normal mb-1">
                100% Purity Achieved!
              </h4>
              <p className="font-mono text-[11px] text-white/80 mb-4">
                Cleared in {moves} moves. Perfect chromatography!
              </p>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-3.5 py-1.5 border border-white/40 text-white font-mono text-[11px] font-bold uppercase tracking-[1px] hover:bg-white/10 rounded transition-colors cursor-pointer"
                >
                  REPLAY
                </button>
                <button
                  type="button"
                  onClick={() => loadLevel(levelIndex + 1)}
                  className="px-4 py-1.5 bg-white text-blue font-mono text-[11px] font-bold uppercase tracking-[1px] hover:bg-cream rounded shadow-md transition-colors cursor-pointer"
                >
                  NEXT LEVEL &rarr;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Wrapper Card for Homepage with optional Fullscreen Modal expansion
export function BallBeakerCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="border border-blue/10 hover:border-blue/30 transition-colors h-full flex flex-col justify-between bg-cream" id="ball-beaker-card">
        {/* Playable Stage Area matching other cards' aspect ratio */}
        <div className="relative overflow-hidden aspect-[1.49] min-h-[250px] bg-[#f6f6f1] flex flex-col border-b border-blue/10">
          <BallBeakerGame onToggleExpand={() => setIsModalOpen(true)} />
        </div>

        {/* Card Metadata matching portfolio typography */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[2px] opacity-60">2026 // STUDIO LAB</span>
            <span className="font-mono text-[11px] uppercase tracking-[2px] text-blue">PLAYABLE · BALL BEAKER SORT</span>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-sans font-bold text-[16px] tracking-normal text-blue">Ball Beaker Sort</h3>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="font-mono text-[11px] text-blue uppercase tracking-[1px] flex items-center gap-1 hover:underline cursor-pointer"
              title="Open Fullscreen Lab"
            >
              EXPAND <Maximize2 size={12} />
            </button>
          </div>
          <p className="font-mono text-[16px] leading-[1.8em] text-blue/80 max-w-md">
            A laboratory sorting puzzle inspired by Lesley's favorite game. Isolate, pour, and organize the chromatic orbs by hue to clear each beaker.
          </p>
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="bg-cream border-2 border-blue w-full max-w-2xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-blue/15 bg-white/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue animate-pulse" />
                  <h3 className="font-sans font-bold text-[16px] text-blue">
                    Lesley's Lab: Ball Beaker Sort
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 text-blue hover:bg-blue/10 rounded-full transition-colors cursor-pointer"
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="h-[460px] sm:h-[520px] w-full">
                <BallBeakerGame isExpanded onToggleExpand={() => setIsModalOpen(false)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
