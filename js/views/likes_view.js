var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['mediator', 'chaplin/views/collection_view', 'views/compact_like_view', 'text!templates/likes.hbs'], function(mediator, CollectionView, CompactLikeView, template) {
  'use strict';
  var LikesView;
  return LikesView = (function(_super) {

    __extends(LikesView, _super);

    function LikesView() {
      LikesView.__super__.constructor.apply(this, arguments);
    }

    LikesView.prototype.template = template;

    LikesView.prototype.tagName = 'div';

    LikesView.prototype.id = 'likes';

    LikesView.prototype.containerSelector = '#content-container';

    LikesView.prototype.listSelector = 'ol';

    LikesView.prototype.fallbackSelector = '.fallback';

    LikesView.prototype.initialize = function() {
      LikesView.__super__.initialize.apply(this, arguments);
      return this.subscribeEvent('loginStatus', this.showHideLoginNote);
    };

    LikesView.prototype.getView = function(item) {
      return new CompactLikeView({
        model: item
      });
    };

    LikesView.prototype.showHideLoginNote = function() {
      return this.$('.login-note').css('display', mediator.user ? 'none' : 'block');
    };

    LikesView.prototype.render = function() {
      LikesView.__super__.render.apply(this, arguments);
      return this.showHideLoginNote();
    };

    return LikesView;

  })(CollectionView);
});
