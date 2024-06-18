/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(140.88deg, #eb5231 -29.15%, #571fcf 151.64%), linear-gradient(0deg, #0000001a, #0000001a)',
        form: 'url("/images/background.png")'
      },

      colors: {
        dark: '#4d4d4d',
        'red-550': '#f34040',
        'orange-250': '#fa7c54',
        'orange-550': '#f4683c',
        'gray-350': '#ababab',
        'gray-550': '#8ea2b9',
        'gray-150': '#e0e4ec',
        silver: '#c7c7c7',
        'silver-250': '#8a8a8a',
        'silver-350': '#f3f3f7',
        'green-450': '#42bb4e',
        'green-dark': '#1ea97c',
        rating: '#face1b',
        404: '#f7f9fb'
      },

      fontSize: {
        'xs-2': '10px',
        xs: '12px',
        xsm: '14px',
        sm: '15px',
        md: '17px',
        lg: '20px',
        xl: '25px',
        xxl: '35px',
        xxxl: '45px'
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },

      width: {
        'avatar-sm': '45px',
        'avatar-md': '60px',
        'avatar-lg': '100px',
        sidebar: '306px',
        140: '140px',
        menu: '203px',
        445: '445px',
        547: '547px',
        'tb-sm': '6%',
        'tb-md': '16%',
        'tb-lg': '40%',
        'tb-full': '98%',
        'card-borrow': '308px',
        shelf: '123px',
        'card-preview': '273px'
      },

      maxWidth: {
        sm: '80px',
        450: '450px',
        487: '487px'
      },

      height: {
        'avatar-sm': '45px',
        'avtar-md': '60px',
        'avatar-lg': '100px',
        shelf: '170px',
        'prev-book': '277px',
        50: '50px',
        170: '170px',
        265: '265px',
        418: '418px',
        'sign-in': '770px',
        'sign-up': '850px',
        main: 'calc(100vh - 111px)',
        'card-borrow': '260px',
        form: '970px'
      },

      boxShadow: {
        normal: '0 0 4px 0 #000',
        big: '0 0 10px 5px #e1e1e1a3',
        light: '0 0 4px 0 #a2a2a2',
        form: '0px 0px 20px 0px #00000040'
      },

      lineHeight: {
        2: '10px',
        '2-xs': '2px',
        30: '30px'
      },

      borderRadius: {
        '2x2': '20px',
        d3: '3px'
      },

      borderSpacing: {
        'tb-0': '0',
        'tb-30': '30px'
      },

      margin: {
        logo: '20px 0 20px 36px',
        form: '50px auto'
      },

      flexBasis: {
        form: 'calc(50% - 17px)'
      },

      transitionProperty: {
        toast: 'all linear 0.3s'
      },

      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out'
      }
    }
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar::-webkit-scrollbar': {
          width: '4px',
          height: '4px'
        },
        '.scrollbar::-webkit-scrollbar-track': {
          borderRadius: '3px'
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#4d4d4d',
          borderRadius: '3px'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};
