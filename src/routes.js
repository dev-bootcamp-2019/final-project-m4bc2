const routes = require('next-routes')();

routes.add('/member/new','/member/new');
routes.add('/member/:address','/member/show');

module.exports = routes;
//this statement exports some helpers that will eventually help us navigate around the pages.
