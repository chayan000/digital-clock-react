import "./clock.css";
let a;
        let time;
        setInterval(() => {
            a=new Date()
            time= a.getHours() + ":"+a.getMinutes()+":"+a.getSeconds();
            document.getElementById('time1').innerHTML=time;
            if(a.getHours()<12){
              document.getElementById("pm").style.opacity=0.3;
            }
            else{
              document.getElementById("am").style.opacity=0.3;
            }
            
          
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

      
            let month = months[a.getMonth()];
            let date= a.getDate();
            let year= a.getFullYear();
            
            document.getElementById('date').innerHTML=date+"-"+month+"-"+year;
            
            if(a.getDay()===0){
              document.getElementById('sun').style.opacity=2;
            }
            if(a.getDay()===1){
              document.getElementById('mon').style.opacity=2;

            }
            if(a.getDay()===2){
              document.getElementById('tue').style.opacity=2;
            }
            if(a.getDay()===3){
              document.getElementById('wed').style.opacity=2;
            }
            if(a.getDay()===4){
              document.getElementById('thu').style.opacity=2;
            }
            if(a.getDay()===5){
              document.getElementById('fri').style.opacity=2;
            }
            if(a.getDay()===6){
              document.getElementById('sat').style.opacity=2;
            }
            
        }, 1000);
        