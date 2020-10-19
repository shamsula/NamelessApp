import {css, DefaultTheme} from 'styled-components'
// import 'normalize.css'

enum Colours {
    //pastel
    thistlee = '#E0BBE4',
    lavenderPurple = '#957DAD',
    pastelViolet = '#D291BC',
    cottonCandy = '#FEC8D8',
    lumber = '#FFDFD3',

    //pastel backyard
    corn = '#f7ef64',
    honedew = '#f3faf1',
    paleSpringBud = '#e2eec2',
    lightMossGreen2 = '#b4d7a2',

    //
 crystal = '#a3d6d4',
 champagne = '#f1e9cb',
 lightMossGreen = '#c2d5a7',
 cadetBlue = '#b0abca',
 kobi = '#e2a9be',
 desertSand = '#e1c6ac'
}

enum FontFamilies {
    heading = '\'Russo One\',Helvetica, Arial, sans-serif',
    body = '\'Kanit\',Helvetica, Arial, sans-serif',
    cursive = '\'Dancing Script\',Helvetica, Arial, sans-serif',
    paragraph = '\'Dawning of a New Day\',Helvetica, Arial, sans-serif',
    narrow = '\'Wire One\',Helvetica, Arial, sans-serif',
}

export interface Theme extends DefaultTheme {
    colours: typeof Colours,
    boxShadows: string[],
    textShadow: string[],
    fontFamilies: typeof FontFamilies
}

export const theme: Theme = {
    colours: Colours,
    boxShadows: [
        '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
      ],
    textShadow: [
        '1px 1px 0.4px rgba(0,0,0,0.3)',
        '-2px 1px 1.2px rgba(0,0,0,0.4)',
    ],
    fontFamilies: FontFamilies,
}


