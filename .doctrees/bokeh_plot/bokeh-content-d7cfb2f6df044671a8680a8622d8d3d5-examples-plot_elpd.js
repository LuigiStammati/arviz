(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("7f91ca22-f24a-4227-9c0f-c298d35ace88");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7f91ca22-f24a-4227-9c0f-c298d35ace88' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.1.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"4dfcd403-a003-40f3-b10b-f300da1b85db":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20583","type":"PolyAnnotation"},{"attributes":{},"id":"20604","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"20612"},"toolbar_location":"above"},"id":"20613","type":"ToolbarBox"},{"attributes":{"below":[{"id":"20566"}],"center":[{"id":"20569"},{"id":"20573"}],"height":288,"left":[{"id":"20570"}],"output_backend":"webgl","renderers":[{"id":"20595"}],"title":{"id":"20597"},"toolbar":{"id":"20584"},"toolbar_location":null,"width":432,"x_range":{"id":"20558"},"x_scale":{"id":"20562"},"y_range":{"id":"20560"},"y_scale":{"id":"20564"}},"id":"20557","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20597","type":"Title"},{"attributes":{},"id":"20580","type":"SaveTool"},{"attributes":{},"id":"20602","type":"AllLabels"},{"attributes":{},"id":"20574","type":"ResetTool"},{"attributes":{"axis":{"id":"20570"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20573","type":"Grid"},{"attributes":{},"id":"20606","type":"UnionRenderers"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20601"},"group":null,"major_label_policy":{"id":"20602"},"ticker":{"id":"20571"}},"id":"20570","type":"LinearAxis"},{"attributes":{},"id":"20564","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20593","type":"Scatter"},{"attributes":{},"id":"20575","type":"PanTool"},{"attributes":{"overlay":{"id":"20583"}},"id":"20578","type":"LassoSelectTool"},{"attributes":{},"id":"20601","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"20594"}},"id":"20596","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"20604"},"group":null,"major_label_policy":{"id":"20605"},"ticker":{"id":"20567"}},"id":"20566","type":"LinearAxis"},{"attributes":{},"id":"20577","type":"WheelZoomTool"},{"attributes":{"toolbars":[{"id":"20584"}],"tools":[{"id":"20574"},{"id":"20575"},{"id":"20576"},{"id":"20577"},{"id":"20578"},{"id":"20579"},{"id":"20580"},{"id":"20581"}]},"id":"20612","type":"ProxyToolbar"},{"attributes":{},"id":"20558","type":"DataRange1d"},{"attributes":{"children":[[{"id":"20557"},0,0]]},"id":"20611","type":"GridBox"},{"attributes":{},"id":"20571","type":"BasicTicker"},{"attributes":{"callback":null},"id":"20581","type":"HoverTool"},{"attributes":{},"id":"20567","type":"BasicTicker"},{"attributes":{},"id":"20607","type":"Selection"},{"attributes":{"children":[{"id":"20613"},{"id":"20611"}]},"id":"20614","type":"Column"},{"attributes":{},"id":"20562","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20582","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"20574"},{"id":"20575"},{"id":"20576"},{"id":"20577"},{"id":"20578"},{"id":"20579"},{"id":"20580"},{"id":"20581"}]},"id":"20584","type":"Toolbar"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20607"},"selection_policy":{"id":"20606"}},"id":"20594","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"20594"},"glyph":{"id":"20593"},"group":null,"hover_glyph":null,"view":{"id":"20596"}},"id":"20595","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"20582"}},"id":"20576","type":"BoxZoomTool"},{"attributes":{},"id":"20605","type":"AllLabels"},{"attributes":{},"id":"20579","type":"UndoTool"},{"attributes":{},"id":"20560","type":"DataRange1d"},{"attributes":{"axis":{"id":"20566"},"coordinates":null,"group":null,"ticker":null},"id":"20569","type":"Grid"}],"root_ids":["20614"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"4dfcd403-a003-40f3-b10b-f300da1b85db","root_ids":["20614"],"roots":{"20614":"7f91ca22-f24a-4227-9c0f-c298d35ace88"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();