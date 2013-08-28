Meteor.Router.add({
  '/brand': 'brand',
  '/print': 'print',
  '/spanishLearningCentre': 'spanishLearningCentre',
  '/pause4Pets' : 'pause4Pets',
  '*': 'home'
});

Meteor.startup(function(){
});