// Compiled using typings@0.5.2
// Source: custom_typings/invariant.d.ts
declare module 'invariant' {
  type invariant = (condition: boolean, message: string, ...args: string[]) => void

  var _invariant: invariant

  export = _invariant
}