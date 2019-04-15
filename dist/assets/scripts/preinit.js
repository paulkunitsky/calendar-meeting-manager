(function() {
  String.prototype.endsWith = String.prototype.endsWith || function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };

  // we need that redirect for the CAS related server-side redirects
  if (!window.location.pathname.endsWith('index.html')) {
    window.location.pathname = window.location.pathname.replace(/\/?$/, '/index.html');
    return;
  }

  // checking the user agent/OS version
  // almost the same code as in the origami UI init.js
  try {
    var uaInfo = (new UAParser()).getResult();

    var rejectionRules = {
      os: {
        'Windows': function(version) {
          return version > 6; // 'XP', thou shalt not pass that also
        }
      },
      browser: {
        'IE': function(version) {
          return version >= 10;
        }
      }
    };

    var canLoad = true;

    for (var ruleProp in rejectionRules) {
      if (!rejectionRules.hasOwnProperty(ruleProp)) {
        continue;
      }

      var dataToMatch = uaInfo[ruleProp];

      if (!dataToMatch) {
        continue;
      }

      var rule = rejectionRules[ruleProp];

      for (var criteriaProp in rule) {
        if (!rule.hasOwnProperty(criteriaProp)) {
          continue;
        }

        if (dataToMatch.name.toLowerCase() !== criteriaProp.toLowerCase()) {
          continue;
        }

        var criteriaFn = rule[criteriaProp];

        canLoad = canLoad && criteriaFn(dataToMatch.major || dataToMatch.version);
      }
    }

    if (!canLoad) {
      window.location.href = '../ti/unsupported.html';
      return;
    }
  } catch(e) {
    // something unexpected... well, ok, let's try to boot the app
  }
})();
