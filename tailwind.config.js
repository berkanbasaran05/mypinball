module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Inter fontunu tanımlayın
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          white: {
            primary: "#ffffff",
            secondary: "#f3f3f3",
          },
          blue: {
            primary: "#0047FF",
            primaryLight: "#EEF3FF",
          },
          palette: {
            primary: "#047857",
            primaryLight: "#f0fdfa",
          },
          turquoise: {
            primary: "#48bdcd",
          },
          black: {
            primary: "#282828",
            secondary: "#757575",
            light: "#E7E7E9",
            ultralight: "#DCDCDC",
          },
          red: {
            primary: "#FF6463",
            primaryLight: "#FFF2F3",
          },
          yellow: {
            primary: "#E1F050",
            primaryLight: "#FEF8F0",
          },
          green: {
            primary: "#23AD00",
            primaryLight: "#DEF7EC",
          },
          background: "#f7f7f7",
        },
        // Gece modu için renkler
        night: {
          background: "#000000", // Gece modu arka plan rengi
          text: "#ffffff", // Gece modu metin rengi
          // Diğer gece modu renkleri burada tanımlanabilir
        },
      },
    },
  },
  plugins: [],
};
