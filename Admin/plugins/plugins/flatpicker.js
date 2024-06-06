const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    addComponents({
        '.flatpickr-day': {
            '@apply text-gray-800 dark:text-white/80': {},

            '&.today': {
                '@apply border-gray-200 dark:border-darkborder': {},
            },
            '&:is(.inRange, .prevMonthDay.inRange, .nextMonthDay.inRange, .today.inRange, .prevMonthDay.today.inRange, .nextMonthDay.today.inRange, :hover, .prevMonthDay:hover, .nextMonthDay:hover, :focus, .prevMonthDay:focus, .nextMonthDay:focus)': {
                '@apply bg-gray-100 border-gray-100 outline-none dark:border-darkborder dark:bg-darklight': {},
            },
            '&.inRange': {
                '@apply text-gray-800': {},
            },
            '&:is(.selected, .startRange, .endRange, .selected.inRange, .startRange.inRange, .endRange.inRange, .selected:focus, .startRange:focus, .endRange:focus, .selected:hover, .startRange:hover, .endRange:hover, .selected.prevMonthDay, .startRange.prevMonthDay, .endRange.prevMonthDay, .selected.nextMonthDay, .startRange.nextMonthDay, .endRange.nextMonthDay)': {
                '@apply !bg-purple !border-purple': {},
            },
            '&:is(.flatpickr-disabled, .flatpickr-disabled:hover, .prevMonthDay, .nextMonthDay, .notAllowed, .notAllowed.prevMonthDay, .notAllowed.nextMonthDay)': {
                '@apply text-gray-300': {},
            },
            '&:is(.today:hover, .today:focus)': {
                '@apply text-gray-500 dark:text-white/50': {},
            }
        },
        '.flatpickr-calendar': {
            '@apply dark:bg-darklight dark:shadow-none': {},
        },
        '.flatpickr-months .flatpickr-month, .flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month' : {
            '@apply dark:text-white/50 dark:fill-white/50': {},
        },
        'span.flatpickr-weekday': {
            '@apply text-gray-500': {},
        },
        '.flatpickr-months' :{
            '&:is(.flatpickr-prev-month:hover, .flatpickr-next-month:hover)': {
                '@apply text-gray-500': {},
                'svg': {
                    '@apply text-red-500': {},
                }
            }
        }
    })
})