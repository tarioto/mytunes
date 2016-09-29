// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(song) {
    
    if (song) {
      this.add(song);  
    }

    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      var removeThis = this.at(0);
      this.remove(removeThis);
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', this.remove);

  },

  playFirst: function() {
    console.log(this.at(0));
    this.at(0).play();
  }

});