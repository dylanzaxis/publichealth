let dict = {
  create: {
    login: {
      api: "/api/stuff/current",
    },
    scientists: {
      api: "/api/admin/scientists/create",
    },
    posts: {
      api: "/api/admin/posts",
    },
    websites: {
      api: "/api/admin/websites/create",
    },
    users: {
      api: "/api/admin/users/create",
    },
  },

  read: {
    crud_posts: {
      api: "/api/admin/posts",
    },
    news: {
      api: "/api/admin/posts/read",
    },
    websites: {
      api: "/api/admin/websites/read",
    },
    admin_posts: {
      api: "/api/admin/read/users",
    },
    admin_users: {
      api: "/api/admin/read/users",
    },
    admin_user: {
      api: "/api/admin/read/user",
    },
    admin_merchants: {
      api: "/api/admin/read/merchants",
    },
    my_api: {
      api: "/api/business/place/my_api",
    },
    isonboard: {
      api: "/api/business/place/isonboard",
    },
    admin_list: {
      api: "/api/admin/admin_list",
    },
  },
  quick: {
    admin_users: {
      api: "/api/admin/quick",
    },
  },
  drop: {
    posts: {
      api: "/api/admin/posts",
    },
  },
  indie: {
    upload_image_link: process.env.REACT_APP_SERVER + "/papi/upload/file",
    papi_branding_logo:
      process.env.REACT_APP_SERVER + "/papi/upload/branding/logo",
    papi_branding_banner:
      process.env.REACT_APP_SERVER + "/papi/upload/branding/banner",
    papi_branding_poster:
      process.env.REACT_APP_SERVER + "/papi/upload/branding/poster",
    papi_package_image:
      process.env.REACT_APP_SERVER + "/papi/upload/branding/package",
  },
  public: {},
  read_one: {
    api: "/api/crud/read_one",
  },
};

export function getIndie(dict_key) {
  let output = dict.indie[dict_key];
  return output;
}
export default function option(target, key, callback) {
  let output = dict[target][key] || {};

  if (callback) {
    callback(output);
  }
  return output;
}
