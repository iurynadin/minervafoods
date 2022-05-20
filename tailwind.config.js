let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    namedGroups: ["1", "2", "3", "4", "5"],

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        p427: "#D0D3D4",
        p428: "#C1C6C8",
        p429: "#A3AAAD",
        p430: "#7D878E",
        p431: "#5C6770",
        "minerva-c2": "#BDB58C",
        "minerva-c1": "#E3E0B0",
        "minerva-c3": "#F5F2D4",
        "minerva-a1": "#E84752",
        "minerva-a2": "#BF404D",
        "minerva-a3": "#EB7580",
        "minerva-b1": "#2B3D4A",
        "minerva-b2": "#24303B",
        "minerva-b3": "#385463",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        noto_sans_tc: ["Noto Sans TC"],
        noto_kufi_arabic: ["Noto Kufi Arabic"],
        klarheit: ["KK-regular"],
        klarheit_light: ["KK-light"],
        klarheit_medium: ["KK-medium"],
        klarheit_semibold: ["KK-semibold"],
        klarheit_bold: ["KK-bold"],
        klarheit_extrabold: ["KK-extrabold"],
      },
      aspectRatio: {
        home: "16 / 9",
        hero: "16 / 7.8",
        m_capa: "14:9",
      },
      transitionProperty: {
        font: "font-weight, font",
        aall: "display, visibility, color, backgroundColor, borderColor, textDecorationColor, opacity, boxShadow, transform",
      },
      animation: {
        slotdown: "slotdown 0.4s cubic-bezier(0.230, 1.000, 0.320, 1.000)  ",
        slotup: "slotup 0.4s  cubic-bezier(0.230, 1.000, 0.320, 1.000)  ",
        slotindown:
          "slotindown 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000)   ",
        slotinup: "slotinup 0.8s cubic-bezier(0.230, 1.000, 0.320, 1.000)   ",
        sound: "pulsesound 0.6s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        slotdown: {
          from: {
            transform: "translateY(-100px)",
          },
          to: {
            transform: "translateY(800px)",
          },
        },
        slotup: {
          from: {
            transform: "translateY(100px)",
          },
          to: {
            transform: "translateY(-800px)",
          },
        },
        slotindown: {
          from: {
            transform: "translateY(-1000px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slotinup: {
          from: {
            transform: "translateY(1000px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        pulsesound: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.16)' },
        },
      },
      scale: {
        101: "1.01",
        115: "1.15",
      },
    },
  },
  plugins: [
    require("tailwindcss-labeled-groups")([
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "35",
    ]),
  ],
};

// module.exports = {
//   content: ["./pages/*.{html,js}"],
//   theme: {
//       container: {
//           center: true,
//           padding: {
//               DEFAULT: "1rem",
//           },
//       },
//       extend: {
//           colors: {
//               "cinza1-1": "#929288",
//               "cinza1-2": "#6C6C64",
//               "cinza1-3": "#C6BFB5",
//               "cinza2-1": "#D5D1C3",
//               "cinza2-2": "#B1AC9C",
//               "cinza3-1": "rgba(232, 229, 224, 0.702)",
//               "cinza3-2": "rgba(232, 229, 224, 0.4)",
//               verde1: "#29754D",
//               verde2: "#005034",
//               verde3: "#75A189",
//               verde4: "#1d988a",
//               "verde-claro": "#75d9a2",
//               "verde-semnome": "#CCC066",
//               "verde-semnome-transp": "#ccc06640",
//               "verde-amarelo": "#e1ff15",
//               "verde-amarelo-transp": "rgba(255,255,21,0.25)",
//               hortela1: "#1E988A",
//               "2021_01": "#95CFE5",
//               "2021_02": "#EC8D9E",
//               "2021_03": "#DCE17E",
//               alfazema1: "#456AA6",
//               alfazema2: "#89B8EA",
//               a0: "#66B3FF",
//               rosa1: "#8D3C45",
//               whiteopacity: "rgba(255,255,255,0.4)",
//           },
//           fontFamily: {
//               montserrat: ["Montserrat"],
//               vag_thin: ["VAG-thin"],
//               vag_light: ["VAG-light"],
//               vag_bold: ["VAG-bold"],
//               vag_black: ["VAG-black"],
//           },
//           boxShadow: {
//               saibaMaisRosa1: "0px 0px 10px 2px rgba(152, 27, 27, 0.5)",
//               saibaMaisAlfazema1: "0px 0px 10px 2px rgba(69, 106, 166, 0.5)",
//               saibaMaisVerde3: "0px 5px 30px #E0EFDC",
//               saibaMaisVerdeSemNome:
//                   "0px 0px 10px 2px rgba(204, 192, 102, 0.8)",
//               btnFooter: "0px 0px 10px 2px rgba(255, 255, 255, 0.5)",
//               boxEstrategia: "0px 5px 30px #C6D4C8",
//               boxEstrategiaIcons: "0px 2px 12px #00000029",
//               boxPresenca: "0px 5px 45px #75D9A247",
//               boxPessoasSaudaveis: "0px 5px 20px #89B8EA7A",
//               iconeCirclePessoas: "0px 5px 20px #95CFE56B",
//               boxNegociosSaudaveis: "0px 5px 20px #EBCFDC",
//           },
//           scale: {
//               101: "1.01",
//               103: "1.03",
//           },
//           aspectRatio: {
//               hero: '17 / 10',
//           },
//           backgroundImage: {
//               hero1: "url('/pages/backgrounds/hero.jpg')",
//               proposito : "url('/pages/backgrounds/proposito-estrategia.svg')",
//               presenca : "url('/pages/backgrounds/nossa-presenca.png')",
//               "visao-futuro" : "url('/pages/backgrounds/visao-futuro.png')",
//               sustentabilidade : "url('/pages/backgrounds/sustentabilidade.png')",
//               "ondas-sustentabilidade" : "url('/pages/backgrounds/ondas_sustentabilidade2.png')",
//               pessoas : "url('/pages/backgrounds/pessoas.svg')",
//               planeta : "url('/pages/backgrounds/planeta.svg')",
//           },
//           backgroundPosition: {
//               centerTop: 'center top',
//               centerBottom: 'center bottom',
//               postSustentabilidade: 'right 8%',
//               "postPessoas-xs": '46% -180px',
//               "postPessoas-sm": '60% -110px',
//               "postPessoas-lg": '76% -110px',
//               "postPlaneta-xl": 'center 30px',
//               "postPlaneta-lg": 'center -10px',
//               "postPlaneta-md": '40% -10px',
//               "postPlaneta-xs": '35% -40px',
//           },
//           backgroundSize: {
//               "sustentabilidade-lg": '75% auto',
//           }
//       },
//   },
//   plugins: [],
// };
