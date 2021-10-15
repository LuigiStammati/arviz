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
    
      
      
    
      const element = document.getElementById("a34d6fb4-4f63-4eda-8d90-05da61d1dbf5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a34d6fb4-4f63-4eda-8d90-05da61d1dbf5' but no matching script tag was found.")
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
                    
                  const docs_json = '{"2a576e4f-c5ad-4d7a-8807-cfcb94bdc6e4":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"22114"}},"id":"22109","type":"LassoSelectTool"},{"attributes":{},"id":"22140","type":"AllLabels"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"22125","type":"Patch"},{"attributes":{},"id":"22095","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"22113","type":"BoxAnnotation"},{"attributes":{},"id":"22091","type":"DataRange1d"},{"attributes":{"below":[{"id":"22097"}],"center":[{"id":"22100"},{"id":"22104"}],"height":500,"left":[{"id":"22101"}],"output_backend":"webgl","renderers":[{"id":"22128"},{"id":"22134"}],"title":{"id":"22136"},"toolbar":{"id":"22115"},"toolbar_location":"above","width":500,"x_range":{"id":"22089"},"x_scale":{"id":"22093"},"y_range":{"id":"22091"},"y_scale":{"id":"22095"}},"id":"22088","subtype":"Figure","type":"Plot"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"22131","type":"Line"},{"attributes":{"callback":null},"id":"22112","type":"HoverTool"},{"attributes":{},"id":"22145","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"22145"},"selection_policy":{"id":"22144"}},"id":"22124","type":"ColumnDataSource"},{"attributes":{},"id":"22089","type":"DataRange1d"},{"attributes":{},"id":"22146","type":"UnionRenderers"},{"attributes":{},"id":"22098","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"22130"},"glyph":{"id":"22131"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"22133"},"nonselection_glyph":{"id":"22132"},"view":{"id":"22135"}},"id":"22134","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"22124"},"glyph":{"id":"22125"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"22127"},"nonselection_glyph":{"id":"22126"},"view":{"id":"22129"}},"id":"22128","type":"GlyphRenderer"},{"attributes":{},"id":"22142","type":"BasicTickFormatter"},{"attributes":{},"id":"22139","type":"BasicTickFormatter"},{"attributes":{},"id":"22102","type":"BasicTicker"},{"attributes":{},"id":"22106","type":"PanTool"},{"attributes":{"tools":[{"id":"22105"},{"id":"22106"},{"id":"22107"},{"id":"22108"},{"id":"22109"},{"id":"22110"},{"id":"22111"},{"id":"22112"}]},"id":"22115","type":"Toolbar"},{"attributes":{},"id":"22144","type":"UnionRenderers"},{"attributes":{"source":{"id":"22130"}},"id":"22135","type":"CDSView"},{"attributes":{"overlay":{"id":"22113"}},"id":"22107","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.2,"fill_color":"#ff0000","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"22127","type":"Patch"},{"attributes":{"coordinates":null,"formatter":{"id":"22139"},"group":null,"major_label_policy":{"id":"22140"},"ticker":{"id":"22102"}},"id":"22101","type":"LinearAxis"},{"attributes":{},"id":"22147","type":"Selection"},{"attributes":{"axis":{"id":"22097"},"coordinates":null,"group":null,"ticker":null},"id":"22100","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"22133","type":"Line"},{"attributes":{"source":{"id":"22124"}},"id":"22129","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"22126","type":"Patch"},{"attributes":{},"id":"22108","type":"WheelZoomTool"},{"attributes":{},"id":"22143","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"Q9HErslqB8ARnBp34RMGwEVEd1DDUATAau5a29fbA8B9bg6OHwEAwInvVbdyofu/zxnuuwS0+L8p/zDON9L3v0VY1/yDh/a/0rWZ1a8H9L+PMryWl+/yv+9ZKshglvK/JEIAf9008r/h+rhoxhvxv703/EF93/C/oC2fFJxs8L8w+ycGOojtv0d0ANKSVOu/7a+a7eND67/XYdQhltTqv9RdCOycDOq/kv7xaJZo6L9M7UBFrQbov1/fs1qTVea/Zo7NedDe5b+F64+qm7blv48DamySYeW/qSMb3Vod5b9jMwUuNBbkv8geuieYueO/98hUArWa478c+Jnl8RnhvykEYT9/FeG/QinpweLM4L+SWGJA8PPdvxVJcA70Pt2/mQ5DP3pM2b/pvggdaJDWvwv7XFJySNW/zTI5jRyO1L8Ln6q5uYHUv94f9lN2HdK/TnCT8G3o0b9bKD66xcbRv5yZuuf3vNG/IB0nJIWL0L9JLOnvXbDFv4jnhfml77+/olTsWLhHj78/PYwwwguSPwCcUf+m47w/9Sv3ZA77wD+xglipvIvBP+C9wRKTJ84/EkuIJihvzj+xKkZmwKzQPz82MqhVPdE/t4EOIJwx0j9T14psmbXTP3JE3j2uvdc/t+DUOUHD2D8ao3uLyJfbP6TqiLMld94/XvTvyyOy3j8VmATHSU/hP8o4EsqXUOI/9gor9rMe5T9+cvAhWdHmPz760kqtBuc/hq+3kGKa5z9I7gclAf/oP7czyseYX+k/6qLmtSah6j+A2/Rf987qP6pgtC+FDes/3lGzS1sP6z/aYB+69a7rPy7z/Taj9+s/weVjO8ck7D8sl6jqw5LuP8sa4QMliO8/de3S+sTI8T8AHS7B+8byP/BfIggxEfQ/0sfQbT8+9D8Wuwx0aoj0P/0Q+bJr1/Y/k1UoT4fE9z/dq6IvqY34P2j3JAr6u/g/O62A9ImW+z/k6M8vwdH8P6jK1RkXuf0/2Sn6W3cX/j+PJbtL2jX+P9Pxa5zYgv4/3I/Evlje/j+QIw8IFgn/P9iintsBKwBAQ6VKyPGRAkA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"el12omwq4T/ex8oRPdjjP3Z3EV95Xuc/LCNKSVBI6D8GI+PjwP3vPzwIVaRGL/I/GPMIov2l8z9sgOcY5Bb0P95TlAE+vPQ/FyUzFSj89T+45qE0NIj2PwjT6pvPtPY/7t5/QJHl9j+QgqPLHHL3PyLkAV9BkPc/MGmw9bHJ9z80AXZ+8Z34P+7if0vbKvk/BVSZBAcv+T+K54p32kr5P4vo/cTYfPk/XIDDZdrl+T+txK+uVP75PygIUymbavo/ZpyM4UuI+j8fBVwVWZL6Pxx/5WSbp/o/Fje5SKm4+j8ns370cvr6P054EfaZEfs/ws1qv1IZ+z/5gZmGg7n7P/a+JzCguvs/sLWFT8fM+z/utPP3gUH8P932MX4hWPw/LZ4XuHDW/D8j6F788i39P59gtLXxVv0/ptlYbjxu/T8frMrIyG/9PwQ8gTVRvP0/9pHtQfLC/T/1OrhIJ8f9P8ysCANhyP0/XBx7W4/u/T87bQEh+qT+P8TQM9CCAP8/qxOnR7jg/z89jDDCCxIAQHBG/ZuOcwBAYLknc9iHAEAWxErlXYwAQO8Nlpg88QBAWUI0QXnzAECrYmQGzAoBQGQjg1rVEwFAG+gAwhkjAUB1rciWWTsBQEfk3ePaewFAC06dEzSMAUAyureIfLkBQKqOOFty5wFARv++PCLrAUADk+A46SkCQBlHQvkSSgJAX2HFftajAkBQDj4kK9oCQEhfWqnV4AJA8fUWUkzzAkDJ/aAk4B8DQHdG+RjzKwNAXdS81iRUA0Bwm/7r3lkDQBWM9qWwYQNAPGp2aethA0Ab7EO33nUDQGa+32b0fgNAuHxs55iEA0DmElV9WNIDQFkjfKAE8QNAXbu0PjFyBEBAh0vwvrEEQPyXCEJMBAVA9DF0248PBUDGLgOdGiIFQD9EvuzatQVAZRXK0yHxBUD3quhLaiMGQNo9iYL+LgZATysgfaLlBkA5+vNLcDQHQKpydcZFbgdAdor+1t2FB0Bkye6Sdo0HQHX8Gie2oAdA9yOxL5a3B0DkyAOCRcIHQGxRz+2AFQhAolIl5PhICUA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"22147"},"selection_policy":{"id":"22146"}},"id":"22130","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null},"id":"22136","type":"Title"},{"attributes":{},"id":"22105","type":"ResetTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"22114","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"22132","type":"Line"},{"attributes":{"axis":{"id":"22101"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"22104","type":"Grid"},{"attributes":{},"id":"22110","type":"UndoTool"},{"attributes":{},"id":"22093","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"22142"},"group":null,"major_label_policy":{"id":"22143"},"ticker":{"id":"22098"}},"id":"22097","type":"LinearAxis"},{"attributes":{},"id":"22111","type":"SaveTool"}],"root_ids":["22088"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"2a576e4f-c5ad-4d7a-8807-cfcb94bdc6e4","root_ids":["22088"],"roots":{"22088":"a34d6fb4-4f63-4eda-8d90-05da61d1dbf5"}}];
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