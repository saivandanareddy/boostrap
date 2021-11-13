function loadjson(file,Callback){
    var xhr= new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status===200){
            Callback(xhr.responseText);
        }
    }
    xhr.send(null);
    
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
}
)
    