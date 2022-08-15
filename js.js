var a=0;
var b=0;
var turn=0;


var k=["1","2","3","4","5","6","7","8","9"];
var t=1;
winlist="";

function refresh(){
     k=["1","2","3","4","5","6","7","8","9"];

    document.getElementById("b1").innerHTML = "&nbsp";
    document.getElementById("b2").innerHTML = "&nbsp";
    document.getElementById("b3").innerHTML = "&nbsp";
    document.getElementById("b4").innerHTML = "&nbsp";
    document.getElementById("b5").innerHTML = "&nbsp";
    document.getElementById("b6").innerHTML = "&nbsp";
    document.getElementById("b7").innerHTML = "&nbsp";
    document.getElementById("b8").innerHTML = "&nbsp";
    document.getElementById("b9").innerHTML = "&nbsp";
    turn=-1;

    document.getElementById("k1").innerHTML = "<i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i>&nbsp;&nbsp;";
    document.getElementById("k2").innerHTML ="";
    if(t>3){
        if(a>b){
            alert("a is a winner")
        }
        else{
            alert("b is a winner")
        }
    }
    a=0;
    b=0
}


function decide() {

    if (turn % 2 === 0) {
        winlist+= t +"&nbsp;&nbsp;&nbsp;  A &nbsp;&nbsp;&nbsp; B <br><br> "
        document.getElementById("win").innerHTML = winlist;a++;
    }

    else {
        winlist+= t +"&nbsp;&nbsp;&nbsp;  B &nbsp;&nbsp;&nbsp; A <br><br> "
        document.getElementById("win").innerHTML = winlist;
        b++;
    }
    t+=1;
    refresh();


}


    function f() {



        if ((k[0] === k[1]) && (k[1] === k[2])) {

            decide();
        }

       else if ((k[0] === k[3]) && (k[3] === k[6])) {
           decide();

       }


        else if((k[0]===k[4])&&(k[4]===k[8])){
          decide();
        }


        else if((k[1]===k[4])&&(k[4]===k[7])){
          decide();

        }


        else if((k[3]===k[4])&&(k[4]===k[5])){
           decide();
        }


        else if((k[6]===k[7])&&(k[7]===k[8])){
           decide();

        }

        else if((k[2]===k[5])&&(k[5]===k[8])){
            decide();

        }
        else if((k[2]===k[4])&&(k[4]===k[6])){
           decide();


        }

        if(!(k[0]==="1"||k[1]==="2"||k[2]==="3"||k[3]==="4"||k[4]==="5"||k[5]==="6"||k[6]==="7"||k[7]==="8"||k[8]==="9")){
            alert("match is draw");
            refresh();



        }


    }


    function fun() {

        if (turn % 2 !==0) {
            document.getElementById("k1").innerHTML = "<i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i>&nbsp;&nbsp;";
            document.getElementById("k2").innerHTML ="";
        } else {
            document.getElementById("k2").innerHTML = "<i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>&nbsp;&nbsp;";
            document.getElementById("k1").innerHTML ="";
        }

    }

    function myFunction() {
        
        if (document.getElementById("b1").innerHTML!="&nbsp;"){
            alert("You made wroung move");
        }
        else {
            fun();
            if (turn % 2 === 0) {
                document.getElementById("b1").innerHTML = "X";
                k[0]="x"
        } else {

            
            document.getElementById("b1").innerHTML = "O";
            k[0]="o"
        }
        f();
        turn += 1;

    }
}


    function x1() {
            console.log(document.getElementById("b2").innerHTML)
            console.log(document.getElementById("b2").innerHTML.indexOf("&nbsp;"))
            if (document.getElementById("b2").innerHTML.indexOf("&nbsp;")==-1){
                alert("You made wroung move");
            }
            
            else {
                fun();
                if(turn%2===0){

                document.getElementById("b2").innerHTML = "X";
                k[1]="x"
            }

            else {
                document.getElementById("b2").innerHTML = "O";
                k[1]="o"
            }
            f();
            turn+=1;
        }
    }



   function x2() {

                            

                            if (document.getElementById("b3").innerHTML!="&nbsp;"){
                                alert("You made wroung move");
                            }
                            else {
                                fun();
                                if (turn%2===0){

                                document.getElementById("b3").innerHTML = "X";
                                k[2]="x"
                            }
                            else {


                                document.getElementById("b3").innerHTML = "O";
                                k[2]="o"
                            }
                            f();
                            turn+=1;
                        }
   }

    function x3() {
            
            if (document.getElementById("b4").innerHTML!="&nbsp;"){
                alert("You made wroung move");
            }
            else
            { fun();
                if (turn%2===0){
                document.getElementById("b4").innerHTML = "X";
                k[3]="x"

            }
            else {
                document.getElementById("b4").innerHTML = "O";
                k[3]="o"
            }
            f();
            turn+=1;
    }
}

function x4() {
           
            if (document.getElementById("b5").innerHTML!="&nbsp;"){
                alert("You made wroung move");
            }
            else {
                fun();
                if (turn%2===0){
                document.getElementById("b5").innerHTML = "X";
                k[4]="x"
            }
            else {
                document.getElementById("b5").innerHTML = "O";
                k[4]="o"
            }
            f();
            turn+=1;
        }

  }

  function x5() {
           
            if (document.getElementById("b6").innerHTML!="&nbsp;"){
                alert("You made wroung move");
            }
            else {
                fun();

                if (turn%2===0){

                document.getElementById("b6").innerHTML = "X";
                k[5]="x"
            }
            else {
                document.getElementById("b6").innerHTML = "O";
                k[5]="o"
            }
            f();
            turn+=1;
        }
  }


  function x6() {
            

            if (document.getElementById("b7").innerHTML!="&nbsp;"){
                alert("You made wroung move");
            }
            else {
                fun();
                if (turn%2===0){

                document.getElementById("b7").innerHTML = "X";
                k[6]="x"
            }
            else {
                document.getElementById("b7").innerHTML = "O";
                k[6]="o"
            }
            f();
            turn+=1;
        }
  }



  function x7() {
        

         if (document.getElementById("b8").innerHTML!="&nbsp;"){
            alert("You made wroung move");
        }
        else{
            fun();
             if (turn%2===0){

                document.getElementById("b8").innerHTML = "X";
                k[7]="x"
            }
            else {


                document.getElementById("b8").innerHTML = "O";
                k[7]="o"
            }
            f();
            turn+=1;
        }
    }
  function x8() {
            

            if (document.getElementById("b9").innerHTML!="&nbsp;"){
                alert("You made wroung move");
            }
            else {
                fun();
                if (turn%2===0){

                document.getElementById("b9").innerHTML = "X";
                k[8]="x"
                    }
                    else {
                        document.getElementById("b9").innerHTML = "O";
                        k[8]="o"
                    }
                    f();
                    turn+=1;
  }
}
