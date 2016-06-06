export default function controls(state = [], action) {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        isRunning: true,
      }
    case 'PAUSE_GAME':
      return {
        ...state,
        isRunning: false,
      }
    case 'CLEAR_BOARD':
      return  {
        ...state,
        gameSpeed: 500,
        isRunning: false,
      }
    case 'INCREASE_SPEED':
      return {
        ...state,
        gameSpeed: action.gameSpeed / 2,
      }
    case 'DECREASE_SPEED':
      return {
        ...state,
        gameSpeed: action.gameSpeed * 2,
      }
    default:
      return state
  }
}