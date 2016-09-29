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

    this.on('ended', collection.remove(this));
      // this.remove(this.at(0)));
      // remove());
      // console.log(this));
    // function(song) {
    //   console.log(song);
    //   this.remove(song);
    //   // this.model.dequeue;
    // });
  },

  playFirst: function() {

  }

});