var PC = ["class","innerText","050-","7rem","15rem"],
SP =["href","href","tel:050","25vw","25vw"],
UA = !navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i)?"PC":"SP",
Keys = eval(UA),
vals=$$(`[${Keys[0]}*=tel]`);
skip:
for(var i=0;i<vals.length;i++){
	if($$("[class=bal]").length>0){ 
		var bals=document.getElementsByClassName('bal');
		for(var j=0;j<bals.length;j++){
			var cn = bals[j].nextElementSibling.className;
			if(vals[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName(cn).length>0){
				continue skip;
			}
		}
    }
    var bal = document.createElement('div');
        bal.className="bal";
    if(eval(`vals[i].${Keys[1]}.match(/^${Keys[2]}(?: 521[0-9]|52[2-9][0-9]|5[3-4][0-9]{2}|55[0-2][0-9]|553[0-9]|557[0-9]|55[8-9][0-9]|560[0-9]|577[7-9]|57[8-9][0-9]|58[0-8][0-9]|589[0-9]|800[0-7]|8009|801[0-4]|8016|8019|802[0-2]|802[6-7]|803[0-1]|803[4-8])/)`)){		
		bal.innerHTML = `<svg version=" 1.1"id="_x34_"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"viewBox="0 0 714 800"style="enable-background:new 0 0 714 800;width: ${Keys[3]};"xml:space="preserve"><style type="text/css">.st${i}{fill:#FFFFFF;}</style><g><path d="M286.7,780c-4.9,0.1-6.1-2.7-2.8-4.6c7.9-4.6,25.4-18.8,32.3-32.2c12.1-23.3,13.4-44.1-25.3-47.9C177.5,684.2,54.1,578.6,24.5,422.7C-13.9,220.8,115.4,22.5,351.1,20c282.4-2.9,380.6,225.9,334,419.9C631.5,662.7,404.5,778.2,286.7,780z"style="fill:rgb(254,255,164); class=${"st"+i}"></path></g><g font-family="noto"id="svgTXT"font-size="100"><text x="50%"y="41.5%"fill="2EDF82"text-anchor="middle"font-weight="bolder"style="fill:rgb(46,223,130);">FREE!!</text><text x="50%"y="56.5%"fill="2EDF82"text-anchor="middle"font-weight="bolder"style="fill:rgb(46,223,130);">(smartalk)</text></g></svg>`;	
        vals[i].parentNode.insertBefore(bal, vals[i]);
    }else if(eval(`vals[i].${Keys[1]}.match(/^0|^tel:0/i)`)){
        bal.innerHTML = `<svg version="1.1" id="_x33_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"viewBox="0 0 800 558.2" style="enable-background:new 0 0 800 558.2;width: ${Keys[4]};" xml:space="preserve"><style type="text/css">.st${i}{fill:#FFFFFF;}</style><g><path d="M344.5,14C327.7,93.5,152.9,153.5,20,108.4c100.4,70.8,103.8,230.2,0,283.5c112.4-15.6,235.7,77,223.8,152.4c79.4-60.3,275.9-73.7,343.2-4.5c-27.8-79.5,85.3-175.5,193.1-168.4c-101-46.5-99.2-192.1-20.5-254.7c-109.5,35.2-186.7,9.4-143.8-53.4C545.4,109,375.7,83.3,344.5,14z" style="fill:rgb(255, 76, 23); class=${"st"+i}"></path></g><g font-family="noto" id="svgTXT" font-size="76"><text x="50%" y="44.18%" fill="F2FF00" text-anchor="middle" font-weight="bolder" style="fill: rgb(242, 255, 0);">Not FREE </text><text x="50%" y="63.18%" fill="F2FF00" text-anchor="middle" font-weight="bolder" style="fill: rgb(242, 255, 0);">for SmarTalk...</text></g></svg>`
        vals[i].parentNode.insertBefore(bal, vals[i]);
    }  
};