

function makeTimeObj(){
  let timeObj = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    toString(withoutSec=false){
      if(withoutSec) return this.hours+"h "+this.minutes+"m ";
      return this.hours+"h "+this.minutes+"m "+this.seconds+"s";
    },
    getTime(){return this.hours*3600+this.minutes*60+this.seconds},
    shiftTimes(){
      this.minutes+=parseInt(this.seconds/60);
      this.seconds-=parseInt(this.seconds/60)*60;
      this.hours+=parseInt(this.minutes/60);
      this.minutes-=parseInt(this.minutes/60)*60;
    },
    add(seconds){
      this.seconds+=seconds;
      this.shiftTimes();
    },
  };

  return timeObj;
}