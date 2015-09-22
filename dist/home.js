System.register(['aurelia-framework', 'AuthService'], function (_export) {
  'use strict';

  var inject, AuthService, HomeViewModel, ToJSONValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_AuthService) {
      AuthService = _AuthService['default'];
    }],
    execute: function () {
      HomeViewModel = (function () {
        function HomeViewModel(AuthService) {
          _classCallCheck(this, _HomeViewModel);

          this.auth = window.auth = AuthService;
        }

        var _HomeViewModel = HomeViewModel;
        HomeViewModel = inject(AuthService)(HomeViewModel) || HomeViewModel;
        return HomeViewModel;
      })();

      _export('HomeViewModel', HomeViewModel);

      ToJSONValueConverter = (function () {
        function ToJSONValueConverter() {
          _classCallCheck(this, ToJSONValueConverter);
        }

        _createClass(ToJSONValueConverter, [{
          key: 'toView',
          value: function toView(obj) {
            if (obj) {
              return JSON.stringify(obj, null, 2);
            }
          }
        }]);

        return ToJSONValueConverter;
      })();

      _export('ToJSONValueConverter', ToJSONValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJCQUlhLGFBQWEsRUFPYixvQkFBb0I7Ozs7Ozs7O2lDQVh4QixNQUFNOzs7OztBQUlGLG1CQUFhO0FBRWIsaUJBRkEsYUFBYSxDQUVaLFdBQVcsRUFBRTs7O0FBQ3ZCLGNBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7U0FDdkM7OzZCQUpVLGFBQWE7QUFBYixxQkFBYSxHQUR6QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQ1AsYUFBYSxLQUFiLGFBQWE7ZUFBYixhQUFhOzs7OztBQU9iLDBCQUFvQjtpQkFBcEIsb0JBQW9CO2dDQUFwQixvQkFBb0I7OztxQkFBcEIsb0JBQW9COztpQkFDekIsZ0JBQUMsR0FBRyxFQUFFO0FBQ1YsZ0JBQUksR0FBRyxFQUFFO0FBQ1AscUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3BDO1dBQ0Y7OztlQUxVLG9CQUFvQiIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnQXV0aFNlcnZpY2UnO1xyXG5cclxuQGluamVjdChBdXRoU2VydmljZSlcclxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwge1xyXG5cclxuICBjb25zdHJ1Y3RvcihBdXRoU2VydmljZSkge1xyXG4gICAgdGhpcy5hdXRoID0gd2luZG93LmF1dGggPSBBdXRoU2VydmljZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb0pTT05WYWx1ZUNvbnZlcnRlciB7XHJcbiAgdG9WaWV3KG9iaikge1xyXG4gICAgaWYgKG9iaikge1xyXG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCAyKVxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==