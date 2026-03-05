import { Box, Typography } from "@mui/material";

interface BlurTextProps {
  children: React.ReactNode;
  color: string;
}

export function BlurText({ children, color }: BlurTextProps) {
  return (
    <Box
      component="span"
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {/* BLUR BACKGROUND */}
      <Box
        component="span"
        sx={{
          position: "absolute",
          inset: 0,
          color,
          filter: "blur(8px)",
          opacity: 0.7,
          transform: "translateY(2px)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </Box>

      {/* TEXT FRONT */}
      <Box
        component="span"
        sx={{
          position: "relative",
          color,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
