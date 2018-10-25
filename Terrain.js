class Terrain
{
 	constructor(jsonRe)
 	{
		/*this.tailleX=map[0].length;
		this.tailleY=map.length;*/
		this.jsonDatas=jsonRe;
		this.tailleX=jsonRe.mapDatas.gridData.width;
		this.tailleY=jsonRe.mapDatas.gridData.height;
		this.ter=[];
		this.generationTerrain();
	}
 	
	generationTerrain()
  {
  	for(let i=0;i<this.tailleX;i++)
      for(let j = 0;j<this.tailleY;j++)
      {
        let abc={"type":0,"el":document.createElement('p')};
        abc.el.style.marginLeft=((j%2)*16)+(i*32)+"px";
        abc.el.style.marginTop=(j*(32-6))+"px";
		abc.el.className='hexagon '+tileType[this.jsonDatas.mapDatas.gridData.cells[(j*this.tailleX)+i].cellType];
        document.body.appendChild(abc.el);
        this.ter.push(abc);
      }
  }
}

