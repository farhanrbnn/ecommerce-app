import request from '../service'

class DataService {
	create (data) {
		return request.post('/post', data)
	}
	getAllData () {
		return request.get('/')
	}
}

export default new DataService()