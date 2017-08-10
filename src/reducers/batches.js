const batches = [
  {
    title: 'Batch # 1',
    students: 'No of Students ' + 6,
    start: "2017-01-01",
    end: "2017-01-31"

  },
  {
    title: 'Batch # 2',
    students: 'No of Students ' + 6,
    start: "2017-02-01",
    end: "2017-02-28"

  },
  {
    title: 'Batch # 3',
    students: 'No of Students ' + 6,
    start: "2017-03-01",
    end: "2017-03-31"

  },
]

export default (state = batches, { type, payload } = {}) => {
  return state
}
