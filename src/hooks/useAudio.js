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

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    const stopAudio = () => {
      audio.pause();
      audio.currentTime = 0;
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stopAudio();
      }
    };

    window.addEventListener("beforeunload", stopAudio);
    window.addEventListener("pagehide", stopAudio);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopAudio();

      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);

      window.removeEventListener("beforeunload", stopAudio);
      window.removeEventListener("pagehide", stopAudio);
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

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
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const stop = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  }, []);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (err) {
        console.error(err);
      }
    } else {
      audio.pause();
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