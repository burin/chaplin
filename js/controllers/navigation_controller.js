var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['chaplin/controllers/controller', 'models/navigation', 'views/navigation_view'], function(Controller, Navigation, NavigationView) {
  'use strict';
  var NavigationController;
  return NavigationController = (function(_super) {

    __extends(NavigationController, _super);

    function NavigationController() {
      NavigationController.__super__.constructor.apply(this, arguments);
    }

    NavigationController.prototype.initialize = function() {
      NavigationController.__super__.initialize.apply(this, arguments);
      this.navigation = new Navigation();
      return this.view = new NavigationView({
        model: this.navigation
      });
    };

    return NavigationController;

  })(Controller);
});
