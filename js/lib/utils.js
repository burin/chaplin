
define(['mediator', 'chaplin/lib/utils'], function(mediator, chaplinUtils) {
  var utils;
  utils = chaplinUtils.beget(chaplinUtils);
  _(utils).extend({
    facebookImageURL: function(fbId, type) {
      var accessToken, params;
      if (type == null) type = 'square';
      params = {
        type: type
      };
      if (mediator.user) {
        accessToken = mediator.user.get('accessToken');
        if (accessToken) params.access_token = accessToken;
      }
      return "https://graph.facebook.com/" + fbId + "/picture?" + ($.param(params));
    }
  });
  return utils;
});
