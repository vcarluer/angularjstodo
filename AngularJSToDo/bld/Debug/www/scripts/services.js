﻿(function () {
	'use strict';

	angular.module("xPlat.services")
		.factory("guidGenerator", function () {
			var generatePart = function () {
				var guidPartNumber = (Math.random() * 0x10000) | 0;
				return (guidPartNumber + 0x10000).toString(16).substring(1).toUpperCase();
			};

			return function () {
				return generatePart()
					+ generatePart()
					+ "-"
					+ generatePart()
					+ "-"
					+ generatePart()
					+ "-"
					+ generatePart()
					+ "-"
					+ generatePart()
					+ generatePart()
					+ generatePart();
			};
		})
		.factory("gravatarGenerator", function () {
			var getGravatar = function (email, size) {
 
				// MD5 (Message-Digest Algorithm) by WebToolkit
				//  
				var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()}; 
				var size = size || 80; 
				return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size;
			}
		})
		.factory("localStorage", ['$q', "$window", "guidGenerator", function ($q, $window, guidGenerator) {
			var localStorageKey = "toDoItems";

			var loadFromStorage = function () {
				return angular.fromJson($window.localStorage.getItem(localStorageKey)) || [];
			};

			var saveToStorage = function (items) {
				$window.localStorage.setItem(localStorageKey, angular.toJson(items));
			}

			return {
				getAll: function (success) {
					success(loadFromStorage());
				},

				create: function (text, address) {
					var item = {
						id: guidGenerator(),
						text: text,
						address: address,
						done: false
					}
					var items = loadFromStorage();
					items.push(item);
					saveToStorage(items);
					return $q.when(item);
				},

				update: function (item) {
					var items = loadFromStorage();
					for (var i = 0; i < items.length; i++) {
						if (items[i].id === item.id) {
							items[i] = item;
							break;
						}
					}

					saveToStorage(items);
					return $q.when(item);
				},

				del: function (item) {
					var items = loadFromStorage();
					for (var i = 0; i < items.length; i++) {
						if (items[i].id === item.id) {
							items.splice(i, 1);
							break;
						}
					}

					saveToStorage(items);
					return $q.when(null);
				}
			}
		}])

		.factory("vcrtodoClient", ["$window", function ($window) {
			return new $window.WindowsAzure.MobileServiceClient(
							"https://vcrtodo.azure-mobile.net/",
							"lLbEyyaRthEKWSaHRrkjewZQWFHRtt95");
			/*return {
				vcrtodoClient: null,
				client: function () {
					cordova.ready.then(function () {
						if (!vcrtodoClient) {
							vcrtodoClient = new $window.WindowsAzure.MobileServiceClient(
							"https://vcrtodo.azure-mobile.net/",
							"lLbEyyaRthEKWSaHRrkjewZQWFHRtt95");
						}
						
						return vcrtodoClient;
					})
				}
			}*/
		}])

		// To support Azure, add Azure storage service
		// code here ("azureStorage").

		.factory("azureStorage", ["vcrtodoClient", "$q", "$resource", "$rootScope", "guidGenerator", function (vcrtodoClient, $q, $resource, $rootScope, guidGenerator) {			
			/*var azureMobileServicesInstallationId = guidGenerator();
			var azureMobileServicesKey = 'lLbEyyaRthEKWSaHRrkjewZQWFHRtt95'; // Add your Azure Mobile Service Application Key
			var azureMobileServicesAddress = 'https://vcrtodo.azure-mobile.net/'; // Add your Azure Mobile Service Application URL
			var azureMobileServicesTableAddress = azureMobileServicesAddress + 'tables/todoitem/:id';
			var headers = {
				'X-ZUMO-APPLICATION': azureMobileServicesKey,
				'X-ZUMO-INSTALLATION-ID': azureMobileServicesInstallationId,
				'X-ZUMO-VERSION': 'ZUMO/1.0 (lang=Web; os=--; os_version=--; arch=--; version=1.0.20218.0)',
				'Content-Type': 'application/json'
			};

			var toDoItem = $resource(azureMobileServicesTableAddress, { id: '@id' }, {
				'query': {
					method: 'GET',
					params: { $top: '1000' },
					isArray: true,
					headers: headers
				},
				'delete': {
					method: 'DELETE',
					headers: headers
				},
				'save': {
					method: 'POST',
					headers: headers
				},
				'update': {
					method: 'PATCH',
					headers: headers
				}
			});*/

			// http://azure.microsoft.com/en-us/documentation/articles/mobile-services-html-how-to-use-client-library/
			var table = vcrtodoClient.getTable("todoitem");

			var azureStorage = {
				getAll: function () {
					// return toDoItem.query();
					return table.read();
				},

				create: function (text, address) {
					var item = {
						text: text,
						address: JSON.stringify(address),
						done: false
					};

					// return item.$save();
					return table.insert(item);        			
				},

				update: function (item) {
					return table.update(item);
				},

				del: function (item) {
					return table.del(item);
				}
			};

			Object.defineProperty(azureStorage, "isAvailable", {
				enumerable: false,
				get: function () { return vcrtodoClient !== null; }
			});

			return azureStorage;
		}])

		.factory("storage", ["$injector", function ($injector) {
			var azureService = $injector.get('azureStorage');
			return azureService.isAvailable ? azureService : $injector.get('localStorage');
			// return $injector.get('localStorage');
		}])

		// To support Bing maps, replace mapSimulator 
		// with map code.
		.factory('mapsSimulator', ["$rootScope", "$q", "$timeout", function (rootScope, $q, $timeout) {

			return {
				getUnknownAddress: function () {
					var deferred = $q.defer();

					$timeout(function () {
						deferred.resolve([43.465187, -80.522372]);
					}, 1500);

					return deferred.promise;
				}
			}
		}])

		.factory("maps", ["$rootScope", "$q", "$window", "$resource", "cordova", function ($rootScope, $q, $window, $resource, cordova) {
			var key = 'AhoikK9tHcamAPN5U3mkroEQnSxcOs_POvgLOgdQABS3eTOIkmOQwMKOXEc5gM7K';
			var url = 'http://dev.virtualearth.net/REST/v1/Locations/:latitude,:longitude?key=' + key;

			return {
				getCurrentPosition: function () {
					return cordova.ready.then(function () {
						var deferred = $q.defer();
						$window.navigator.geolocation.getCurrentPosition(function (successValue) {
							$rootScope.$apply(function () {
								deferred.resolve(successValue);
							});
						}, function (errorValue) {
							$rootScope.$apply(function () {
								deferred.reject(errorValue);
							});
						});

						return deferred.promise;
					});
				},

				getAddressFromPosition: function (position) {
					return $resource(url, {})
						.get({ latitude: position.coords.latitude, longitude: position.coords.longitude })
						.$promise.then(function (response) {
							return response.resourceSets[0].resources[0].address.formattedAddress;
						}, function (error) {
							return position.coords.latitude + "," + position.coords.longitude
						});
				}
			}
		}])

		.factory("cordova", ['$q', "$window", "$timeout", function ($q, $window, $timeout) {
			var deferred = $q.defer();
			var resolved = false;

			document.addEventListener('deviceready', function () {
				resolved = true;
				deferred.resolve($window.cordova);
			}, false);

			$timeout(function () {
				if (!resolved && $window.cordova) {
					deferred.resolve($window.cordova);
				}
			});

			return { ready: deferred.promise };
		}]);

	// Identity: http://azure.microsoft.com/en-us/documentation/articles/mobile-services-html-get-started-users/
})();