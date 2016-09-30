// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(song) {

    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);

    
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

  },

  enqueue: function(song) {
    this.add(song);
    if (this.length > 0) {
      this.at(0).play();
    }
  },

  dequeue: function(song) {
    this.remove(song);
  },

  playFirst: function() {
    this.at(0).play();
  }

});