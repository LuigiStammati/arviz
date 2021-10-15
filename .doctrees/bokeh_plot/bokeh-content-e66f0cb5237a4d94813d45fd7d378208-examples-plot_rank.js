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
    
      
      
    
      const element = document.getElementById("59ce2aaa-9fa6-4507-a0ef-c1d65e601227");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '59ce2aaa-9fa6-4507-a0ef-c1d65e601227' but no matching script tag was found.")
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
                    
                  const docs_json = '{"890e53d1-90cc-4952-9155-76621d9221bc":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48065","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48066","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48057"},"glyph":{"id":"48058"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48060"},"nonselection_glyph":{"id":"48059"},"view":{"id":"48062"}},"id":"48061","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48076","type":"VBar"},{"attributes":{"source":{"id":"48057"}},"id":"48062","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48070","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48073","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48120"},"selection_policy":{"id":"48119"}},"id":"48064","type":"ColumnDataSource"},{"attributes":{},"id":"47978","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"48064"},"glyph":{"id":"48065"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48067"},"nonselection_glyph":{"id":"48066"},"view":{"id":"48069"}},"id":"48068","type":"GlyphRenderer"},{"attributes":{},"id":"47995","type":"UndoTool"},{"attributes":{"source":{"id":"48064"}},"id":"48069","type":"CDSView"},{"attributes":{},"id":"47996","type":"SaveTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48067","type":"VBar"},{"attributes":{"overlay":{"id":"47999"}},"id":"47994","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48097","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"48103","type":"FixedTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48077","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48131"},"selection_policy":{"id":"48130"}},"id":"48075","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"47997","type":"HoverTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48090","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48091","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48082"},"glyph":{"id":"48083"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48085"},"nonselection_glyph":{"id":"48084"},"view":{"id":"48087"}},"id":"48086","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48078","type":"VBar"},{"attributes":{"axis":{"id":"47982"},"coordinates":null,"group":null,"ticker":null},"id":"47985","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48135"},"selection_policy":{"id":"48134"}},"id":"48089","type":"ColumnDataSource"},{"attributes":{"source":{"id":"48082"}},"id":"48087","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47998","type":"BoxAnnotation"},{"attributes":{},"id":"47976","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48095","type":"Span"},{"attributes":{"toolbar":{"id":"48142"},"toolbar_location":"above"},"id":"48143","type":"ToolbarBox"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48128"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48129"},"ticker":{"id":"48017"}},"id":"48016","type":"LinearAxis"},{"attributes":{},"id":"48136","type":"UnionRenderers"},{"attributes":{},"id":"48012","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"48089"},"glyph":{"id":"48090"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48092"},"nonselection_glyph":{"id":"48091"},"view":{"id":"48094"}},"id":"48093","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48089"}},"id":"48094","type":"CDSView"},{"attributes":{},"id":"47980","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48092","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48049","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48098","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48102","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48084","type":"VBar"},{"attributes":{"below":[{"id":"47982"}],"center":[{"id":"47985"},{"id":"47989"},{"id":"48049"},{"id":"48056"},{"id":"48063"},{"id":"48070"}],"height":331,"left":[{"id":"47986"}],"output_backend":"webgl","renderers":[{"id":"48047"},{"id":"48054"},{"id":"48061"},{"id":"48068"}],"title":{"id":"48073"},"toolbar":{"id":"48000"},"toolbar_location":null,"width":496,"x_range":{"id":"47974"},"x_scale":{"id":"47978"},"y_range":{"id":"47976"},"y_scale":{"id":"47980"}},"id":"47973","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"47973"},0,0],[{"id":"48009"},0,1]]},"id":"48141","type":"GridBox"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48137"},"selection_policy":{"id":"48136"}},"id":"48096","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48096"},"glyph":{"id":"48097"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48099"},"nonselection_glyph":{"id":"48098"},"view":{"id":"48101"}},"id":"48100","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48085","type":"VBar"},{"attributes":{"source":{"id":"48096"}},"id":"48101","type":"CDSView"},{"attributes":{"below":[{"id":"48016"}],"center":[{"id":"48019"},{"id":"48023"},{"id":"48081"},{"id":"48088"},{"id":"48095"},{"id":"48102"}],"height":331,"left":[{"id":"48020"}],"output_backend":"webgl","renderers":[{"id":"48079"},{"id":"48086"},{"id":"48093"},{"id":"48100"}],"title":{"id":"48105"},"toolbar":{"id":"48034"},"toolbar_location":null,"width":496,"x_range":{"id":"47974"},"x_scale":{"id":"48012"},"y_range":{"id":"47976"},"y_scale":{"id":"48014"}},"id":"48009","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48099","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48133"},"selection_policy":{"id":"48132"}},"id":"48082","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47999","type":"PolyAnnotation"},{"attributes":{},"id":"47974","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"48000"},{"id":"48034"}],"tools":[{"id":"47990"},{"id":"47991"},{"id":"47992"},{"id":"47993"},{"id":"47994"},{"id":"47995"},{"id":"47996"},{"id":"47997"},{"id":"48024"},{"id":"48025"},{"id":"48026"},{"id":"48027"},{"id":"48028"},{"id":"48029"},{"id":"48030"},{"id":"48031"}]},"id":"48142","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"47998"}},"id":"47992","type":"BoxZoomTool"},{"attributes":{},"id":"47983","type":"BasicTicker"},{"attributes":{},"id":"47991","type":"PanTool"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48108"},"group":null,"major_label_policy":{"id":"48109"},"ticker":{"id":"48071"}},"id":"47986","type":"LinearAxis"},{"attributes":{"axis":{"id":"47986"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47989","type":"Grid"},{"attributes":{},"id":"47990","type":"ResetTool"},{"attributes":{},"id":"47993","type":"WheelZoomTool"},{"attributes":{},"id":"48137","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48083","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"48071","type":"FixedTicker"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48111"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48112"},"ticker":{"id":"47983"}},"id":"47982","type":"LinearAxis"},{"attributes":{},"id":"48014","type":"LinearScale"},{"attributes":{"tools":[{"id":"47990"},{"id":"47991"},{"id":"47992"},{"id":"47993"},{"id":"47994"},{"id":"47995"},{"id":"47996"},{"id":"47997"}]},"id":"48000","type":"Toolbar"},{"attributes":{},"id":"48108","type":"BasicTickFormatter"},{"attributes":{},"id":"48109","type":"AllLabels"},{"attributes":{},"id":"48017","type":"BasicTicker"},{"attributes":{},"id":"48111","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"48016"},"coordinates":null,"group":null,"ticker":null},"id":"48019","type":"Grid"},{"attributes":{"callback":null},"id":"48031","type":"HoverTool"},{"attributes":{},"id":"48112","type":"AllLabels"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48125"},"group":null,"major_label_policy":{"id":"48126"},"ticker":{"id":"48103"}},"id":"48020","type":"LinearAxis"},{"attributes":{"children":[{"id":"48143"},{"id":"48141"}]},"id":"48144","type":"Column"},{"attributes":{},"id":"48119","type":"UnionRenderers"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48033","type":"PolyAnnotation"},{"attributes":{},"id":"48120","type":"Selection"},{"attributes":{"axis":{"id":"48020"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48023","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48105","type":"Title"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48044","type":"VBar"},{"attributes":{"overlay":{"id":"48032"}},"id":"48026","type":"BoxZoomTool"},{"attributes":{},"id":"48134","type":"UnionRenderers"},{"attributes":{},"id":"48025","type":"PanTool"},{"attributes":{},"id":"48024","type":"ResetTool"},{"attributes":{},"id":"48135","type":"Selection"},{"attributes":{},"id":"48030","type":"SaveTool"},{"attributes":{},"id":"48027","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"48033"}},"id":"48028","type":"LassoSelectTool"},{"attributes":{},"id":"48029","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48043"},"glyph":{"id":"48044"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48046"},"nonselection_glyph":{"id":"48045"},"view":{"id":"48048"}},"id":"48047","type":"GlyphRenderer"},{"attributes":{},"id":"48125","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48032","type":"BoxAnnotation"},{"attributes":{},"id":"48126","type":"AllLabels"},{"attributes":{},"id":"48113","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"48075"},"glyph":{"id":"48076"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48078"},"nonselection_glyph":{"id":"48077"},"view":{"id":"48080"}},"id":"48079","type":"GlyphRenderer"},{"attributes":{},"id":"48128","type":"BasicTickFormatter"},{"attributes":{},"id":"48114","type":"Selection"},{"attributes":{"source":{"id":"48075"}},"id":"48080","type":"CDSView"},{"attributes":{},"id":"48129","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48081","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48088","type":"Span"},{"attributes":{},"id":"48115","type":"UnionRenderers"},{"attributes":{},"id":"48116","type":"Selection"},{"attributes":{},"id":"48130","type":"UnionRenderers"},{"attributes":{},"id":"48131","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48059","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48045","type":"VBar"},{"attributes":{"source":{"id":"48043"}},"id":"48048","type":"CDSView"},{"attributes":{"tools":[{"id":"48024"},{"id":"48025"},{"id":"48026"},{"id":"48027"},{"id":"48028"},{"id":"48029"},{"id":"48030"},{"id":"48031"}]},"id":"48034","type":"Toolbar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48060","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48114"},"selection_policy":{"id":"48113"}},"id":"48043","type":"ColumnDataSource"},{"attributes":{},"id":"48117","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48056","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48046","type":"VBar"},{"attributes":{},"id":"48118","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48052","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48116"},"selection_policy":{"id":"48115"}},"id":"48050","type":"ColumnDataSource"},{"attributes":{},"id":"48132","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48051","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48058","type":"VBar"},{"attributes":{},"id":"48133","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48118"},"selection_policy":{"id":"48117"}},"id":"48057","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48063","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48050"},"glyph":{"id":"48051"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48053"},"nonselection_glyph":{"id":"48052"},"view":{"id":"48055"}},"id":"48054","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48050"}},"id":"48055","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48053","type":"VBar"}],"root_ids":["48144"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"890e53d1-90cc-4952-9155-76621d9221bc","root_ids":["48144"],"roots":{"48144":"59ce2aaa-9fa6-4507-a0ef-c1d65e601227"}}];
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