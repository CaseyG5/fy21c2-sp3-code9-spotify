module.exports = {
  purge: [
      'index.html',
      'playlist2.html',
      'login.html',
      'login2.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: {
        basic: '#ffffff'
      },
      black: {
        basic: '#000000',
        emily_main: '#090b0f',
        emily_pl2: '#120609',
        emily_pl: '#05070d',
      },
      gray: {
        elapsed: '#a9a9a9',
        see_more: '#9e9e9e',
        artist: '#999999',
        controls: '#999999',
        time_vol: '#323232',
        search_field: '#262626',
        behind_login: '#1F232D',
        border: '#1f1f1f',
        home_tiles: '#191919',
        home_charcoal1: '#161616',
        control_bg: '#151515',
        home_charcoal2: '#0e0e0e',
      },
      blue: {
        mix_title: '#f9fbfc',  // or white?
        liked_b: '#778a85',
        fb_icon: '#175DEE',
        signup: '#4185F2',
        signup_btn: '#2460C5',
        liked_a: '#2b1a96',
        new_blue: '#192055',
        dark_teal: '#274767',
        panel1: '#2b3946',
        panel2: '#242a30',
        right_main: '#111821',
      },
      red: {
        bright: '#cb1823',
        top_upper: '#901b22',
        top_lower: '#3f1113',
        bottom_upper: '#340d0f',
        almost_black: '#0e0e0e',

      },
      green: {
        play: '#42ae43',
      },
      yellow: {
        gold: '#DAA520',
      },
      pink: {
        signup: '#9E2484',
      },
    },
    extend: {
      gridTemplateColumns: {
        '3': 'repeat(3, minmax(750px, 1fr))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
