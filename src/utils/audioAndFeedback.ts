// Web Audio API synthesizer for instant responsive feedback without external mp3 dependencies
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playSuccessChime(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Pleasant ascending major triad (C5 -> E5 -> G5)
    const freqs = [523.25, 659.25, 783.99];

    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0.001, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.12, now + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.28);
    });
  } catch (err) {
    console.debug('Audio playback skipped', err);
  }
}

export function playErrorTone(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Soft descending tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.3);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.1, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.38);
  } catch (err) {
    console.debug('Audio playback skipped', err);
  }
}

export function playTickWarning(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.05, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch (err) {
    console.debug('Audio playback skipped', err);
  }
}

const ENCOURAGING_PRAISES = [
  'Outstanding clinical deduction!',
  'Spot on! Masterful enzyme recall!',
  'Lightning fast reflex! Flawless answer!',
  'Brilliant! High-yield biochemical mastery!',
  'Exact diagnostic precision!',
  'Superb! That is high-level USMLE reasoning!',
  'Sharp acumen! Perfect metabolic pathway knowledge!',
  'Excellent reaction speed and accuracy!',
];

export function getRandomEncouragingMessage(timeRemainingSeconds: number): {
  message: string;
  speedBadge: string;
  speedBonusPoints: number;
} {
  const message =
    ENCOURAGING_PRAISES[Math.floor(Math.random() * ENCOURAGING_PRAISES.length)];

  if (timeRemainingSeconds >= 18) {
    return {
      message,
      speedBadge: '⚡ Ultra-Fast Reflex (< 7s)',
      speedBonusPoints: 30,
    };
  } else if (timeRemainingSeconds >= 10) {
    return {
      message,
      speedBadge: '⏱️ Rapid Clinical Pacing',
      speedBonusPoints: 15,
    };
  } else {
    return {
      message,
      speedBadge: '🎯 Solid Calculated Answer',
      speedBonusPoints: 5,
    };
  }
}
