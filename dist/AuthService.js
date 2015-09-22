System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
	'use strict';

	var Aurelia, inject, HttpClient, config, AuthService;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			Aurelia = _aureliaFramework.Aurelia;
			inject = _aureliaFramework.inject;
		}, function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}],
		execute: function () {
			config = {
				baseUrl: 'http://www.mocky.io/v2/',
				loginUrl: '560122ef9635789e120aa366',
				tokenName: 'ah12h3'
			};

			AuthService = (function () {
				function AuthService(Aurelia, HttpClient) {
					_classCallCheck(this, _AuthService);

					this.session = null;

					HttpClient.configure(function (http) {
						http.withBaseUrl(config.baseUrl);
					});

					this.http = HttpClient;
					this.app = Aurelia;

					this.session = JSON.parse(localStorage[config.tokenName] || null);
				}

				_createClass(AuthService, [{
					key: 'login',
					value: function login(username, password) {
						var _this = this;

						this.http.post(config.loginUrl, { username: username, password: password }).then(function (response) {
							return response.content;
						}).then(function (session) {
							localStorage[config.tokenName] = JSON.stringify(session);

							_this.session = session;

							_this.app.setRoot('app');
						});
					}
				}, {
					key: 'logout',
					value: function logout() {
						localStorage[config.tokenName] = null;

						this.session = null;

						this.app.setRoot('login');
					}
				}, {
					key: 'isAuthenticated',
					value: function isAuthenticated() {
						return this.session !== null;
					}
				}, {
					key: 'can',
					value: function can(permission) {
						return true;
					}
				}]);

				var _AuthService = AuthService;
				AuthService = inject(Aurelia, HttpClient)(AuthService) || AuthService;
				return AuthService;
			})();

			_export('default', AuthService);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF1dGhTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQ0FHTSxNQUFNLEVBT1MsV0FBVzs7Ozs7Ozs7K0JBVnZCLE9BQU87OEJBQUUsTUFBTTs7bUNBQ2YsVUFBVTs7O0FBRWIsU0FBTSxHQUFHO0FBQ2QsV0FBTyxFQUFFLHlCQUF5QjtBQUNsQyxZQUFRLEVBQUUsMEJBQTBCO0FBQ3BDLGFBQVMsRUFBRSxRQUFRO0lBQ25COztBQUdvQixjQUFXO0FBSXBCLGFBSlMsV0FBVyxDQUluQixPQUFPLEVBQUUsVUFBVSxFQUFFOzs7VUFGakMsT0FBTyxHQUFHLElBQUk7O0FBR2IsZUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN2QixVQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztNQUNuQyxDQUFDLENBQUM7O0FBRU4sU0FBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDdkIsU0FBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7O0FBRW5CLFNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0tBQ2xFOztpQkFibUIsV0FBVzs7WUFlMUIsZUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFOzs7QUFDbkIsVUFBSSxDQUFDLElBQUksQ0FDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBUixRQUFRLEVBQUUsUUFBUSxFQUFSLFFBQVEsRUFBRSxDQUFDLENBQzdDLElBQUksQ0FBQyxVQUFDLFFBQVE7Y0FBSyxRQUFRLENBQUMsT0FBTztPQUFBLENBQUMsQ0FDcEMsSUFBSSxDQUFDLFVBQUMsT0FBTyxFQUFLO0FBR3JCLG1CQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBR3pELGFBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFHdkIsYUFBSyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3hCLENBQUMsQ0FBQTtNQUNOOzs7WUFFSyxrQkFBRztBQUdSLGtCQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7QUFHdEMsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O0FBR3BCLFVBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO01BQ3pCOzs7WUFFYywyQkFBRztBQUNqQixhQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO01BQzdCOzs7WUFFRSxhQUFDLFVBQVUsRUFBRTtBQUNmLGFBQU8sSUFBSSxDQUFDO01BQ1o7Ozt1QkFsRG1CLFdBQVc7QUFBWCxlQUFXLEdBRC9CLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQ1AsV0FBVyxLQUFYLFdBQVc7V0FBWCxXQUFXOzs7c0JBQVgsV0FBVyIsImZpbGUiOiJBdXRoU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1cmVsaWEsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdGJhc2VVcmw6ICdodHRwOi8vd3d3Lm1vY2t5LmlvL3YyLycsXHJcblx0bG9naW5Vcmw6ICc1NjAxMjJlZjk2MzU3ODllMTIwYWEzNjYnLFxyXG5cdHRva2VuTmFtZTogJ2FoMTJoMydcclxufTtcclxuXHJcbkBpbmplY3QoQXVyZWxpYSwgSHR0cENsaWVudClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuXHRzZXNzaW9uID0gbnVsbFxyXG5cclxuXHRjb25zdHJ1Y3RvcihBdXJlbGlhLCBIdHRwQ2xpZW50KSB7XHJcblx0XHRIdHRwQ2xpZW50LmNvbmZpZ3VyZShodHRwID0+IHtcclxuXHQgICAgICBcdGh0dHAud2l0aEJhc2VVcmwoY29uZmlnLmJhc2VVcmwpO1xyXG4gICAgXHR9KTtcclxuXHJcblx0XHR0aGlzLmh0dHAgPSBIdHRwQ2xpZW50O1xyXG5cdFx0dGhpcy5hcHAgPSBBdXJlbGlhO1xyXG5cclxuXHRcdHRoaXMuc2Vzc2lvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2NvbmZpZy50b2tlbk5hbWVdIHx8IG51bGwpO1xyXG5cdH1cclxuXHJcblx0bG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgXHQucG9zdChjb25maWcubG9naW5VcmwsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXHJcbiAgICAgICAgXHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmNvbnRlbnQpXHJcbiAgICAgICAgXHQudGhlbigoc2Vzc2lvbikgPT4ge1xyXG5cclxuXHQgICAgXHRcdC8vIHNhdmUgdG8gdG9rZW5cclxuXHQgICAgXHRcdGxvY2FsU3RvcmFnZVtjb25maWcudG9rZW5OYW1lXSA9IEpTT04uc3RyaW5naWZ5KHNlc3Npb24pO1xyXG5cclxuXHQgICAgXHRcdC8vIHNhdmUgdG8gc2Vzc2lvbiBcclxuXHQgICAgXHRcdHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XHJcblxyXG5cdCAgICBcdFx0Ly8gc2V0IHJvb3RcclxuXHQgICAgXHRcdHRoaXMuYXBwLnNldFJvb3QoJ2FwcCcpO1xyXG5cdCAgICBcdH0pXHJcblx0fVxyXG5cclxuXHRsb2dvdXQoKSB7XHJcblxyXG5cdFx0Ly8gY2xlYXIgZnJvbSB0b2tlblxyXG5cdFx0bG9jYWxTdG9yYWdlW2NvbmZpZy50b2tlbk5hbWVdID0gbnVsbDtcclxuXHJcblx0XHQvLyBjbGVhciBmcm9tIHNlc3Npb25cclxuXHRcdHRoaXMuc2Vzc2lvbiA9IG51bGw7XHJcblxyXG5cdFx0Ly8gc2V0IHJvb3RcclxuXHRcdHRoaXMuYXBwLnNldFJvb3QoJ2xvZ2luJylcclxuXHR9XHJcblx0XHJcblx0aXNBdXRoZW50aWNhdGVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2Vzc2lvbiAhPT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGNhbihwZXJtaXNzaW9uKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTsgLy8gd2h5IG5vdD9cclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=