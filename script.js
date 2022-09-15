var n,p=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24]],len=0,ans=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var zimu="abcdefghijklmnopqrstuvwxyz",word=["","","","",""],xulie="",ing=["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1",];
var arr=['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'];
var n;n=prompt();
for(var i=0;i<n;i++)word[i]=prompt();

for(var i=0;i<n;i++){
    len+=word[i].length;
    for(var j=0;j<word[i].length;j++){
        xulie+=word[i][j];
    }
}
for(var i=len;i<25;i++){
    xulie+=zimu[Math.floor(Math.random()*26)];
}
for(var i=1;i<=Math.floor(Math.random()*24)+7;i++){
    var x=Math.floor(Math.random()*5),y=Math.floor(Math.random()*5),z=Math.floor(Math.random()*5),w=Math.floor(Math.random()*5);
    var temp=25;
    temp=p[w][x];
    p[w][x]=p[y][z];
    p[y][z]=temp;
}
for(var i=0;i<5;i++){
    for(var j=0;j<5;j++){
        arr[5*i+j]=xulie[p[i][j]];
    }
}/*
for(var i=0;i<5;i++){
    for(var j=0;j<5;j++){
        console.log(arr[i][j]);
    }
    console.log('\n');
}*/
var inner = document.getElementsByClassName("inner");

function Green(){
    for(var i=0;i<25;i++){
        if(ans[i]==1){
            inner[i].style.backgroundColor="#09fc09";
            ans[i]=2;
        }
    }
}

function CheckIng(){
    var pp=true,p2=false;
    for(var i=0;i<n;i++){
        var ingg=new Array(),p;
        for(var j=0;j<25;j++)ingg[j]=ing[j];
        for(var j=0;j<word[i].length;j++){
            p=false;
            for(var k=0;k<25;k++){
                if(word[i][j]==ingg[k]){
                    ingg[k]="1";
                    p=true;
                    break;
                }
            }
            if(!p){
                p2=true;
                break;
            }
        }
        if(p2){
            pp=false;
            break;
        }
        for(var j=0;j<25;j++){
            if(ingg[j]!="1"){
                pp=false;
                break;
            }
        }
    }
    if(pp)Green();
}

        function ChangeColor(num){
            if(ans[num]==0){
            if(ans[num]!=2){
            CheckIng();
            /*var a = parseInt(Math.random()*10);
            var b = parseInt(Math.random()*10);
            var c = parseInt(Math.random()*10);
            var d = parseInt(Math.random()*10);
            var e = parseInt(Math.random()*10);
            var f = parseInt(Math.random()*10);
            var g = "#"+a+b+c+d+e+f;*/
            inner[num].style.backgroundColor="#e3fc05";
            ing[num]=arr[num];
            ans[num]=1;
            inner[num].innerHTML=arr[num];
            setTimeout(function(){if(ans[num]==1){inner[num].innerHTML="";inner[num].style.backgroundColor="#7c7c78";}ing[num]="1";ans[num]=0;},3000);
//            log.innerHTML=g;
//            inner[num].style.backgroundColor="rgb("+parseInt(Math.random()*255)+","+parseInt
//            (Math.random()*255)+","+parseInt(Math.random()*255)+")";
            CheckIng();
            }}
            else{
                if(ans[num]==1){inner[num].innerHTML="";inner[num].style.backgroundColor="#7c7c78";}ing[num]="1";ans[num]=0;
            }
}

