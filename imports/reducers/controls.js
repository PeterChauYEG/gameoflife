export default function controls(state = [], action) {
  switch (action.type) {
    case 'START_GAME':
      return {
        isRunning: true
      }
    case 'PAUSE_GAME':
      return {
        isRunning: false
      }
    default:
      return state
  }
}