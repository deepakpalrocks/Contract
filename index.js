
    window.onscroll=function (){
        let scroll = document.documentElement.scrollTop;
        let vw = window.innerWidth;
        if (scroll > 650&&vw>700) {
            document.getElementById("MyHeader").style.backgroundColor='black';
        }
        if((scroll>400)&&vw<=700)
        {
            document.getElementById("nav-title").style.display='block';
        }
        else if(vw>700||scroll<=400)
        {
            document.getElementById("nav-title").style.display='none';
        }

    };
  
