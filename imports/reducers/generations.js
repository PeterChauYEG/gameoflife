export default function generations(state = [], action) {
  switch (action.type) {
    case 'SET_GENERATION':
      return action.generations
    default:
      return state
  }
}