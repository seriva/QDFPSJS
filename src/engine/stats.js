class Stats {
  constructor (engine) {
    var e = this.e = engine;
    var s = this;

    this.fps = 0;
    this.fpscounter = 0;
    this.frametime = 0;

    //add general css for our page
    e.utils.addCSS(
        '#stat-fps { left: 15px; top:15px; margin: 0; padding: 0; position: absolute; color: #FFF; font-size: 12px }' +
        '#stat-msframe { left: 15px; top:30px; margin: 0; padding: 0; position: absolute; color: #FFF; font-size: 12px  }'
    );

    //add canvas
    e.utils.addElement('span', 'stat-fps'); 
    e.utils.addElement('span', 'stat-msframe');

    //stats update event
    window.setInterval(function (){
      s.fps = s.fpscounter;
      s.fpscounter = 0;
      document.getElementById('stat-fps').innerHTML = 'FPS : ' + s.fps.toPrecision(5);
      document.getElementById('stat-msframe').innerHTML = 'FTM : '  + s.frametime.toPrecision(5);
    }, 1000);

  }

  update (frametime){
      this.fpscounter++;
      this.frametime = frametime;
  }
}

export { Stats as default};
