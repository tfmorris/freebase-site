var METADATA = {
  "mounts": {
    "lib": "//18.lib.www.branches.svn.freebase-site.googlecode.dev"
  }, 
  "app_tag": null, 
  "app_version": 5, 
  "app_key": "create"
};

acre.require(METADATA.mounts.lib + "/loader.sjs").extend_metadata(METADATA);