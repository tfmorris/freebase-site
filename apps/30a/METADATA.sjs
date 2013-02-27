var METADATA = {
  "mounts": {
    "libraries": "//2.libraries.apps.freebase.dev", 
    "site": "//26a.site.www.tags.svn.freebase-site.googlecode.dev", 
    "service": "//service"
  }, 
  "app_tag": "30a", 
  "app_version": "30", 
  "extensions": {
    "mf.css": {
      "media_type": "text/css", 
      "handler": "css_manifest"
    }, 
    "mf.js": {
      "media_type": "text/javascript", 
      "handler": "js_manifest"
    }, 
    "omf.css": {
      "media_type": "text/css", 
      "handler": "css_manifest"
    }, 
    "omf.js": {
      "media_type": "text/javascript", 
      "handler": "js_manifest"
    }
  }, 
  "app_key": "apps"
};

acre.require(METADATA.mounts.site + "/lib/helper/helpers.sjs").extend_metadata(METADATA, "site");