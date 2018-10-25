class GestionMouvements
{
	constructor(tr,jsonFile)
  {
	this.inputMoves=jsonFile.inputMoves;
	this.terr=tr;
	this.currentBot=0;
	this.b=[];
    this.numberMoves=-1;
	this.initBots(jsonFile);
    this.time();
  }
  
  initBots(jsonFile)
  {
	for(let i = 0;i<jsonFile.mapDatas.npcs.length;i++)
		this.b.push(new Bot(jsonFile.mapDatas.npcs[i].cellUID%this.terr.tailleX,Math.floor(jsonFile.mapDatas.npcs[i].cellUID/this.terr.tailleX)));
  }
  
  time()
  {
   	let gm=this;
    setTimeout(function(){
    	gm.move(gm.inputMoves[++gm.numberMoves].dir);
		gm.currentBot=(++gm.currentBot)%gm.b.length;
    	if(gm.numberMoves<=(gm.inputMoves.length-2))
			gm.time();
    },1000);
  }
  move(m)
  {
  	switch(m)
    {
      case 0: this.b[this.currentBot].moveLeft();break;
      case 1: this.b[this.currentBot].moveUpLeft();break;
      case 2: this.b[this.currentBot].moveDownLeft();break;
      case 3: this.b[this.currentBot].moveDownRight();break;
      case 4: this.b[this.currentBot].moveUpRight();break;
      case 5: this.b[this.currentBot].moveRight();break;
    }
    this.peindreAlentours(this.numberMoves);
  }
  
  peindreAlentours()
  {
	  /*console.log((((Math.floor(this.b[this.currentBot].posX/32)-1)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2))*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6)));
	  console.log((((Math.floor(this.b[this.currentBot].posX/32)-1)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2))*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))-1);
	  console.log((((Math.floor(this.b[this.currentBot].posX/32))+	Math.ceil(this.b[this.currentBot].posY/(32-6))%2))*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6)));
	  console.log((((Math.floor(this.b[this.currentBot].posX/32)+1)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2)-1)*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))-1);
	  console.log((((Math.floor(this.b[this.currentBot].posX/32)+1)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2)-1)*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))+1);
	  console.log((((Math.floor(this.b[this.currentBot].posX/32)-1)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2))*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))+1);*/
    this.terr.ter[((Math.floor(this.b[this.currentBot].posX/32)-1))*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))].el.innerHTML="<p>"+this.inputMoves[this.numberMoves].couts[0]+"</p>";
    this.terr.ter[(((Math.floor(this.b[this.currentBot].posX/32)-1)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2))*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))-1].el.innerHTML="<p>"+this.inputMoves[this.numberMoves].couts[1]+"</p>";
    this.terr.ter[((Math.floor(this.b[this.currentBot].posX/32))+1)*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))].el.innerHTML="<p>"+this.inputMoves[this.numberMoves].couts[2]+"</p>";
    this.terr.ter[	(((Math.floor(this.b[this.currentBot].posX/32)+1)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2)-1)*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))-1].el.innerHTML="<p>"+this.inputMoves[this.numberMoves].couts[3]+"</p>";
	this.terr.ter[	(((Math.floor(this.b[this.currentBot].posX/32)+1)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2)-1)*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))+1].el.innerHTML="<p>"+this.inputMoves[this.numberMoves].couts[4]+"</p>";
	this.terr.ter[(((Math.floor(this.b[this.currentBot].posX/32)-1)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2))*this.terr.tailleY+Math.floor(this.b[this.currentBot].posY/(32-6))+1].el.innerHTML="<p>"+this.inputMoves[this.numberMoves].couts[5]+"</p>";
    
	///this.terr.ter[(Math.floor((this.b[this.currentBot].posY/32)+Math.ceil(this.b[this.currentBot].posY/(32-6))%2))*this.terr.tailleX+Math.floor(this.b[this.currentBot].posY/(32-6))+1].el.innerHTML=this.inputMoves[this.numberMoves].couts[5];
  }
}
