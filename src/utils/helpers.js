import dayjs from 'dayjs';
import 'dayjs/locale/id';
dayjs.locale('id');

export function formatDate(dateStr, fmt = 'DD MMMM YYYY') {
  return dayjs(dateStr).format(fmt);
}

export function getTimeLeft(dateStr) {
  const target = dayjs(dateStr);
  const now = dayjs();
  const diff = target.diff(now, 'second');
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400),
    hours: Math.floor((diff % 86400) / 3600),
    minutes: Math.floor((diff % 3600) / 60),
    seconds: diff % 60,
  };
}

export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return true;
  }
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
