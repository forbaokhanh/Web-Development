gapi.analytics.ready(function() {

/* ================================= AUTHENICATION ================================= */
  var CLIENT_ID = '1049929647905-ojik6prd1cl8n5ppc2slfq17slvv35qu.apps.googleusercontent.com';

  // A built in component. Two methods - authorize() and isAuthorized() - boolean,
  // Inherited methods - on, once, off ???(event, handler) events = success, error
  gapi.analytics.auth.authorize({
    container: 'auth-button',
    clientid: CLIENT_ID,
  });

  /* OR
   gapi.analytics.auth.authorize({
    container: 'auth-button',
    clientid: CLIENT_ID,
  }); */

/* ================================= END AUTHENICATION ================================= */


/* ================================= CREATING A VIEW SELECTOR ================================= */
                   /* WILL POTENTIALLY HAVE TO FIND A WAY TO GET RID OF THIS */
  var viewSelector = new gapi.analytics.ViewSelector({
    container: 'view-selector'
  });

/* ================================= TIMELINES ================================= */

  /* =================== GENERAL =================== */
  var totalTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:sessions',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'total-timeline'
    }
  });

  var uniqueTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:uniquePageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'unique-timeline'
    }
  });

  var averageTimeTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:avgSessionDuration',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'average-time-timeline'
    }
  });

  var bouncesTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:bounces',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'bounces-timeline'
    }
  });

  /* =================== SOCIAL MEDIA =================== */
  var facebookTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:socialNetwork',
      'metrics': 'ga:sessions',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'facebook-timeline'
    }
  });

  var twitterTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:users',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'twitter-timeline'
    }
  });

  var emailTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:avgUserTimingValue',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'email-timeline'
    }
  });

  var searchTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:organicSearches',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'search-timeline'
    }
  });

  /* =================== AUDIENCE =================== */
  var ageTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:userAgeBracket',
      'metrics': 'ga:sessions',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'age-timeline'
    }
  });

  var genderTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:userGender',
      'metrics': 'ga:sessions',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'gender-timeline'
    }
  });

  var locationTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:city',
      'metrics': 'ga:sessions',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'GEO',
      container: 'location-timeline'
    }
  });

  /* =================== TECHNOLOGY =================== */

/* ================================= END TIMELINES ================================= */

/* ================================= FINISH ================================= */
  gapi.analytics.auth.on('success', function(response) {
    viewSelector.execute();
  });

  viewSelector.on('change', function(ids) {
    var newIds = {
      query: {
        ids: ids
      }
    }

    /* SETTING ALL CHARTS */
    // GENERAL
    totalTimeline.set(newIds).execute();
    uniqueTimeline.set(newIds).execute();
    averageTimeTimeline.set(newIds).execute();
    bouncesTimeline.set(newIds).execute();
    // SOCIAL MEDIA
    facebookTimeline.set(newIds).execute();
    twitterTimeline.set(newIds).execute();
    emailTimeline.set(newIds).execute();
    searchTimeline.set(newIds).execute();
    // AUDIENCE
    ageTimeline.set(newIds).execute();
    genderTimeline.set(newIds).execute();
    locationTimeline.set(newIds).execute();
    // TECHNOLOGY

  });
});