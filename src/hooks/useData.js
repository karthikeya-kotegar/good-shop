import data from '../data.json'

const useData = ({ id }) => {
  if (typeof id === 'undefined') return { data }

  if (typeof id === 'number') {
    return {
      data: data.find(item => item.id === id)
    }
  }

}

export default useData