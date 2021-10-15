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
    
      
      
    
      const element = document.getElementById("37eb1626-3f0a-4980-8fec-50aeff68b1a4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '37eb1626-3f0a-4980-8fec-50aeff68b1a4' but no matching script tag was found.")
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
                    
                  const docs_json = '{"57e51c69-c7b8-4e9c-b0d9-44e3f338a102":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"41730"}},"id":"41724","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41767","type":"PolyAnnotation"},{"attributes":{},"id":"41728","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41785","type":"Span"},{"attributes":{},"id":"41828","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"41729","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"41787"},"glyph":{"id":"41786"},"group":null,"hover_glyph":null,"view":{"id":"41789"}},"id":"41788","type":"GlyphRenderer"},{"attributes":{},"id":"41725","type":"WheelZoomTool"},{"attributes":{},"id":"41829","type":"Selection"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41809"},"group":null,"major_label_policy":{"id":"41810"},"ticker":{"id":"41719"}},"id":"41718","type":"LinearAxis"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41817"},"selection_policy":{"id":"41816"}},"id":"41787","type":"ColumnDataSource"},{"attributes":{},"id":"41727","type":"UndoTool"},{"attributes":{"overlay":{"id":"41731"}},"id":"41726","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41829"},"selection_policy":{"id":"41828"}},"id":"41792","type":"ColumnDataSource"},{"attributes":{},"id":"41719","type":"BasicTicker"},{"attributes":{"axis":{"id":"41718"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41721","type":"Grid"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41826"},"group":null,"major_label_policy":{"id":"41827"},"ticker":{"id":"41751"}},"id":"41750","type":"LinearAxis"},{"attributes":{},"id":"41722","type":"ResetTool"},{"attributes":{},"id":"41723","type":"PanTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41730","type":"BoxAnnotation"},{"attributes":{},"id":"41742","type":"DataRange1d"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41731","type":"PolyAnnotation"},{"attributes":{},"id":"41809","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41812"},"group":null,"major_label_policy":{"id":"41813"},"ticker":{"id":"41715"}},"id":"41714","type":"LinearAxis"},{"attributes":{},"id":"41810","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41783","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41786","type":"Scatter"},{"attributes":{},"id":"41830","type":"UnionRenderers"},{"attributes":{},"id":"41812","type":"BasicTickFormatter"},{"attributes":{"end":1,"start":-0.05},"id":"41708","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41780","type":"Circle"},{"attributes":{},"id":"41831","type":"Selection"},{"attributes":{},"id":"41813","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"41777"},"glyph":{"id":"41778"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41780"},"nonselection_glyph":{"id":"41779"},"view":{"id":"41782"}},"id":"41781","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"41750"}],"center":[{"id":"41753"},{"id":"41757"}],"height":500,"left":[{"id":"41754"}],"output_backend":"webgl","renderers":[{"id":"41796"},{"id":"41798"},{"id":"41799"},{"id":"41800"},{"id":"41803"}],"title":{"id":"41805"},"toolbar":{"id":"41768"},"toolbar_location":null,"width":500,"x_range":{"id":"41742"},"x_scale":{"id":"41746"},"y_range":{"id":"41744"},"y_scale":{"id":"41748"}},"id":"41741","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"41802"}},"id":"41804","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41790","type":"Title"},{"attributes":{"below":[{"id":"41714"}],"center":[{"id":"41717"},{"id":"41721"}],"height":500,"left":[{"id":"41718"}],"output_backend":"webgl","renderers":[{"id":"41781"},{"id":"41783"},{"id":"41784"},{"id":"41785"},{"id":"41788"}],"title":{"id":"41790"},"toolbar":{"id":"41732"},"toolbar_location":null,"width":500,"x_range":{"id":"41706"},"x_scale":{"id":"41710"},"y_range":{"id":"41708"},"y_scale":{"id":"41712"}},"id":"41705","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41814","type":"UnionRenderers"},{"attributes":{},"id":"41746","type":"LinearScale"},{"attributes":{"source":{"id":"41787"}},"id":"41789","type":"CDSView"},{"attributes":{},"id":"41815","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41784","type":"Span"},{"attributes":{"children":[[{"id":"41705"},0,0],[{"id":"41741"},0,1]]},"id":"41835","type":"GridBox"},{"attributes":{"source":{"id":"41792"}},"id":"41797","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41793","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41794","type":"Circle"},{"attributes":{},"id":"41706","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41795","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"41792"},"glyph":{"id":"41793"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41795"},"nonselection_glyph":{"id":"41794"},"view":{"id":"41797"}},"id":"41796","type":"GlyphRenderer"},{"attributes":{},"id":"41755","type":"BasicTicker"},{"attributes":{"end":1,"start":-0.05},"id":"41744","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41798","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41823"},"group":null,"major_label_policy":{"id":"41824"},"ticker":{"id":"41755"}},"id":"41754","type":"LinearAxis"},{"attributes":{"tools":[{"id":"41722"},{"id":"41723"},{"id":"41724"},{"id":"41725"},{"id":"41726"},{"id":"41727"},{"id":"41728"},{"id":"41729"}]},"id":"41732","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41815"},"selection_policy":{"id":"41814"}},"id":"41777","type":"ColumnDataSource"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41801","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41799","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41805","type":"Title"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41766","type":"BoxAnnotation"},{"attributes":{},"id":"41816","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41778","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41779","type":"Circle"},{"attributes":{},"id":"41748","type":"LinearScale"},{"attributes":{},"id":"41817","type":"Selection"},{"attributes":{"callback":null},"id":"41765","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"41732"},{"id":"41768"}],"tools":[{"id":"41722"},{"id":"41723"},{"id":"41724"},{"id":"41725"},{"id":"41726"},{"id":"41727"},{"id":"41728"},{"id":"41729"},{"id":"41758"},{"id":"41759"},{"id":"41760"},{"id":"41761"},{"id":"41762"},{"id":"41763"},{"id":"41764"},{"id":"41765"}]},"id":"41836","type":"ProxyToolbar"},{"attributes":{},"id":"41751","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41800","type":"Span"},{"attributes":{"axis":{"id":"41750"},"coordinates":null,"group":null,"ticker":null},"id":"41753","type":"Grid"},{"attributes":{},"id":"41715","type":"BasicTicker"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41831"},"selection_policy":{"id":"41830"}},"id":"41802","type":"ColumnDataSource"},{"attributes":{},"id":"41823","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"41802"},"glyph":{"id":"41801"},"group":null,"hover_glyph":null,"view":{"id":"41804"}},"id":"41803","type":"GlyphRenderer"},{"attributes":{},"id":"41712","type":"LinearScale"},{"attributes":{},"id":"41824","type":"AllLabels"},{"attributes":{"axis":{"id":"41754"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41757","type":"Grid"},{"attributes":{"toolbar":{"id":"41836"},"toolbar_location":"above"},"id":"41837","type":"ToolbarBox"},{"attributes":{},"id":"41763","type":"UndoTool"},{"attributes":{},"id":"41826","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"41714"},"coordinates":null,"group":null,"ticker":null},"id":"41717","type":"Grid"},{"attributes":{"source":{"id":"41777"}},"id":"41782","type":"CDSView"},{"attributes":{"overlay":{"id":"41766"}},"id":"41760","type":"BoxZoomTool"},{"attributes":{},"id":"41759","type":"PanTool"},{"attributes":{},"id":"41827","type":"AllLabels"},{"attributes":{},"id":"41758","type":"ResetTool"},{"attributes":{"overlay":{"id":"41767"}},"id":"41762","type":"LassoSelectTool"},{"attributes":{},"id":"41710","type":"LinearScale"},{"attributes":{"children":[{"id":"41837"},{"id":"41835"}]},"id":"41838","type":"Column"},{"attributes":{"tools":[{"id":"41758"},{"id":"41759"},{"id":"41760"},{"id":"41761"},{"id":"41762"},{"id":"41763"},{"id":"41764"},{"id":"41765"}]},"id":"41768","type":"Toolbar"},{"attributes":{},"id":"41764","type":"SaveTool"},{"attributes":{},"id":"41761","type":"WheelZoomTool"}],"root_ids":["41838"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"57e51c69-c7b8-4e9c-b0d9-44e3f338a102","root_ids":["41838"],"roots":{"41838":"37eb1626-3f0a-4980-8fec-50aeff68b1a4"}}];
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