export const Reset: string = '\x1b[0m';

export const effects = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};
export type Effect = keyof typeof effects;

export type Color = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white"
export type Colors = { [key in Color]: string };

export const fontColors: Colors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};
export type FontColor = keyof typeof fontColors;

export const backgroundColors: Colors = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};
export type BackgroundColor = keyof typeof backgroundColors;
export const contrast: { [key in Color]: 'white' | 'black' } = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};
export type Contrast = keyof typeof contrast;

export type Options = {
    font?: Color,
    background?: Color,
    effects?: Effect[]
}