
    window.onscroll=function (){
        let scroll = document.documentElement.scrollTop;
        let vw = window.innerWidth;
        let vh=window.innerHeight;
        let nav_height=document.getElementById("MyHeader").offsetHeight;
        if ((scroll > vh-nav_height)) {
            document.getElementById("MyHeader").style.backgroundColor='#1ABC9C';
        }
        else 
        document.getElementById("MyHeader").style.backgroundColor='transparent';
        if((scroll>400)&&vw<=700)
        {
            document.getElementById("nav-title").style.display='block';
        }
        else if(vw>700||scroll<=400)
        {
            document.getElementById("nav-title").style.display='none';
        }

    };
  
