class returnStatus {
	success200(res, getData) {
		res.json({
		    'status': '200',
		    'messages': 'success',
		    'data': getData
	   })
    }

    notfound404(res) {
    	res.json({
    		'status':'200',
    		'messages':'Not Found',
    		'data': {}
    	})
    }

}

module.exports = returnStatus