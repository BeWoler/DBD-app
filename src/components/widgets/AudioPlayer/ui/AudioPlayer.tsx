'use client';

import { useState, useEffect, useMemo } from 'react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audio = useMemo(() => {
    if (typeof Audio === 'undefined') return null;
    const newAudio = new Audio('/audio/DBDTheme.mp3');
    newAudio.volume = 0.1;
    newAudio.loop = true;
    return newAudio;
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audio?.play();
    } else {
      audio?.pause();
    }

    return () => audio?.pause();
  }, [isPlaying, audio]);

  const toggleAudio = () => setIsPlaying(!isPlaying);

  return (
    <button
      type="button"
      onClick={toggleAudio}
      className="fixed bottom-4 right-4 select-none rounded-full bg-gray-800 p-3 text-white shadow-lg transition hover:bg-gray-700"
      aria-label="Toggle Audio"
    >
      {isPlaying ? '🔊' : '🔇'}
    </button>
  );
};
