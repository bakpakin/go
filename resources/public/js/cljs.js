goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../webgo/go.js", ['webgo.go'], ['cljs.core', 'clojure.set']);
goog.addDependency("../webgo/gui.js", ['webgo.gui'], ['cljs.core', 'webgo.go']);
goog.addDependency("../webgo/ai.js", ['webgo.ai'], ['cljs.core', 'webgo.go']);
goog.addDependency("../webgo/core.js", ['webgo.core'], ['cljs.core', 'webgo.ai', 'webgo.gui', 'webgo.go']);