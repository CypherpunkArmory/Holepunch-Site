function requestReducer(action) {
  if (action.type.includes('REQUEST')) {
    return { isLoading: true, error: null }
  } else if (action.type.includes('SUCCESS')) {
    return { isLoading: false }
  } else if (action.type.includes('FAILURE')) {
    return { isLoading: false, error: action.error || action }
  }
}

export default requestReducer
