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
    
      
      
    
      const element = document.getElementById("16ac282b-9da8-44ea-aa49-be37b4f1384c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '16ac282b-9da8-44ea-aa49-be37b4f1384c' but no matching script tag was found.")
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
                    
                  const docs_json = '{"4bd4bff5-c920-4b0c-b7ed-07d4dff3d52b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17311","type":"Selection"},{"attributes":{},"id":"17275","type":"BasicTicker"},{"attributes":{},"id":"17264","type":"DataRange1d"},{"attributes":{},"id":"17262","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"17316"},"toolbar_location":"above"},"id":"17317","type":"ToolbarBox"},{"attributes":{},"id":"17279","type":"PanTool"},{"attributes":{"below":[{"id":"17270"}],"center":[{"id":"17273"},{"id":"17277"}],"height":288,"left":[{"id":"17274"}],"output_backend":"webgl","renderers":[{"id":"17299"}],"title":{"id":"17301"},"toolbar":{"id":"17288"},"toolbar_location":null,"width":432,"x_range":{"id":"17262"},"x_scale":{"id":"17266"},"y_range":{"id":"17264"},"y_scale":{"id":"17268"}},"id":"17261","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17306","type":"AllLabels"},{"attributes":{},"id":"17309","type":"AllLabels"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17311"},"selection_policy":{"id":"17310"}},"id":"17298","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17286","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"17278"},{"id":"17279"},{"id":"17280"},{"id":"17281"},{"id":"17282"},{"id":"17283"},{"id":"17284"},{"id":"17285"}]},"id":"17288","type":"Toolbar"},{"attributes":{"axis":{"id":"17274"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17277","type":"Grid"},{"attributes":{"axis":{"id":"17270"},"coordinates":null,"group":null,"ticker":null},"id":"17273","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17287","type":"PolyAnnotation"},{"attributes":{},"id":"17310","type":"UnionRenderers"},{"attributes":{},"id":"17268","type":"LinearScale"},{"attributes":{"children":[{"id":"17317"},{"id":"17315"}]},"id":"17318","type":"Column"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17301","type":"Title"},{"attributes":{},"id":"17283","type":"UndoTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17308"},"group":null,"major_label_policy":{"id":"17309"},"ticker":{"id":"17271"}},"id":"17270","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17285","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"17288"}],"tools":[{"id":"17278"},{"id":"17279"},{"id":"17280"},{"id":"17281"},{"id":"17282"},{"id":"17283"},{"id":"17284"},{"id":"17285"}]},"id":"17316","type":"ProxyToolbar"},{"attributes":{"source":{"id":"17298"}},"id":"17300","type":"CDSView"},{"attributes":{},"id":"17308","type":"BasicTickFormatter"},{"attributes":{},"id":"17266","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17297","type":"Scatter"},{"attributes":{"children":[[{"id":"17261"},0,0]]},"id":"17315","type":"GridBox"},{"attributes":{},"id":"17281","type":"WheelZoomTool"},{"attributes":{},"id":"17271","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17286"}},"id":"17280","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"17287"}},"id":"17282","type":"LassoSelectTool"},{"attributes":{},"id":"17305","type":"BasicTickFormatter"},{"attributes":{},"id":"17278","type":"ResetTool"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17305"},"group":null,"major_label_policy":{"id":"17306"},"ticker":{"id":"17275"}},"id":"17274","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"17298"},"glyph":{"id":"17297"},"group":null,"hover_glyph":null,"view":{"id":"17300"}},"id":"17299","type":"GlyphRenderer"},{"attributes":{},"id":"17284","type":"SaveTool"}],"root_ids":["17318"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"4bd4bff5-c920-4b0c-b7ed-07d4dff3d52b","root_ids":["17318"],"roots":{"17318":"16ac282b-9da8-44ea-aa49-be37b4f1384c"}}];
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