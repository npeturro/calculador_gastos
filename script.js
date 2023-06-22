// Datos iniciales
var data = {
    labels: [],
    datasets: [{
      label: 'Ingresos y Gastos',
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1,
      data: [],
    }]
  };
  
  // Opciones de la gráfica
  var options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  
  // Crear la gráfica con los datos iniciales
  var ctx = document.getElementById('chart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
  
  // Función para agregar datos a la gráfica
  function addData(type) {
    var inputValue = parseFloat(document.getElementById(type).value);
    if (!isNaN(inputValue)) {
      var label = type.charAt(0).toUpperCase() + type.slice(1);
      chart.data.labels.push(label);
      chart.data.datasets[0].data.push(inputValue);
      chart.update();
    }
  }