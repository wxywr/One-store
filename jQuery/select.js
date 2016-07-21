function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window .onload !='function'){
		window.onload = func;
	}  else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function getDom(id){
	return document.getElementById(id); 
}

function showProvince(){
	getDom("selectProvince").onclick = showAllProvince
}

function showAllProvince(){
		getDom("allProvince").style.display = "block";
		getDom("layer").style.display = "block";
		getDom("selectProvince").style.backgroundPosition = "190px 3px";
		getDom("selectProvince").style.color = "#ccc";
		getDom("layer").onclick = function(){
			hideAllProvince();
		}
		selectProvince();
}

function hideAllProvince(){
		getDom("allProvince").style.display = "none";
		getDom("layer").style.display = "none";
		getDom("selectProvince").style.backgroundPosition = "190px -18px";
		getDom("selectProvince").style.color = "#000"
}

function selectProvince(){
	var pro = getDom("allProvince").getElementsByTagName("li");
	var links;
	for(var i=0;i<pro.length;i++){
		links = pro[i].getElementsByTagName("span");
		for(var j=0;j<links.length;j++){
			links[j].onclick = function(){
				getDom("selectProvince").innerHTML = this.innerHTML;
				hideAllProvince();
			}
		}
	}
}	
addLoadEvent(showProvince);