import request from '../service'

class DataService {
  create (data) {
    return request.post('/post', data)
  }
  getAllData () {
    return request.get('/')
  }
  getFindById(id) {
  	return request.get(id)
  }
}

export default new DataService()
