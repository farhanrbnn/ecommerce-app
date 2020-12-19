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
    		'status':'404',
    		'err':'Not Found',
    		'data': {}
    	})
    }

    badrequest400(res,msg) {
        res.json({
            'status':'400',
            'message':msg,
            'data':{}
        })

    }

    servererror500(res, err) {
        res.json({
            'status':'500',
            'error': err,
            'data': {}
        })
    }

}

module.exports = returnStatus