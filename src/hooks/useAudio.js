import { useState, useRef, useEffect, useCallback } from "react";

export default function useAudio(src) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = new Audio(src);

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = volume;

    audioRef.current = audio;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    const stop = () => {
      audio.pause();
      audio.currentTime = 0;
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      }
    };

    window.addEventListener("beforeunload", stop);
    window.addEventListener("pagehide", stop);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stop();

      window.removeEventListener("beforeunload", stop);
      window.removeEventListener("pagehide", stop);
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);

      audio.removeAttribute("src");
      audio.load();

      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const stop = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }, []);

  const toggle = useCallback(async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error(err);
      }
    } else {
      audioRef.current.pause();
    }
  }, []);

  return {
    playing,
    play,
    pause,
    stop,
    toggle,
    volume,
    setVolume,
  };
}