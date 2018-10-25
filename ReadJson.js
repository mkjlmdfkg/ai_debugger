class ReadJson
{
	constructor()
	{
		this.mapDatas = JSON.parse(mapData);
		this.inputMoves=JSON.parse(listMoves)
		//this.loadRessources();
	}
	loadRessources()
	{
		/*$.ajax(
		{
			url:"MapsJson.json",
			dataType : 'json',
			async:false
		}).done(function(data){
			console.log(data);
		});*/
	}
}

//let jsonRe = new ReadJson();