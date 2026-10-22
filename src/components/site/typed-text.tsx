import { useEffect, useState } from "react";

const phrases = ["For the plans that matter.", "For your next big chapter.", "For life's little surprises."];

export function TypedText() {
  const [text, setText] = useState(phrases[0] ?? "");
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    let phrase = 0;
    let count = 0;
    let deleting = false;
    const tick = () => {
      const current = phrases[phrase] ?? "";
      count += deleting ? -1 : 1;
      setText(current.slice(0, count));
      let delay = deleting ? 38 : 72;
      if (!deleting && count === current.length) { deleting = true; delay = 1900; }
      else if (deleting && count === 0) { deleting = false; phrase = (phrase + 1) % phrases.length; delay = 300; }
      timer = setTimeout(tick, delay);
    };
    const start = () => {
      clearTimeout(timer);
      if (media.matches) { setText(phrases[0] ?? ""); return; }
      phrase = 0; count = 0; deleting = false;
      setText(""); timer = setTimeout(tick, 500);
    };
    start();
    media.addEventListener("change", start);
    return () => { clearTimeout(timer); media.removeEventListener("change", start); };
  }, []);
  return <span className="typed-line"><span className="sr-only">For the plans that matter.</span><span aria-hidden="true">{text}<span className="typing-caret" /></span></span>;
}
