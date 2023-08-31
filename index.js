var audio = new Audio("alarm.mp3");
setInterval(()=>{
      d = new Date();
      htime = d.getHours();
      mtime = d.getMinutes();
      stime = d.getSeconds();
      hrotation = 30*htime + mtime/2;
      mrotation = 6*mtime;
      srotation = 6*stime;

      hour.style.transform = `rotate(${hrotation}deg)`;
      minute.style.transform = `rotate(${mrotation}deg)`;
      second.style.transform = `rotate(${srotation}deg)`;

      date.innerText=`${d.getDate()}, ${d.getMonth()}, ${d.getFullYear()}`
      day.innerText=`${d.getDay()}`
      time.innerText=`${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`
      let alarmhour = alarm.value.split(":")[0]
      let alarmmin = alarm.value.split(":")[1]
      if(htime == alarmhour && mtime == alarmmin){
            audio.play();
      }
},1000);