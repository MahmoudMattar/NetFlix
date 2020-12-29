const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');
const mongoose = require('mongoose');

const films = require('../models/films');
const series = require('../models/series');
const users = require('../models/user');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],

  rootPath: '/admin',
  logoutPath: '/admin/exit',
  loginPath: '/admin/login',
  resources: [
    {
      resource: films,
      options: {},
    },
    {
      resource: users,
      options: {},
    },

    {
      resource: series,
      options: {},
    },
  ],

  branding: {
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/800px-Netflix_logo.svg.png',
    companyName: 'NetFlix',
    favicon: 'https://www.flaticon.com/svg/static/icons/svg/870/870910.svg',
  },
  AdminPage: {
    icon: 'https://www.flaticon.com/svg/static/icons/svg/870/870910.svg',
  },
});
const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'a@a.com',
  password: process.env.ADMIN_PASSWORD || 'a',
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword:
    process.env.ADMIN_COOKIE_PASS ||
    'supersecret-and-long-password-for-a-cookie-in-the-browser',
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;
