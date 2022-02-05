
    window.onscroll=function (){
        let scroll = document.documentElement.scrollTop;
        let vw = window.innerWidth;
        if ((scroll > 550)) {
            document.getElementById("MyHeader").style.backgroundColor='black';
        }
        else if(scroll<=650)
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
  
