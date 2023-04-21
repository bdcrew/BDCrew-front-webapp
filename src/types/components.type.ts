type Size = "small" | "medium" | "large";
type Theme = "primary" | "secondary" | "cancel";
type FontSize = 12 | 14 | 16 | 18 | 32;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
type ButtonTheme = Theme;
type ButtonSize = Size | "h-15.5" | "h-6";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {}
type TypographyTheme = Theme;
type TypographyAlign = "center" | "inherit" | "justify" | "left" | "right";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
