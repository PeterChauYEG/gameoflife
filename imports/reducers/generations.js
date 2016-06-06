export default function generations(state = [], action) {
  switch (action.type) {
    case 'CLEAR_BOARD':
      return 0
    case 'UPDATE_BOARD':
      return action.generations
    default:
      return state
  }
}