(function ($) {

 /**
  * Get the total displacement of given region.
  *
  * @param region
  *   Region name. Either "top" or "bottom".
  *
  * @return
  *   The total displacement of given region in pixels.
  */
  if (Drupal.overlay) {
    Drupal.overlay.getDisplacement = function (region) {
      var displacement = 0;
      var lastDisplaced = $('.overlay-displace-' + region + ':last');
      if (lastDisplaced.length) {
        displacement = lastDisplaced.offset().top + lastDisplaced.outerHeight();

        // In modern browsers (including IE9), when box-shadow is defined, use the
        // normal height.
        var cssBoxShadowValue = lastDisplaced.css('box-shadow');
        var boxShadow = (typeof cssBoxShadowValue !== 'undefined' && cssBoxShadowValue !== 'none');
        // In IE8 and below, we use the shadow filter to apply box-shadow styles to
        // the toolbar. It adds some extra height that we need to remove.
        if (!boxShadow && /DXImageTransform\.Microsoft\.Shadow/.test(lastDisplaced.css('filter'))) {
          displacement -= lastDisplaced[0].filters.item('DXImageTransform.Microsoft.Shadow').strength;
          displacement = Math.max(0, displacement);
        }
      }
      return displacement;
    };
  };

})(jQuery);
;
Drupal.settings.spotlight_settings = Drupal.settings.spotlight_settings || {};

(function ($) {

  /**
   * Form behavior for Spotlight
   */
  Drupal.behaviors.panopolySpotlight = {
    attach: function (context, settings) {
      if ($('.field-name-field-basic-spotlight-items', context).length) {
        $('.field-name-field-basic-spotlight-items', context).each(function() {
          var rotation_time = $(this).find('.panopoly-spotlight-buttons-wrapper').data('rotation-time'),
              $widget = $(this),
              $slides = $widget.find('.panopoly-spotlight'),
              $controls = $widget.find('.panopoly-spotlight-buttons-wrapper li'),
              current = 0,
              timer = null;

          function start() {
            if (timer === null) {
              timer = setTimeout(rotate, rotation_time);
            }
          }

          function stop() {
            if (timer !== null) {
              clearTimeout(timer);
              timer = null;
            }
          }

          function rotate() {
            // Increment the current slide.
            current++;
            if (current >= $controls.length) {
              current = 0;
            }

            // Click the control for the next slide.
            $controls.eq(current).children('a').trigger('click.panopoly-widgets-spotlight');
          }

          // Navigation is hidden by default, display it if JavaScript is enabled.
          $widget.find('.panopoly-spotlight-buttons-wrapper').css('display', 'block');

          // Hide all the slides but the first one.
          $slides.hide();
          $slides.eq(0).show();
          $controls.eq(0).addClass('active');

          // Bind the event for the slide numbers.
          $controls.once('panopoly-spotlight').children('a').bind('click.panopoly-widgets-spotlight', function (event) {
            var selector = $(this).attr('href');
            if (selector.indexOf('#') === 0) {
              event.preventDefault();

              // Mark the slide number as active.
              $controls.removeClass('active');
              $(this).parent().addClass('active');

              // Hide all slides but the selected one.
              $slides.hide();
              $slides.filter(selector).show();

              // Start the timer over if it's running.
              if (timer !== null) {
                stop();
                start();
              }

              return false;
            }
          });

          // Bind events to all the extra buttonts.
          $widget.find('.panopoly-spotlight-pause-play').once('panopoly-spotlight').bind('click.panopoly-widgets-spotlight', function(event) {
            event.preventDefault();
            if ($(this).hasClass('paused')) {
              start();
              $(this).text(Drupal.t('Pause'));
              $(this).removeClass('paused');
            }
            else {
              stop();
              $(this).text(Drupal.t('Play'));
              $(this).addClass('paused');
            }
          });
          if ($widget.find('.panopoly-spotlight-previous').length && $widget.find('.panopoly-spotlight-next').length) {
            $widget.find('.panopoly-spotlight-previous').once('panopoly-spotlight').bind('click.panopoly-widgets-spotlight', function (event) {
              event.preventDefault();
              $widget.find('.panopoly-spotlight-pause-play:not(.paused)').trigger('click.panopoly-widgets-spotlight');
              var activeControl = $($controls.filter('.active'));

              if (activeControl.prev().length != 0) {
                activeControl.prev().children('a').trigger('click.panopoly-widgets-spotlight');
              }
              else {
                $controls.last().children('a').trigger('click.panopoly-widgets-spotlight');
              }
            });
            $widget.find('.panopoly-spotlight-next').once('panopoly-spotlight').bind('click.panopoly-widgets-spotlight', function (event) {
              event.preventDefault();
              $widget.find('.panopoly-spotlight-pause-play:not(.paused)').trigger('click.panopoly-widgets-spotlight');
              var activeControl = $($controls.filter('.active'));

              if (activeControl.next().length != 0) {
                activeControl.next().children('a').trigger('click.panopoly-widgets-spotlight');
              }
              else {
                $controls.first().children('a').trigger('click.panopoly-widgets-spotlight');
              }
            });
          }

          start();
        });
      }
    }
  };

})(jQuery);
;
(function ($, Drupal, PhotoSwipe, PhotoSwipeUI_Default) {
  Drupal.behaviors.photoswipe = {
    /**
     * PhotoSwipe Options, coming from Drupal.settings.
     */
    photoSwipeOptions: {},
    /**
     * Instantiated galleries.
     */
    galleries: [],
    /**
     * Load PhotoSwipe once page is ready
     */
    attach: function (context, settings) {
      this.photoSwipeOptions = settings.photoswipe ? settings.photoswipe.options : {};

      var $galleries = $('.photoswipe-gallery', context);
      if ($galleries.length) {
        // loop through all gallery elements and bind events
        $galleries.each( function (index) {
          var $gallery = $(this);
          $gallery.attr('data-pswp-uid', index + 1);
          $gallery.on('click', Drupal.behaviors.photoswipe.onThumbnailsClick);
        });
      }
      var $imagesWithoutGalleries = $('a.photoswipe', context).filter(function(elem) {
        return !$(this).parents('.photoswipe-gallery').length;
      });
      if ($imagesWithoutGalleries.length) {
        // We have no galleries just individual images.
        $imagesWithoutGalleries.each(function(index) {
          $imageLink = $(this);
          $imageLink.wrap('<span class="photoswipe-gallery"></span>');
          var $gallery = $imageLink.parent();
          $gallery.attr('data-pswp-uid', index + 1);
          $gallery.on('click', Drupal.behaviors.photoswipe.onThumbnailsClick);
          $galleries.push($gallery);
        });
      }

      // Parse URL and open gallery if it contains #&pid=3&gid=1
      var hashData = this.parseHash();
      if(hashData.pid > 0 && hashData.gid > 0) {
        this.openPhotoSwipe(hashData.pid - 1 ,  $($galleries[hashData.gid - 1]));
      }
    },
    /**
     * Triggers when user clicks on thumbnail.
     *
     * Code taken from http://photoswipe.com/documentation/getting-started.html
     * and adjusted accordingly.
     */
    onThumbnailsClick: function(e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;

      var $clickedGallery = $(this);

      var eTarget = e.target || e.srcElement;
      var $eTarget = $(eTarget);

      // find root element of slide
      var clickedListItem = $eTarget.closest('.photoswipe');

      if (!clickedListItem) {
        return;
      }

      // get the index of the clicked element
      index = clickedListItem.index('.photoswipe');
      if (index >= 0) {
        // open PhotoSwipe if valid index found
        Drupal.behaviors.photoswipe.openPhotoSwipe(index, $clickedGallery);
      }
      return false;
    },
    /**
     * Code taken from http://photoswipe.com/documentation/getting-started.html
     * and adjusted accordingly.
     */
    openPhotoSwipe: function(index, galleryElement, options) {
      var pswpElement = $('.pswp')[0];
      var items = [];
      options = options || Drupal.behaviors.photoswipe.photoSwipeOptions;

      var images = galleryElement.find('a.photoswipe');
      images.each(function (index) {
        var $image = $(this);
        size = $image.data('size') ? $image.data('size').split('x') : ['',''];
        items.push(
          {
            src : $image.attr('href'),
            w: size[0],
            h: size[1],
            title : $image.data('overlay-title')
          }
        );
      })

      // define options
      options.index = index;
      // define gallery index (for URL)
      options.galleryUID = galleryElement.data('pswp-uid');

      // Pass data to PhotoSwipe and initialize it
      var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
      this.galleries.push(gallery);
    },
    /**
     * Parse picture index and gallery index from URL (#&pid=1&gid=2)
     *
     * Code taken from http://photoswipe.com/documentation/getting-started.html
     * and adjusted accordingly.
     */
    parseHash: function() {
      var hash = window.location.hash.substring(1),
      params = {};

      if (hash.length < 5) {
        return params;
      }

      var vars = hash.split('&');
      for (var i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }
        var pair = vars[i].split('=');
        if (pair.length < 2) {
          continue;
        }
        params[pair[0]] = pair[1];
      }

      if(params.gid) {
        params.gid = parseInt(params.gid, 10);
      }

      if(!params.hasOwnProperty('pid')) {
        return params;
      }
      params.pid = parseInt(params.pid, 10);

      return params;
    }
  };
})(jQuery, Drupal, PhotoSwipe, PhotoSwipeUI_Default);
;
/**
 * @file
 * AddThis javascript actions.
 */

(function ($) {
  Drupal.behaviors.addthis = {
    scriptLoaded: false,

    attach: function(context, settings) {

      // The addthis configuration is not loaded but the settings are passed
      // to do so.
      if (!this.isConfigLoaded() && this.isSettingsLoaded()) {
        // Initialize config.
        this.initConfig();

        // Load widget js.
        if (!this.scriptLoaded) {
          this.loadDomready();
        }
      }
      // The addthis configuration is not loaded but no setting are available
      // to load anything.
      else if(!this.isConfigLoaded() && !this.isSettingsLoaded()) {
        // Do nothing
      }

      // Trigger ready on ajax attach.
      if (context != window.document) {
        Drupal.behaviors.addthis.ajaxLoad(context, settings);
      }

    },

    // Returns if the settings defined by the addthis module are loaded.
    isSettingsLoaded: function () {
      if (typeof Drupal.settings.addthis == 'undefined') {
        return false;
      }
      return true;
    },

    // Returns if the configuration variables needed for widget.js are defined.
    isConfigLoaded: function() {
      if (typeof addthis_config == 'undefined' || typeof addthis_share == 'undefined') {
        return false;
      }
      return true;
    },

    initConfig: function () {
      addthis_config = Drupal.settings.addthis.addthis_config;
      addthis_share = Drupal.settings.addthis.addthis_share;
    },

    // Load the js library when the dom is ready.
    loadDomready: function() {
      // If settings asks for loading the script after the dom is loaded, then
      // load the script here.
      if (!this.scriptLoaded &&
          this.isConfigLoaded() &&
          Drupal.settings.addthis.domready) {
        $.getScript(Drupal.settings.addthis.widget_url, Drupal.behaviors.addthis.scriptReady);
      }
    },

    // Callback for loading the widget.js dynamically.
    scriptReady: function () {
      this.scriptLoaded = true;

      if (!typeof(addthis) != 'undefined') {
        // Give the chance to other scripts to hook into the addthis variable.
        $(document).trigger('addthis.init', addthis);
      }
    },

    // Called when a ajax request returned.
    ajaxLoad: function(context, settings) {
      if (typeof window.addthis != 'undefined' &&
          typeof window.addthis.toolbox == 'function')
      {
          window.addthis.toolbox('.addthis_toolbox');
      }
    }

  };

  // This load the config in time to run any addthis functionality.
  if (Drupal.behaviors.addthis.isConfigLoaded()) {
    addthis_config = Drupal.settings.addthis.addthis_config;
    addthis_share = Drupal.settings.addthis.addthis_share;
  }

  // Document ready in case we want to load AddThis into the dom after every
  // thing is loaded.
  //
  // Is executed once after the attach happened.
  $(document).ready(function() {
    Drupal.behaviors.addthis.loadDomready();
  });

}(jQuery));
;
