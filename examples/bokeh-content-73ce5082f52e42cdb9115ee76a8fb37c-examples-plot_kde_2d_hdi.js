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
    
      
      
    
      const element = document.getElementById("215856a8-3f36-4bb4-a0b6-8937820f8be9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '215856a8-3f36-4bb4-a0b6-8937820f8be9' but no matching script tag was found.")
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
                    
                  const docs_json = '{"9f3737fa-cdc6-4fec-8370-181db3e36830":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"23802"}},"id":"23807","type":"CDSView"},{"attributes":{},"id":"23778","type":"PanTool"},{"attributes":{"source":{"id":"23796"}},"id":"23801","type":"CDSView"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23799","type":"Patch"},{"attributes":{},"id":"23827","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23798","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"opnVkMhE8T/47Sz9O8rwP1Q0+yeimvA/CshgYyyc8D+EY//q6L3wPxIjfoYd8/A/2ngghpgr8T9Y1b01+3fxPwSsQvix6fE/gveo6Q6B8j8ARl1dysLyP2jEj3MNF/M/xjF2Bzac8z+stvyEmQ30P2Q/kTJUNfQ/a2upTYXz9D9UJ5ysaFj1P1Cu49G32/U//Jc71Dej9j/UI42xBu/2P6QI2/sG7vc/dE1yiycq+D9MeXoj1jj5P3UP2Qjvdfk/+OkZS6WD+j9DzNR01df6P6BauXJ0zvs/qvR6gdaN/D9Iy1iaQxn9P/A7+MESZP4/DGDJZZuw/j+YrJfp4a7/P6KOm4jYfABAOIFO0YiaAED2RmscQCIBQEr/OrCnxwFAnrcKRA9tAkAirf5o678CQPJv2td2EgNASCiqa963A0Cc4Hn/RV0EQPCYSZOtAgVAxWMfteY1BUBEURknFagFQJgJ6bp8TQZAalVEAa2zBkDuwbhO5PIGQBiD7ZHqRQdAQnqI4kuYB0CiXIQeaJwHQNgPDiPA8QdApslTvLM5CECWMlh2sz0IQB82wfFYXwhAS3Hy281yCEB27IVx6G8IQEiOS3doVQhAljJYdrM9CEAo5MM7ASoIQCJSzbb/+AdALCc1g1nBB0BCeojiS5gHQKnur2blegdA2KADIZUqB0DuwbhO5PIGQOIEfAIuzwZAuCMDIYtoBkCYCem6fE0GQOI4p7cc9gVARFEZJxWoBUDvFMlP/oEFQHFbZW+REAVA8JhJk60CBUCjUQYQT4oEQJzgef9FXQRAqAyrRzjfA0BIKKpr3rcDQLVUwbqwGwNA8m/a13YSA0CetwpED20CQELYWOaOTAJASv86sKfHAUB0G+5vjDoBQPZGaxxAIgFAoo6biNh8AEA9c5S+OLH/P5isl+nhrv8/8Dv4wRJk/j9Iy1iaQxn9PxQPF9fQDfw/oFq5cnTO+z/46RlLpYP6P0x5eiPWOPk/pAjb+wbu9z97T4Rtgxj3P/yXO9Q3o/Y/VCecrGhY9T8JAndzHir0P6y2/ISZDfQ/AEZdXcrC8j94/G4YmavyPyjdYEIm8vE/WNW9Nft38T+imdWQyETxPw==","dtype":"float64","order":"little","shape":[104]},"y":{"__ndarray__":"Bt8KhP/C9j9sYb9yrtf3P9Djc2Fd7Pg/NGYoUAwB+j+a6Nw+uxX7P/5qkS1qKvw/ZO1FHBk//T/Ib/oKyFP+Pyzyrvl2aP8/SLox9JI+AEDu/RIZCHsAQHz7i2vqyABArjzm4kFTAUAdIOPwS7gBQOB9QFqZ3QFAEr+a0fBnAkAFye3A2aUCQEQA9UhI8gJA1km0dr9ZA0B4QU/An3wDQIwtHNsr7gNAqoKpN/cGBEC6oWC1IXgEQNzDA69OkQRA5Jk0r4H8BEAOBV4mphsFQHh87n2sbwVAQEa4nf2lBUDOg7JlwswFQPDnMNy6HgZAdIcSFVUwBkB2w80aD24GQNvW1UkssAZApshsjKy6BkA0kbKOcOwGQFLKbDZbGwdABgOvj2U5B0DYCccDBEUHQIZj0aG2UAdAAzsTHjphB0Aoc9rj0WEHQEa71uyKUAdA2AnHAwRFB0ATew3YACkHQESauFEu6wZApshsjKy6BkBopRZG0IsGQHSHEhVVMAZALou2J8usBUBARrid/aUFQA4FXiamGwVA3MMDr06RBEDqig5uWIUEQKqCqTf3BgRAeEFPwJ98A0BEAPVISPICQBK/mtHwZwJAKD0I7XAaAkDgfUBamd0BQK485uJBUwFAfPuLa+rIAEC2VzWt+nkAQEi6MfSSPgBALPKu+XZo/z/7rNDdMsb+P8hv+grIU/4/ZO1FHBk//T/SE40rnP38P/5qkS1qKvw/BDlOmNxu+z+a6Nw+uxX7PzRmKFAMAfo/f93o9RLi+T/Q43NhXez4PxonmoREnvg/bGG/cq7X9z/YHDU6nZ73PwbfCoT/wvY/eCoG42O19j9+JVXtQNL1P6JcVpVQrvU//n7aNUQS9T872qGmoZn0P6Jcbe8LhfQ/W3QVnq8A9D/YV+238oTzP4CDBQUShPM/8oiuzMsM8z87El6bUqzyP3TVOMlDcPI/Syacx6ph8j8ot9ElmTjyP1IilHGYL/I/jwmIjs9E8j901TjJQ3DyPyoJg/S/kfI/ZNMsSDQJ8z/YV+238oTzP8pD2OVZkPM/1j14zC5/9D882qGmoZn0P6JcVpVQrvU/hjwHqS1u9j8G3wqE/8L2Pw==","dtype":"float64","order":"little","shape":[104]}},"selected":{"id":"23829"},"selection_policy":{"id":"23828"}},"id":"23808","type":"ColumnDataSource"},{"attributes":{},"id":"23782","type":"UndoTool"},{"attributes":{"below":[{"id":"23769"}],"center":[{"id":"23772"},{"id":"23776"}],"height":500,"left":[{"id":"23773"}],"output_backend":"webgl","renderers":[{"id":"23800"},{"id":"23806"},{"id":"23812"}],"title":{"id":"23816"},"toolbar":{"id":"23787"},"toolbar_location":null,"width":500,"x_range":{"id":"23814"},"x_scale":{"id":"23765"},"y_range":{"id":"23815"},"y_scale":{"id":"23767"}},"id":"23760","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23824","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[526]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[526]}},"selected":{"id":"23825"},"selection_policy":{"id":"23824"}},"id":"23796","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"23784","type":"HoverTool"},{"attributes":{},"id":"23825","type":"Selection"},{"attributes":{"toolbars":[{"id":"23787"}],"tools":[{"id":"23777"},{"id":"23778"},{"id":"23779"},{"id":"23780"},{"id":"23781"},{"id":"23782"},{"id":"23783"},{"id":"23784"}]},"id":"23834","type":"ProxyToolbar"},{"attributes":{},"id":"23823","type":"AllLabels"},{"attributes":{},"id":"23829","type":"Selection"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23803","type":"Patch"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23786","type":"PolyAnnotation"},{"attributes":{},"id":"23819","type":"BasicTickFormatter"},{"attributes":{},"id":"23780","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23785","type":"BoxAnnotation"},{"attributes":{},"id":"23777","type":"ResetTool"},{"attributes":{"toolbar":{"id":"23834"},"toolbar_location":"above"},"id":"23835","type":"ToolbarBox"},{"attributes":{"axis":{"id":"23769"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23772","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23804","type":"Patch"},{"attributes":{},"id":"23783","type":"SaveTool"},{"attributes":{},"id":"23765","type":"LinearScale"},{"attributes":{},"id":"23770","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[310]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[310]}},"selected":{"id":"23827"},"selection_policy":{"id":"23826"}},"id":"23802","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"23785"}},"id":"23779","type":"BoxZoomTool"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23797","type":"Patch"},{"attributes":{"coordinates":null,"group":null},"id":"23816","type":"Title"},{"attributes":{"tools":[{"id":"23777"},{"id":"23778"},{"id":"23779"},{"id":"23780"},{"id":"23781"},{"id":"23782"},{"id":"23783"},{"id":"23784"}]},"id":"23787","type":"Toolbar"},{"attributes":{"end":6.90679774650953,"start":-3.350225737367448},"id":"23814","type":"Range1d"},{"attributes":{"coordinates":null,"formatter":{"id":"23822"},"group":null,"major_label_policy":{"id":"23823"},"ticker":{"id":"23770"}},"id":"23769","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"23802"},"glyph":{"id":"23803"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23805"},"nonselection_glyph":{"id":"23804"},"view":{"id":"23807"}},"id":"23806","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23805","type":"Patch"},{"attributes":{"source":{"id":"23808"}},"id":"23813","type":"CDSView"},{"attributes":{},"id":"23822","type":"BasicTickFormatter"},{"attributes":{},"id":"23820","type":"AllLabels"},{"attributes":{"end":6.488830040864887,"start":-2.08997437590173},"id":"23815","type":"Range1d"},{"attributes":{},"id":"23774","type":"BasicTicker"},{"attributes":{"axis":{"id":"23773"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23776","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23810","type":"Patch"},{"attributes":{"coordinates":null,"formatter":{"id":"23819"},"group":null,"major_label_policy":{"id":"23820"},"ticker":{"id":"23774"}},"id":"23773","type":"LinearAxis"},{"attributes":{"children":[[{"id":"23760"},0,0]]},"id":"23833","type":"GridBox"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23809","type":"Patch"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23811","type":"Patch"},{"attributes":{},"id":"23828","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"23808"},"glyph":{"id":"23809"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23811"},"nonselection_glyph":{"id":"23810"},"view":{"id":"23813"}},"id":"23812","type":"GlyphRenderer"},{"attributes":{},"id":"23826","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"23786"}},"id":"23781","type":"LassoSelectTool"},{"attributes":{},"id":"23767","type":"LinearScale"},{"attributes":{"children":[{"id":"23835"},{"id":"23833"}]},"id":"23836","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"23796"},"glyph":{"id":"23797"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23799"},"nonselection_glyph":{"id":"23798"},"view":{"id":"23801"}},"id":"23800","type":"GlyphRenderer"}],"root_ids":["23836"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"9f3737fa-cdc6-4fec-8370-181db3e36830","root_ids":["23836"],"roots":{"23836":"215856a8-3f36-4bb4-a0b6-8937820f8be9"}}];
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