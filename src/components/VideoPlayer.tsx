import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  id?: string;
}

export function VideoPlayer({ src, className = "", id }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('0:00');
  const [durationFormatted, setDurationFormatted] = useState('0:00');
  const [userPaused, setUserPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Helper to format video seconds as M:SS
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Intersection Observer: Start playing when scrolled into view, pause when out
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current && !userPaused) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.then(() => setIsPlaying(true)).catch(() => {});
              }
            }
          } else {
            setIsInView(false);
            if (videoRef.current) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.25 } // Trigger when 25% of the video is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [userPaused]);

  // Handle Play / Pause
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setUserPaused(true);
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setUserPaused(false);
          })
          .catch(() => {});
      }
    }
  };

  // Handle Mute / Unmute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Update progress bar & time labels
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    if (dur > 0) {
      setProgress((curr / dur) * 100);
      setCurrentTimeFormatted(formatTime(curr));
      setDurationFormatted(formatTime(dur));
    }
  };

  // Scrub through video
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newProgress = parseFloat(e.target.value);
    const seekTime = (newProgress / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(newProgress);
  };

  // Toggle Fullscreen
  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  return (
    <div 
      ref={containerRef} 
      id={id}
      className={`relative group overflow-hidden bg-cream/20 shadow-sm ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onClick={togglePlay}
        className="w-full h-auto object-cover cursor-pointer block scale-[1.025] transform origin-center"
      />

      {/* Sleek, Modest Playback Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 flex flex-col gap-2.5 z-20 opacity-90 group-hover:opacity-100">
        
        {/* Minimal Progress Bar */}
        <div className="w-full flex items-center relative">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-1 bg-white/30 hover:h-1.5 accent-blue cursor-pointer transition-all appearance-none"
            style={{
              background: `linear-gradient(to right, #0066FF ${progress}%, rgba(255, 255, 255, 0.3) ${progress}%)`
            }}
            aria-label="Video Timeline"
          />
        </div>

        {/* Control Buttons & Timestamp */}
        <div className="flex items-center justify-between text-white font-mono text-[11px] tracking-[1px]">
          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-blue hover:text-white backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? (
                <Pause size={13} fill="currentColor" />
              ) : (
                <Play size={13} fill="currentColor" className="ml-0.5" />
              )}
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={toggleMute}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-blue hover:text-white backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer"
              title={isMuted ? "Unmute" : "Mute Sound"}
              aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            {/* Time Stamp */}
            <span className="opacity-95 font-mono text-[12px] font-semibold tracking-[0.5px] uppercase bg-black/50 px-2.5 py-1 border border-white/15">
              {currentTimeFormatted} / {durationFormatted}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Visibility / Auto Status Badge */}
            <span className="hidden sm:inline-block font-mono text-[11px] font-medium uppercase tracking-[1px] text-white/90 bg-black/60 px-2.5 py-1 border border-white/15">
              {isInView ? (isPlaying ? "Auto Playing" : "Paused") : "Out of View"}
            </span>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-blue hover:text-white backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer"
              title="Fullscreen"
              aria-label="Fullscreen"
            >
              <Maximize size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
