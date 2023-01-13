export type InputAction =
  | { type: 'INPUT', value: any }
  | { type: 'BLUR' }
  | { type: 'RESET' }