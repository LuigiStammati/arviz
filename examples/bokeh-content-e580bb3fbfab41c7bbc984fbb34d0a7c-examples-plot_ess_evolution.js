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
    
      
      
    
      const element = document.getElementById("196fbf52-e44a-4390-9bb3-0c9a6c1d66cb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '196fbf52-e44a-4390-9bb3-0c9a6c1d66cb' but no matching script tag was found.")
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
                    
                  const docs_json = '{"9d61314d-5938-4045-9c54-3515b50288df":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"20909"},"glyph":{"id":"20910"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20912"},"nonselection_glyph":{"id":"20911"},"view":{"id":"20914"}},"id":"20913","type":"GlyphRenderer"},{"attributes":{},"id":"20862","type":"LinearScale"},{"attributes":{},"id":"20865","type":"BasicTicker"},{"attributes":{},"id":"20872","type":"ResetTool"},{"attributes":{"axis":{"id":"20868"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20871","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20911","type":"Circle"},{"attributes":{"source":{"id":"20897"}},"id":"20902","type":"CDSView"},{"attributes":{},"id":"20875","type":"WheelZoomTool"},{"attributes":{},"id":"20877","type":"UndoTool"},{"attributes":{"children":[{"id":"20941"},{"id":"20939"}]},"id":"20942","type":"Column"},{"attributes":{"overlay":{"id":"20881"}},"id":"20876","type":"LassoSelectTool"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20923"},"group":null,"major_label_policy":{"id":"20924"},"ticker":{"id":"20869"}},"id":"20868","type":"LinearAxis"},{"attributes":{},"id":"20878","type":"SaveTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20880","type":"BoxAnnotation"},{"attributes":{},"id":"20858","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"20940"},"toolbar_location":"above"},"id":"20941","type":"ToolbarBox"},{"attributes":{},"id":"20860","type":"LinearScale"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20895"},{"id":"20901"}]},"id":"20917","type":"LegendItem"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20881","type":"PolyAnnotation"},{"attributes":{},"id":"20869","type":"BasicTicker"},{"attributes":{},"id":"20934","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"20879","type":"HoverTool"},{"attributes":{},"id":"20923","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20913"},{"id":"20907"}]},"id":"20918","type":"LegendItem"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20906","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20899","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20933"},"selection_policy":{"id":"20932"}},"id":"20903","type":"ColumnDataSource"},{"attributes":{},"id":"20931","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20910","type":"Circle"},{"attributes":{},"id":"20927","type":"AllLabels"},{"attributes":{"source":{"id":"20903"}},"id":"20908","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20912","type":"Circle"},{"attributes":{},"id":"20928","type":"UnionRenderers"},{"attributes":{},"id":"20935","type":"Selection"},{"attributes":{"source":{"id":"20909"}},"id":"20914","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20919","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20929"},"selection_policy":{"id":"20928"}},"id":"20891","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20935"},"selection_policy":{"id":"20934"}},"id":"20909","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20905","type":"Line"},{"attributes":{"toolbars":[{"id":"20882"}],"tools":[{"id":"20872"},{"id":"20873"},{"id":"20874"},{"id":"20875"},{"id":"20876"},{"id":"20877"},{"id":"20878"},{"id":"20879"}]},"id":"20940","type":"ProxyToolbar"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20917"},{"id":"20918"}],"location":"center_right","orientation":"horizontal"},"id":"20916","type":"Legend"},{"attributes":{},"id":"20932","type":"UnionRenderers"},{"attributes":{},"id":"20856","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20892","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20894","type":"Circle"},{"attributes":{"above":[{"id":"20916"}],"below":[{"id":"20864"}],"center":[{"id":"20867"},{"id":"20871"}],"height":500,"left":[{"id":"20868"}],"output_backend":"webgl","renderers":[{"id":"20895"},{"id":"20901"},{"id":"20907"},{"id":"20913"},{"id":"20915"}],"title":{"id":"20919"},"toolbar":{"id":"20882"},"toolbar_location":null,"width":500,"x_range":{"id":"20856"},"x_scale":{"id":"20860"},"y_range":{"id":"20858"},"y_scale":{"id":"20862"}},"id":"20855","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20873","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20915","type":"Span"},{"attributes":{},"id":"20926","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"20872"},{"id":"20873"},{"id":"20874"},{"id":"20875"},{"id":"20876"},{"id":"20877"},{"id":"20878"},{"id":"20879"}]},"id":"20882","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"20891"},"glyph":{"id":"20892"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20894"},"nonselection_glyph":{"id":"20893"},"view":{"id":"20896"}},"id":"20895","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20900","type":"Line"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20898","type":"Line"},{"attributes":{},"id":"20924","type":"AllLabels"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20904","type":"Line"},{"attributes":{"axis":{"id":"20864"},"coordinates":null,"group":null,"ticker":null},"id":"20867","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"20903"},"glyph":{"id":"20904"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20906"},"nonselection_glyph":{"id":"20905"},"view":{"id":"20908"}},"id":"20907","type":"GlyphRenderer"},{"attributes":{},"id":"20929","type":"Selection"},{"attributes":{"source":{"id":"20891"}},"id":"20896","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20897"},"glyph":{"id":"20898"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20900"},"nonselection_glyph":{"id":"20899"},"view":{"id":"20902"}},"id":"20901","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"20880"}},"id":"20874","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20893","type":"Circle"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20926"},"group":null,"major_label_policy":{"id":"20927"},"ticker":{"id":"20865"}},"id":"20864","type":"LinearAxis"},{"attributes":{},"id":"20930","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"20855"},0,0]]},"id":"20939","type":"GridBox"},{"attributes":{},"id":"20933","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20931"},"selection_policy":{"id":"20930"}},"id":"20897","type":"ColumnDataSource"}],"root_ids":["20942"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"9d61314d-5938-4045-9c54-3515b50288df","root_ids":["20942"],"roots":{"20942":"196fbf52-e44a-4390-9bb3-0c9a6c1d66cb"}}];
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