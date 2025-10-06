import { style } from "@vanilla-extract/css";

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
