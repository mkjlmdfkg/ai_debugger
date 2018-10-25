let jsClasses=["ReadJson","GestionMouvements","Bot","Terrain"];
let jsonFiles=["MapsJson/L_005"/*"map"*/,"path"];

let lienCouts={"3":10,"2":6,"1":0,"0":-1};
let couts=["Faible","Moyen","Eleve","TresEleve"];
let tileType=["normal","goal","inaccessible"];

class DomInit
{
	constructor()
	{
		this.els=[];
		this.initJson();
		this.initJs();
		this.run();
	}
	initJson()
	{
		for(let i = 0;i<jsonFiles.length;i++)
		{
			this.els.push(document.createElement('script'));
			this.els[this.els.length-1].src=jsonFiles[i]+".json";
			document.head.appendChild(this.els[this.els.length-1]);
		}
	}
	initJs()
	{
		for(let i = 0;i<jsClasses.length;i++)
		{
			let scr = document.createElement('script');
			scr.src=jsClasses[i]+".js";
			document.head.appendChild(scr);
		}
	}
	run()
	{
		window.addEventListener("load",function(){
			let jsonRe=new ReadJson();
			let te=new GestionMouvements(new Terrain(jsonRe),jsonRe);
		});
		//let _gestM=new GestionMouvements(new Terrain());
	}
}
document.addEventListener("DOMContentLoaded",function(){
	let _dom=new DomInit();
});