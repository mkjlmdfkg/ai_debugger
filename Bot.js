class Bot
{
	constructor(x,y)
  {
  	this.el=document.createElement('p');
    this.el.className="personnage hexagon";
    this.posX=((y%2)*16)+(x*32);
    this.posY=(y*(32-6));
    this.el.style.marginLeft=this.posX+"px";
    this.el.style.marginTop=this.posY+"px";
    document.body.appendChild(this.el);
  }
  moveLeft()
  {
  	this.posX-=32;
  	this.el.style.marginLeft=this.posX+"px";
  }
  moveRight()
  {
  	this.posX+=32;
  	this.el.style.marginLeft=this.posX+"px";
  }
  moveUpLeft()
  {
  	this.posX-=16;
    this.posY+=(32-6);
  	this.el.style.marginLeft=this.posX+"px";
  	this.el.style.marginTop=this.posY+"px";
  }
  moveUpRight()
  {
  	this.posX+=16;
    this.posY+=(32-6);
  	this.el.style.marginLeft=this.posX+"px";
  	this.el.style.marginTop=this.posY+"px";
  }
  moveDownLeft()
  {
  	this.posX-=16;
    this.posY-=(32-6);
  	this.el.style.marginLeft=this.posX+"px";
  	this.el.style.marginTop=this.posY+"px";
  }
  moveDownRight()
  {
  	this.posX+=16;
    this.posY-=(32-6);
  	this.el.style.marginLeft=this.posX+"px";
  	this.el.style.marginTop=this.posY+"px";
  }
}