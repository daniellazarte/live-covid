!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=class{static get(){return fetch("https://api.covid19api.com/summary").then(t=>t.json()).then(t=>t.Countries)}};let o='\n<table class="table is-fullwidth">\n    <thead>\n        <tr>\n            <th style="width:20px;"></th>\n            <th>Country</th>\n            <th style="width:150px;">Total Confirmed</th>\n            <th class="has-text-right" style="width:150px;">Total Deaths</th>\n            <th class="has-text-right" style="width:150px;">Total Recovered</th>\n        </tr>\n    </thead>\n    <tbody>\n        {{rows}}\n    </tbody>\n</table>\n';function a(t){return new Intl.NumberFormat("es-PE").format(t)}var s=function(t){let e=[];return t.sort((t,e)=>e.TotalConfirmed-t.TotalConfirmed).forEach(t=>{e.push(`\n            <tr>\n                <td>\n                    <span class="flag-icon flag-icon-${t.CountryCode.toLowerCase()}"></span>\n                </td>\n                <td>${t.Country}</td>\n                <td class="has-text-right">${a(t.TotalConfirmed)}</td>\n                <td class="has-text-right">${a(t.TotalDeaths)}</td>\n                <td class="has-text-right">${a(t.TotalRecovered)}</td>\n            </tr>\n        `)}),o.replace("{{rows}}",e.join(" "))};class l extends HTMLElement{constructor(){super(),this.render()}render(){r.get().then(t=>{this.innerHTML=s(t)})}}customElements.define("live-covid",l)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9saXZlLWNvdmlkLmNvbXBvbmVudC5wcm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2xpdmUtY292aWQuY29tcG9uZW50LnRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbGl2ZS1jb3ZpZC5jb21wb25lbnQuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwiQ291bnRyaWVzIiwidGFibGUiLCJudW1iZXJGb3JtYXQiLCJudW1iZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiaXRlbXMiLCJyb3dzIiwic29ydCIsImEiLCJiIiwiVG90YWxDb25maXJtZWQiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJDb3VudHJ5Q29kZSIsInRvTG93ZXJDYXNlIiwiQ291bnRyeSIsIlRvdGFsRGVhdGhzIiwiVG90YWxSZWNvdmVyZWQiLCJyZXBsYWNlIiwiam9pbiIsIkhUTUxFbGVtZW50Iiwic3VwZXIiLCJ0aGlzIiwicmVuZGVyIiwiaW5uZXJIVE1MIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwibWFwcGluZ3Mi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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNsYXNzIExpdmVDb3ZpZFByb3h5IHtcbiAgICBzdGF0aWMgZ2V0KCl7XG4gICAgICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9hcGkuY292aWQxOWFwaS5jb20vc3VtbWFyeScpXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKHIgPT4gci5Db3VudHJpZXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGl2ZUNvdmlkUHJveHk7IiwibGV0IHRhYmxlID0gYFxuPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoXCI+XG4gICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggc3R5bGU9XCJ3aWR0aDoyMHB4O1wiPjwvdGg+XG4gICAgICAgICAgICA8dGg+Q291bnRyeTwvdGg+XG4gICAgICAgICAgICA8dGggc3R5bGU9XCJ3aWR0aDoxNTBweDtcIj5Ub3RhbCBDb25maXJtZWQ8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwiaGFzLXRleHQtcmlnaHRcIiBzdHlsZT1cIndpZHRoOjE1MHB4O1wiPlRvdGFsIERlYXRoczwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJoYXMtdGV4dC1yaWdodFwiIHN0eWxlPVwid2lkdGg6MTUwcHg7XCI+VG90YWwgUmVjb3ZlcmVkPC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgICAge3tyb3dzfX1cbiAgICA8L3Rib2R5PlxuPC90YWJsZT5cbmA7XG5cbmZ1bmN0aW9uIHJlbmRlcihpdGVtcykge1xuICAgIGxldCByb3dzID0gW107XG5cbiAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBiLlRvdGFsQ29uZmlybWVkIC0gYS5Ub3RhbENvbmZpcm1lZClcbiAgICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICByb3dzLnB1c2goYFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGFnLWljb24gZmxhZy1pY29uLSR7aXRlbS5Db3VudHJ5Q29kZS50b0xvd2VyQ2FzZSgpfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke2l0ZW0uQ291bnRyeX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImhhcy10ZXh0LXJpZ2h0XCI+JHtudW1iZXJGb3JtYXQoaXRlbS5Ub3RhbENvbmZpcm1lZCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJoYXMtdGV4dC1yaWdodFwiPiR7bnVtYmVyRm9ybWF0KGl0ZW0uVG90YWxEZWF0aHMpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiaGFzLXRleHQtcmlnaHRcIj4ke251bWJlckZvcm1hdChpdGVtLlRvdGFsUmVjb3ZlcmVkKX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgYCk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhYmxlLnJlcGxhY2UoJ3t7cm93c319Jywgcm93cy5qb2luKCcgJykpO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGb3JtYXQobnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVzLVBFXCIpLmZvcm1hdChudW1iZXIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCJpbXBvcnQgTGl2ZUNvdmlkUHJveHkgZnJvbSAnLi9saXZlLWNvdmlkLmNvbXBvbmVudC5wcm94eSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9saXZlLWNvdmlkLmNvbXBvbmVudC50ZW1wbGF0ZSc7XG5cbmNsYXNzIExpdmVDb3ZpZENvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgTGl2ZUNvdmlkUHJveHkuZ2V0KCkudGhlbihpdGVtcyA9PntcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdGVtcGxhdGUoaXRlbXMpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGl2ZS1jb3ZpZCcsTGl2ZUNvdmlkQ29tcG9uZW50KTsiXSwic291cmNlUm9vdCI6IiJ9