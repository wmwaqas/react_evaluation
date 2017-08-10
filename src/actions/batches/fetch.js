export const FETCHED_BATCHES = 'FETCHED_BATCHES'

export default () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_BATCHES"
    })
      .then((response) => {
        dispatch({type: "FETCH_BATCHES_FULFILLED", payload: response.data})
      })
  }
}
