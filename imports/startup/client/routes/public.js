// define your public routing here
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../../ui/layouts/homepage/homepage';

FlowRouter.route('/', {
  name: 'indexPage',
  action() {
    BlazeLayout.render('main', { content: 'homepage' });
  },
});
