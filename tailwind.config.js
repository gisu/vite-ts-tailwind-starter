const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  corePlugins: {
    container: false,
    gridTemplateColumns: false,
    gridColumnGap: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridGap: false,
    gridColumn: false,
    gridRowGap: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    backgroundOpacity: false,
    textOpacity: false,
    borderOpacity: false,
    divideOpacity: false
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,ts}']
  },
  // theme: {
  //   extend: {
  //     // here's how to extend fonts if needed
  //     fontFamily: {
  //       sans: [...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    plugin(function({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()'
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
    function({ addUtilities }) {
      const additional = {
        '.cmt-2 + .cmt-2': {
          marginTop: '.5rem'
        },
        '.cmt-4 + .cmt-4': {
          marginTop: '1rem'
        },
        '.cmt-8 + .cmt-8': {
          marginTop: '2rem'
        },
        '.cmt-16 + .cmt-16': {
          marginTop: '4rem'
        },
        '.cmt-1 + .cmt-1': {
          marginTop: '.25rem'
        },
        '.position-below': {
          bottom: '0',
          transform: 'translateY(100%)'
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.pin-vert-center': {
          top: '50%',
          transform: 'translateY(-50%)'
        },
        '.pin-horz-center': {
          left: '50%',
          transform: 'translateX(-50%)'
        },
        '.hyphens': {
          hyphens: 'auto',
          hyphenLimitChars: '6 3 2'
        },
        '.no-hyphens': {
          hyphens: 'manual'
        },
        '.blur-3': {
          filter: 'blur(3px)'
        },
        '.container': {
          width: '100%',
          minWidth: '320px',
          maxWidth: '1000px'
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.last-mb-no > :last-child': {
          marginBottom: '0'
        }
      }

      addUtilities(additional)
    }
  ]
}
