'use strict';

var songs = require('./songs');
var getClick = require('nv14-click-track');
var piano = require('nv14-piano');
var drums = require('nv14-drums');

function playSong(index) {
  var song = songs[index];
  var clickTrack = getClick(song.name, song.bpm, song.signature);
  clickTrack.on('tick', function (position) {
    console.log('Click: '+position.measure+':'+position.beat);
  });
  piano.play(song);
  drums.play(song);

  clickTrack.start();
}

module.exports = {
  playSong: playSong
};