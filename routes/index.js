
/*
 * GET home page.
 */
arr=[];
exports.index = function(req, res){
  res.render('index', {array:arr});
};
exports.borrar=function(req,res){
	arr=[];
	res.render('index',{array:arr});
}
exports.form=function(req,res){
	var telefono=req.body.tel;
	if(telefono.length>8){
		arr.push([req.body.nombre,req.body.tel]);
		console.log(arr);
		res.render('index',{array:arr,mostrar:""});
	}else{
		res.render('index',{array:arr,mostrar:"mostrar"});
	}

};
