import { createVuetify } from 'vuetify'

const light = {
    dark: false,
    colors: {
        background: '#808080',
        surface: '#6200EE',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

const dark = {
    dark: true,
    colors: {
    }
}

export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light,
            dark
        }
    }
})