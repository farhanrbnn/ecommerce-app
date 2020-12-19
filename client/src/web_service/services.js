import request from '../service'

class DataService {
  create (route, data) {
    return request.post(route, data)
  }
  getAllData () {
    return request.get('/')
  }
  getFindById (id) {
    return request.get(id)
  }
}

export default new DataService()
