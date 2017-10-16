new Vue({
  el:'#vue-app',
  data:{
    name:'',
    job:'Ninja',
    website:'https://calendar.google.com/calendar/b/1/render?tab=mc#main_7',
    websiteTag: '<a href="https://calendar.google.com/calendar/b/1/render?tab=mc#main_7">My Calendar</a>',
    age:'',
    x:0,
    y:0
  },
  methods:{
    greet:function(time){
      return 'Good ' + time + ' ' + this.name;
    },
    add:function(inc){
      this.age+=inc;
    },
    subtract:function(dec){
      this.age-=dec;
    },
    updateXY:function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    logName:function(){

    },
    logAge:function(){
      console.log('you entered your age');
    }
  }
});
