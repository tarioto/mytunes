// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

  },

  render: function() {
    
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  renderSong: function(song) {
    console.log(song.get('title'));
    // this.$el.children().detach();
    this.$el.append(new SongQueueEntryView({model: song}).render());
      // this.collection.map(function(song) {
      //   return new SongQueueEntryView({model: song}).render();
      // })
    // );
  }
});

