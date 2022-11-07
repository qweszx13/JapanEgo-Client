/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        beat: {//박동 애니메이션
          '0%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(1.2)' },
        },
        appear:{//사라짐 애니메이션
          '0%': { transform: 'scale(0)'},
          '70%': { transform: 'scale(1)'}
        },
        smoothy:{//자연스럽게 생성 애니메이션
          '0%': { opacity: 0 },
          '70%': { opacity: 1 }
        },
        eventhover:{//호버시 연하고 진하게 애니메이션
          '0%': { opacity: 1 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 1 }
        },
        eventclick:{//클릭시 왼쪽아래 이동 애니메이션
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(5px) translateX(-5px);' }
        },
        backclick:{//클릭시 왼쪾 이동 애니메이션
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateX(-5px)' }
        },
      },
      animation:{
        beat:'beat 1s',
        appear:'appear 1s',
        smoothy:'smoothy 1s',
        eventhover:'eventhover 1s infinite',
        eventclick:'eventclick 0.1s',
        backclick:'backclick 0.1s'
      }
    },
  },
  plugins: [],
}