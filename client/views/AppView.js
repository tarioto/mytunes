// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')}); // Songs Model
    this.libraryView = new LibraryView({collection: this.model.get('library')}); // Songs Model
    this.songQueueView = new SongQueueView({collection: this.model.get('queue')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);
    this.model.on('change:queueSong', function(model) {
      this.songQueueView.renderSong(model.get('queueSong'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
