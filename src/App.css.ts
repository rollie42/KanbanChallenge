import { keyframes, style } from "@vanilla-extract/css";

export const container = style({
  background: "#0a2540", // dark blue
  color: "#fff",
  padding: "2rem",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  minWidth: "100vw",
});

export const kanbanContainer = style({
  background: "#1e1e1e", // dark gray
  color: "#fff",
  padding: "1rem",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  minHeight: "100px",
  minWidth: "300px",
});

export const kanbanLane = style({
  background: "#2c3e50", // slightly lighter dark blue
  color: "#fff",
  padding: "1rem",
  borderRadius: "8px",
  margin: "0.5rem",
  flex: "1",
  minWidth: "200px",
});

export const taskCard = style({
  background: "#34495e", // even lighter dark blue
  color: "#fff",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const animIn = keyframes({
  "0%": { transform: "translateX(100%)", opacity: 0 },
  "100%": { transform: "translateX(0)", opacity: 1 },
});

export const animOut = keyframes({
  "0%": { transform: "translateX(-100%)", opacity: 0 },
  "100%": { transform: "translateX(0)", opacity: 1 },
});

export const slideInFromRight = style({
  animation: `${animIn} 0.5s ease-out`,
});

export const slideInFromLeft = style({
  animation: `${animOut} 0.5s ease-out`,
});
