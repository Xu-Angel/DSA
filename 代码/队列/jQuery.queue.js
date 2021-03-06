(function($) {

  window.$ = $;

})(function() {

  var rquickExpr = /^(?:#([\w-]*))$/;

  function aQuery(selector) {
      return new aQuery.fn.init(selector);
  }

  /**
   * 动画
   * @return {[type]} [description]
   */
  var animation = function() {
      var self = {};
      var Queue = []; //动画队列
      var fireing = false //动画锁
      var first = true; //通过add接口触发

      var getStyle = function(obj, attr) {
          return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
      }

      var makeAnim = function(element, options, func) {
          var width = options.width
              //包装了具体的执行算法
              //css3
              //setTimeout
          element.style.webkitTransitionDuration = '2000ms';
          element.style.webkitTransform = 'translate3d(' + width + 'px,0,0)';

          //监听动画完结
          element.addEventListener('webkitTransitionEnd', function() {
              func()
          });
      }

      var _fire = function() {
          //加入动画正在触发
          if (!fireing) {
              var onceRun = Queue.shift();
              if (onceRun) {
                  fireing = true;
                  //next
                  onceRun(function() {
                      fireing = false;
                      _fire();
                  });
              } else {
                  fireing = true;
              }
          }
      }

      return self = {
          //增加队列
          add: function(element, options) {
              Queue.push(function(func) {
                  makeAnim(element, options, func);
              });

              //如果有一个队列立刻触发动画
              if (first && Queue.length) {
                  first = false;
                  self.fire();
              }
          },
          //触发
          fire: function() {
              _fire();
          }
      }
  }();


  aQuery.fn = aQuery.prototype = {
      run: function(options) {
          animation.add(this.element, options);
          return this;
      }
  }

  var init = aQuery.fn.init = function(selector) {
      var match = rquickExpr.exec(selector);
      var element = document.getElementById(match[1])
      this.element = element;
      return this;
  }

  init.prototype = aQuery.fn;

  return aQuery;
}());
