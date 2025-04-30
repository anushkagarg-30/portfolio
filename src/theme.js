const lightTheme = {
  name: "light",
  body: "#FFFFFF",
  text: "#343434",                   // Dark text for white background
  dark: "#000000",
  secondaryText: "#444f5a",          // Subtle subtitle color
  accentColor: "#E3405F",            // Main accent (e.g., name color)
  accentBright: "#FC1056",
  projectCard: "#DCE4F2",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#dce4f2",
  imageClothes: "#dce4f2",
  avatarMisc: "#e9ecf2",
  avatarShoes: "#ccd2e3",
  font: "'Poppins', sans-serif",     // Font family
  link: "#3F72AF"                    // Soft blue link
};

const darkTheme = {
  name: "dark",
  body: "#1D1D1D",
  text: "#FFFFFF",                   // Bright white text for dark background
  dark: "#000000",
  secondaryText: "#CCCCCC",          // Light gray subtext for visibility
  accentColor: "#FF6F61",            // Softer, visible accent on dark
  accentBright: "#FF8A65",
  projectCard: "#292A2D",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#292A2D",
  imageClothes: "#000000",
  avatarMisc: "#212121",
  avatarShoes: "#2B2B2B",
  font: "'Poppins', sans-serif",
  link: "#8AB4F8"                    // Soft blue link for dark background
};

export const themes = { light: lightTheme, dark: darkTheme };
