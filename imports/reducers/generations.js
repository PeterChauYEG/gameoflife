export default function generations(state = [], action) {
  switch (action.type) {
    case 'CLEAR_BOARD':
      return 0
    case 'SET_GENERATION':
      return action.generations
    default:
      return state
  }
}