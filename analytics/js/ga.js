gapi.analytics.ready(function() {
  gapi.analytics.auth.authorize({
    serverAuth: {
      access_token: 'ya29.nQHd8aoTQiEcFItTPG8GPZf5vTUMArB4LxKJn1Zo5eFIQqI0MDmmon5PKgstJovTwZ1OK1ioVftA-g'
    }
  });

  /* ================================= CREATING A VIEW SELECTOR ================================= */
                   /* WILL POTENTIALLY HAVE TO FIND A WAY TO GET RID OF THIS */
  // var viewSelector = new gapi.analytics.ViewSelector({
  //   container: 'view-selector'
  // });
  // FOR OUR PURPOSES, WE'RE JUST GOING TO DISPLAY ONE ID ga:96466207
  var ids = 'ga:96466207';
  var queryIds = {
      query: {
        ids: ids
      }
    };

/* ================================= DATA ================================= */

  var total = new gapi.analytics.report.Data({
    query: {
      'ids': 'ga:96466207',
      'metrics': 'ga:pageViews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
    }
  });

  total.on('success', function(response) {
    var answer = response.rows[0][0];
    console.log(answer);
    $("#totalCount").html("<h2>Overall Total Views: " + answer + "</h2>");
  });

  total.execute();

  var unique = new gapi.analytics.report.Data({
    query: {
      'ids': 'ga:96466207',
      'metrics': 'ga:uniquePageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
    }
  });

  unique.on('success', function(response) {
    var answer = response.rows[0][0];
    console.log(answer);
    $("#uniqueCount").html("<h2>Overall Unique Views: " + answer + "</h2>");
  });

  unique.execute();

  var average = new gapi.analytics.report.Data({
    query: {
      'ids': 'ga:96466207',
      'metrics': 'ga:avgTimeOnPage',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
    }
  });

  average.on('success', function(response) {
    var answer = response.rows[0][0];
    console.log(answer);
    $("#averageCount").html("<h2>Overall Average Time: " + answer + "</h2>");
  });

  average.execute();

  var bounces = new gapi.analytics.report.Data({
    query: {
      'ids': 'ga:96466207',
      'metrics': 'ga:bounces',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
    }
  });

  bounces.on('success', function(response) {
    var answer = response.rows[0][0];
    console.log(answer);
    $("#bounceCount").html("<h2>Overall Bounces: " + answer + "</h2>");
  });

  bounces.execute();

/* ================================= END DATA ================================= */

/* ================================= TIMELINES ================================= */

  /* =================== GENERAL =================== */
  var totalTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:pageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
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
      'filters': 'ga:pagePath==/index.php'
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
      'metrics': 'ga:avgTimeOnPage',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
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
      'filters': 'ga:pagePath==/index.php'
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
      'dimensions': 'ga:date',
      'metrics': 'ga:pageViews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:socialNetwork==Facebook&&ga:pagePath==/index.php'
      // remember to add ga:pagePath==/ and change the website to facebook
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
      'metrics': 'ga:pageViews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:socialNetwork==Twitter&&ga:pagePath==/index.php'
      // remember to add ga:pagePath==/ and change the website to twitter
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
      'metrics': 'ga:pageViews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:channelGrouping==Direct&&ga:pagePath==/index.php'
      // Using direct because the viewers will see it through a link
    },
    chart: {
      type: 'LINE',
      container: 'email-timeline'
    }
  });

  // var searchTimeline = new gapi.analytics.googleCharts.DataChart({
  //   reportType: 'ga',
  //   query: {
  //     'dimensions': 'ga:date',
  //     'metrics': 'ga:pageviews',
  //     'start-date': '30daysAgo',
  //     'end-date': 'yesterday',
  //     'filters': 'ga:source==free-social-buttons.com'
  //     // remember to add ga:pagePath==/ and change the website to google
  //   },
  //   chart: {
  //     type: 'LINE',
  //     container: 'search-timeline'
  //   }
  // });

  /* =================== AUDIENCE =================== */
  var ageTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:userAgeBracket',
      'metrics': 'ga:pageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
    },
    chart: {
      type: 'COLUMN',
      container: 'age-timeline'
    }
  });

  var genderTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:userGender',
      'metrics': 'ga:pageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
    },
    chart: {
      type: 'COLUMN',
      container: 'gender-timeline'
    }
  });

  var locationTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:country',
      'metrics': 'ga:pageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
    },
    chart: {
      type: 'GEO',
      container: 'location-timeline'
    }
  });

  /* =================== TECHNOLOGY =================== */
  var deviceTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:deviceCategory',
      'metrics': 'ga:pageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:pagePath==/index.php'
    },
    chart: {
      type: 'BAR',
      container: 'device-timeline'
    }
  });

  var mobileTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:pageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:deviceCategory==mobile&&ga:pagePath==/index.php'
    },
    chart: {
      type: 'COLUMN',
      container: 'mobile-timeline'
    }
  });

  var tabletTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:pageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:deviceCategory==tablet&&ga:pagePath==/index.php'
    },
    chart: {
      type: 'LINE',
      container: 'tablet-timeline'
    }
  });

  var desktopTimeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:pageviews',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'filters': 'ga:deviceCategory==desktop&&ga:pagePath==/index.php'
      // add the pagepath
    },
    chart: {
      type: 'LINE',
      container: 'desktop-timeline'
    }
  });

/* ================================= END TIMELINES ================================= */

/* ================================= AUTHENICATION ================================= */
  
  $(document).ready(function() {
    // GENERAL
    totalTimeline.set(queryIds).execute();
    uniqueTimeline.set(queryIds).execute();
    averageTimeTimeline.set(queryIds).execute();
    bouncesTimeline.set(queryIds).execute();

    $('#socialMediaTrigger').on('click', function() {
      // SOCIAL MEDIA
      console.log('Clicked Social');
      facebookTimeline.set(queryIds).execute();
      twitterTimeline.set(queryIds).execute();
      emailTimeline.set(queryIds).execute();
    // searchTimeline.set(queryIds).execute();
    });

    $('#audienceTrigger').on('click', function() {
      // AUDIENCE
      console.log('Clicked Audience');
      ageTimeline.set(queryIds).execute();
      genderTimeline.set(queryIds).execute();
      locationTimeline.set(queryIds).execute();
    });
    
    $('#technologyTrigger').on('click', function() {
      // TECHNOLOGY
      deviceTimeline.set(queryIds).execute();
      mobileTimeline.set(queryIds).execute();
      tabletTimeline.set(queryIds).execute();
      desktopTimeline.set(queryIds).execute();
    });
  
    $('#queryInputs').on('submit', function(e) {
      e.preventDefault();


      /* READ THE INFORMATION FROM SELECTORS */
      var optionsVal = [];
      var general = $('#generalInput').val();
      optionsVal["social"] = $('#socialInput').val();
      optionsVal["age"] = $('#ageInput').val();
      optionsVal["gender"] = $('#genderInput').val();
      optionsVal["location"] = $('#locationInput').val();
      optionsVal["tech"] = $('#techInput').val();
      var startDate = $('#startDateInput').val();
      var endDate = $('#endDateInput').val();

      /* RUN THE QUERY */
      runCustomQuery(general, optionsVal, startDate, endDate, queryIds);
    });
  });

  function runCustomQuery(metrics, options, startDate, endDate, ids) {
    // Setting up Times
    if (startDate == "") {
      startDate = '30daysAgo';
    } else {
      startDate = options["startDate"];
    }

    if (endDate == "") {
      endDate = 'yesterday';
    } else {
      endDate = options["endDate"];
    }

    var filters = "";

    for(var key in options) {
      if (options[key] != "") {
        if (key == "location") {
          options[key] = "ga:city==" + options[key];
        }
        if (filters == "") {
          filters += options[key];
        } else {
          filters += "&&" + options[key];
        }
      }
    }
    console.log(filters);
    console.log(startDate);
    console.log(endDate);

    if (filters) {
      var customTimeline = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
          'dimensions': 'ga:date',
          'metrics': metrics,
          'start-date': startDate,
          'end-date': endDate,
          'filters': filters
        },
        chart: {
          type: 'LINE',
          container: 'custom-timeline'
        }
      });

      customTimeline.set(ids).execute();
    } else {
      var customTimeline = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
          'dimensions': 'ga:date',
          'metrics': metrics,
          'start-date': startDate,
          'end-date': endDate,
        },
        chart: {
          type: 'LINE',
          container: 'custom-timeline'
        }
      });

      customTimeline.set(ids).execute();
    }
  }
});