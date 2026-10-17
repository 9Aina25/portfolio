import { motion, useReducedMotion } from "framer-motion";
import { isPlaceholder } from "../content.js";
import Icon from "./Icon.jsx";

export function Rise({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={`rise-plain ${className}`}>{children}</span>;
  return (
    <span className="rise-mask">
      <motion.span
        className={`rise-in ${className}`}
        initial={{ y: "108%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Ph({ children }) {
  return isPlaceholder(children) ? <span className="ph">{children}</span> : <>{children}</>;
}

export function ExtLink({ href, icon, label, missing, className = "btn-text" }) {
  if (!href || isPlaceholder(href)) {
    return (
      <span className={`${className} is-off`} aria-disabled="true" title={missing}>
        <Icon name={icon} size={18} />
        {label}
      </span>
    );
  }
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <Icon name={icon} size={18} />
      {label}
    </a>
  );
}

export function MediaSlot({ src, caption, video, t }) {
  if (src) {
    return (
      <figure className="media">
        {video ? <video src={src} controls preload="metadata" /> : <img src={src} alt={caption} loading="lazy" />}
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }
  return (
    <figure className="media">
      <div className={`slot ${video ? "slot-video" : ""}`}>
        <Icon name={video ? "play" : "image"} size={28} />
        <span>{video ? t.slotVideo : t.slotImage}</span>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
