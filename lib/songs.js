'use strict';

var songs = [{
  name: 'song1',
  bpm: 72,
  signature: [4,4],
  drums: [
    { measure: 1, beat: 1, message: 'one...' },
    { measure: 1, beat: 2, message: 'two...' },
    { measure: 1, beat: 3, message: 'three...' },
    { measure: 1, beat: 4, message: 'four...' },
    { measure: 2, beat: 1, message: 'CRASH!' },
    { measure: 2, beat: 4, message: 'CRASH!' },
    { measure: 3, beat: 1, message: 'boom' },
    { measure: 3, beat: 2, message: 'clap' },
    { measure: 3, beat: 3, message: 'boom' },
    { measure: 3, beat: 4, message: 'clap' },
    { measure: 4, beat: 1, message: 'trashcan ending' },
    { measure: 4, beat: 2, message: 'still slamming cymbals' },
    { measure: 4, beat: 3, message: 'rat tat tat tat tat tat' },
    { measure: 4, beat: 4, message: 'CRASH!' }
  ],
  piano: [
    { measure: 2, beat: 1, message: 'begins to play intro riff softly' },
    { measure: 2, beat: 3, message: 'plays a little louder' },
    { measure: 3, beat: 1, message: 'starts chord progression in bass, hitting fifths up top' },
    { measure: 3, beat: 3, message: 'continues fifths' },
    { measure: 4, beat: 1, message: 'loud ending chord' },
    { measure: 4, beat: 4, message: 'slide down' }
  ]
}];

module.exports = songs;