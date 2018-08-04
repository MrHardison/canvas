let field = {

	// Инициализация
	init: function() {

		// создаем элемент
		canvas = document.createElement('canvas');

		// указываем размеры
		canvas.width = 1200;
		canvas.height = 800;

		// добавляем на страницу
		document.body.appendChild(canvas);

		сtx = canvas.getContext('2d');
		сtx.lineWidth = 1;
		сtx.strokeStyle = '#000';
		сtx.beginPath();

		coords = [];
		colors = ['#f00', '#ffee00', '#16ff26', '#0055ff', '#000', '#ff6e00'];

		// Функция отрисовки линий
		canvas.onclick = function() {
			let x = event.offsetX;
			let y = event.offsetY;
			field.drawDot(x, y);
			if (coords.length > 0) {
				if(coords.length == 1) {
					field.drawLine(coords[0].x, coords[0].y, x, y, colors[Math.floor(parseInt(Math.random() * colors.length))]);
				} else {
					field.drawLine(coords[coords.length - 2].x, coords[coords.length - 2].y, x, y, colors[Math.floor(parseInt(Math.random() * colors.length))]);
					// field.drawLine(coords[coords.length - 1].x, coords[coords.length - 1].y, x, y);
				}
			}
			field.write_coords(x, y);
			canvas.getContext('2d').stroke();
		};
	},

	
	// Нарисовать линию 
	drawLine: function(x1, y1, x2, y2, color) { 
		if(color != undefined) { 
			canvas.getContext('2d').strokeStyle = color; 
		} 
		if(coords.length < 2) return; 
	
		canvas.getContext('2d').moveTo(x1, y1); 
		canvas.getContext('2d').lineTo(x2, y2); 
		canvas.getContext('2d').stroke(); 
	},

	// Нарисовать точку
	drawDot: function(x1, y1) {
		сtx.arc(x1, y1, 2, 0, 2*Math.PI, false);
	},
	
	// Запись координат точек
	write_coords: function(x, y) {
		coords.push({x: x, y: y});
	},

}
field.init();






