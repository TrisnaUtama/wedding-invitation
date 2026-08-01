import { useState, useRef, useEffect, useCallback } from 'react';

export default function useAudio(src) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [src]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying((p) => !p);
  }, [playing]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || playing) return;
    audio.play().catch(() => {});
    setPlaying(true);
  }, [playing]);

  return { playing, toggle, play, volume, setVolume };
}
