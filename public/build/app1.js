(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app1"],{

/***/ "./assets/js/chart.js":
/*!****************************!*\
  !*** ./assets/js/chart.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ctx = document.getElementById('myChart').getContext('2d');
var dataCurrency = document.getElementById('myChart').dataset.currency;
var data = JSON.parse(dataCurrency);
var labels = [];
var values = [];
var colors = [];

function randomColors() {
  var r = function r() {
    return Math.random() * 256 >> 0;
  };

  return "rgba(".concat(r(), ", ").concat(r(), ", ").concat(r(), ",0.5)");
}

data.forEach(function (item) {
  labels.push(item.code);
  values.push(item.mid);
  colors.push(randomColors());
});
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Chart Currency',
      data: values,
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    responsive: true,
    maintainAspectRatio: true
  }
});

/***/ })

},[["./assets/js/chart.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhcnQuanMiXSwibmFtZXMiOlsiY3R4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJkYXRhQ3VycmVuY3kiLCJkYXRhc2V0IiwiY3VycmVuY3kiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibGFiZWxzIiwidmFsdWVzIiwiY29sb3JzIiwicmFuZG9tQ29sb3JzIiwiciIsIk1hdGgiLCJyYW5kb20iLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJjb2RlIiwibWlkIiwibXlDaGFydCIsIkNoYXJ0IiwidHlwZSIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwib3B0aW9ucyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJiZWdpbkF0WmVybyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFJQSxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsVUFBbkMsQ0FBOEMsSUFBOUMsQ0FBVjtBQUNBLElBQUlDLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DRyxPQUFuQyxDQUEyQ0MsUUFBOUQ7QUFDQSxJQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxZQUFYLENBQVg7QUFDQSxJQUFJTSxNQUFNLEdBQUcsRUFBYjtBQUNBLElBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBRUEsU0FBU0MsWUFBVCxHQUF1QjtBQUNuQixNQUFJQyxDQUFDLEdBQUcsU0FBSkEsQ0FBSTtBQUFBLFdBQU1DLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixJQUF1QixDQUE3QjtBQUFBLEdBQVI7O0FBQ0Esd0JBQWVGLENBQUMsRUFBaEIsZUFBdUJBLENBQUMsRUFBeEIsZUFBK0JBLENBQUMsRUFBaEM7QUFDSDs7QUFFRFAsSUFBSSxDQUFDVSxPQUFMLENBQWEsVUFBVUMsSUFBVixFQUFnQjtBQUN6QlIsUUFBTSxDQUFDUyxJQUFQLENBQVlELElBQUksQ0FBQ0UsSUFBakI7QUFDQVQsUUFBTSxDQUFDUSxJQUFQLENBQVlELElBQUksQ0FBQ0csR0FBakI7QUFDQVQsUUFBTSxDQUFDTyxJQUFQLENBQVlOLFlBQVksRUFBeEI7QUFDSCxDQUpEO0FBUUEsSUFBSVMsT0FBTyxHQUFHLElBQUlDLEtBQUosQ0FBVXZCLEdBQVYsRUFBZTtBQUN6QndCLE1BQUksRUFBRSxLQURtQjtBQUV6QmpCLE1BQUksRUFBRTtBQUNGRyxVQUFNLEVBQUVBLE1BRE47QUFFRmUsWUFBUSxFQUFFLENBQUM7QUFDUEMsV0FBSyxFQUFFLGdCQURBO0FBRVBuQixVQUFJLEVBQUVJLE1BRkM7QUFHUGdCLHFCQUFlLEVBQUNmLE1BSFQ7QUFJUGdCLGlCQUFXLEVBQUVoQixNQUpOO0FBS1BpQixpQkFBVyxFQUFFO0FBTE4sS0FBRDtBQUZSLEdBRm1CO0FBWXpCQyxTQUFPLEVBQUU7QUFDTEMsVUFBTSxFQUFFO0FBQ0pDLFdBQUssRUFBRSxDQUFDO0FBQ0pDLGFBQUssRUFBRTtBQUNIQyxxQkFBVyxFQUFFO0FBRFY7QUFESCxPQUFEO0FBREgsS0FESDtBQVFMQyxjQUFVLEVBQUUsSUFSUDtBQVNMQyx1QkFBbUIsRUFBRTtBQVRoQjtBQVpnQixDQUFmLENBQWQsQyIsImZpbGUiOiJhcHAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcbnZhciBkYXRhQ3VycmVuY3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpLmRhdGFzZXQuY3VycmVuY3k7XG52YXIgZGF0YSA9IEpTT04ucGFyc2UoZGF0YUN1cnJlbmN5KTtcbnZhciBsYWJlbHMgPSBbXTtcbnZhciB2YWx1ZXMgPSBbXTtcbnZhciBjb2xvcnMgPSBbXTtcblxuZnVuY3Rpb24gcmFuZG9tQ29sb3JzKCl7XG4gICAgdmFyIHIgPSAoKSA9PiBNYXRoLnJhbmRvbSgpICogMjU2ID4+IDA7XG4gICAgcmV0dXJuIGByZ2JhKCR7cigpfSwgJHtyKCl9LCAke3IoKX0sMC41KWA7XG59XG5cbmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGxhYmVscy5wdXNoKGl0ZW0uY29kZSlcbiAgICB2YWx1ZXMucHVzaChpdGVtLm1pZClcbiAgICBjb2xvcnMucHVzaChyYW5kb21Db2xvcnMoKSlcbn0pXG5cblxuXG52YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICB0eXBlOiAnYmFyJyxcbiAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgIGxhYmVsOiAnQ2hhcnQgQ3VycmVuY3knLFxuICAgICAgICAgICAgZGF0YTogdmFsdWVzLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOmNvbG9ycyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMVxuICAgICAgICB9XVxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZVxuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==