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
    
      
      
    
      const element = document.getElementById("8580da73-0efb-4cec-a1e3-76b3c0aa4914");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8580da73-0efb-4cec-a1e3-76b3c0aa4914' but no matching script tag was found.")
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
                    
                  const docs_json = '{"489df172-ecb2-45ab-937e-fae5d0b624c6":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18139","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18133"},"selection_policy":{"id":"18132"}},"id":"18094","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"18083"}],"tools":[{"id":"18073"},{"id":"18074"},{"id":"18075"},{"id":"18076"},{"id":"18077"},{"id":"18078"},{"id":"18079"},{"id":"18080"}]},"id":"18146","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18109","type":"Circle"},{"attributes":{},"id":"18138","type":"UnionRenderers"},{"attributes":{},"id":"18140","type":"UnionRenderers"},{"attributes":{},"id":"18128","type":"AllLabels"},{"attributes":{},"id":"18133","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"18094"},"glyph":{"id":"18095"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18097"},"nonselection_glyph":{"id":"18096"},"view":{"id":"18099"}},"id":"18098","type":"GlyphRenderer"},{"attributes":{},"id":"18074","type":"PanTool"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18101","type":"MultiLine"},{"attributes":{},"id":"18134","type":"UnionRenderers"},{"attributes":{"coordinates":null,"formatter":{"id":"18127"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18128"},"ticker":{"id":"18092"}},"id":"18069","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18095","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18097","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18115","type":"MultiLine"},{"attributes":{},"id":"18127","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"18106"},"glyph":{"id":"18107"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18109"},"nonselection_glyph":{"id":"18108"},"view":{"id":"18111"}},"id":"18110","type":"GlyphRenderer"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18113","type":"MultiLine"},{"attributes":{"source":{"id":"18100"}},"id":"18105","type":"CDSView"},{"attributes":{},"id":"18132","type":"UnionRenderers"},{"attributes":{"source":{"id":"18094"}},"id":"18099","type":"CDSView"},{"attributes":{"source":{"id":"18118"}},"id":"18123","type":"CDSView"},{"attributes":{"source":{"id":"18112"}},"id":"18117","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18096","type":"Scatter"},{"attributes":{},"id":"18137","type":"Selection"},{"attributes":{"below":[{"id":"18065"}],"center":[{"id":"18068"},{"id":"18072"}],"height":500,"left":[{"id":"18069"}],"output_backend":"webgl","renderers":[{"id":"18098"},{"id":"18104"},{"id":"18110"},{"id":"18116"},{"id":"18122"},{"id":"18124"}],"title":{"id":"18125"},"toolbar":{"id":"18083"},"toolbar_location":null,"width":500,"x_range":{"id":"18057"},"x_scale":{"id":"18061"},"y_range":{"id":"18059"},"y_scale":{"id":"18063"}},"id":"18056","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"18082"}},"id":"18077","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"18124","type":"Span"},{"attributes":{},"id":"18061","type":"LinearScale"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18139"},"selection_policy":{"id":"18138"}},"id":"18112","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18108","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"18112"},"glyph":{"id":"18113"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18115"},"nonselection_glyph":{"id":"18114"},"view":{"id":"18117"}},"id":"18116","type":"GlyphRenderer"},{"attributes":{},"id":"18078","type":"UndoTool"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18135"},"selection_policy":{"id":"18134"}},"id":"18100","type":"ColumnDataSource"},{"attributes":{},"id":"18135","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18120","type":"Circle"},{"attributes":{},"id":"18131","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18141"},"selection_policy":{"id":"18140"}},"id":"18118","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18107","type":"Circle"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18103","type":"MultiLine"},{"attributes":{},"id":"18063","type":"LinearScale"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18082","type":"PolyAnnotation"},{"attributes":{"tools":[{"id":"18073"},{"id":"18074"},{"id":"18075"},{"id":"18076"},{"id":"18077"},{"id":"18078"},{"id":"18079"},{"id":"18080"}]},"id":"18083","type":"Toolbar"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18092","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18119","type":"Circle"},{"attributes":{},"id":"18076","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18118"},"glyph":{"id":"18119"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18121"},"nonselection_glyph":{"id":"18120"},"view":{"id":"18123"}},"id":"18122","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18069"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18072","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18114","type":"MultiLine"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18130"},"group":null,"major_label_policy":{"id":"18131"},"ticker":{"id":"18066"}},"id":"18065","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"18100"},"glyph":{"id":"18101"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18103"},"nonselection_glyph":{"id":"18102"},"view":{"id":"18105"}},"id":"18104","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18121","type":"Circle"},{"attributes":{},"id":"18073","type":"ResetTool"},{"attributes":{"children":[{"id":"18147"},{"id":"18145"}]},"id":"18148","type":"Column"},{"attributes":{},"id":"18079","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18137"},"selection_policy":{"id":"18136"}},"id":"18106","type":"ColumnDataSource"},{"attributes":{},"id":"18130","type":"BasicTickFormatter"},{"attributes":{},"id":"18057","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18102","type":"MultiLine"},{"attributes":{"coordinates":null,"group":null},"id":"18125","type":"Title"},{"attributes":{"axis":{"id":"18065"},"coordinates":null,"group":null,"ticker":null},"id":"18068","type":"Grid"},{"attributes":{"source":{"id":"18106"}},"id":"18111","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18081","type":"BoxAnnotation"},{"attributes":{},"id":"18136","type":"UnionRenderers"},{"attributes":{},"id":"18141","type":"Selection"},{"attributes":{"children":[[{"id":"18056"},0,0]]},"id":"18145","type":"GridBox"},{"attributes":{"overlay":{"id":"18081"}},"id":"18075","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"18080","type":"HoverTool"},{"attributes":{},"id":"18066","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"18146"},"toolbar_location":"above"},"id":"18147","type":"ToolbarBox"},{"attributes":{"end":0.5,"start":-1.5},"id":"18059","type":"DataRange1d"}],"root_ids":["18148"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"489df172-ecb2-45ab-937e-fae5d0b624c6","root_ids":["18148"],"roots":{"18148":"8580da73-0efb-4cec-a1e3-76b3c0aa4914"}}];
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