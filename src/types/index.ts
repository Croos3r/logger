export type Type = 'info' | 'success' | 'warn' | 'error' | 'default'

export enum Color {
  Reset = '\x1B[0m',
  Bright = '\x1B[1m',
  Dim = '\x1B[2m',
  Underscore = '\x1B[4m',
  Blink = '\x1B[5m',
  Reverse = '\x1B[7m',
  Hidden = '\x1B[8m',

  Black = '\x1B[30m',
  Red = '\x1B[31m',
  Green = '\x1B[32m',
  Yellow = '\x1B[33m',
  Blue = '\x1B[34m',
  Magenta = '\x1B[35m',
  Cyan = '\x1B[36m',
  White = '\x1B[37m',

  BgBlack = '\x1B[40m',
  BgRed = '\x1B[41m',
  BgGreen = '\x1B[42m',
  BgYellow = '\x1B[43m',
  BgBlue = '\x1B[44m',
  BgMagenta = '\x1B[45m',
  BgCyan = '\x1B[46m',
  BgWhite = '\x1B[47m',
}