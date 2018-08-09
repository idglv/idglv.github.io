[
	'{{repeat(20)}}', {
		"position_num": "{{integer(10000000, 20000000)}}",
		"position_id": "{{integer(5000000, 6000000)}}",
		"position_text": '{{random("Руководство и планирование", "Профессиональное управление персоналом")}}',
		"position_status": "Занято",
		"department_id": "{{integer(50000000, 60000000)}}",
		"department_text": '{{random("Подразделение отделов кадров","Результативность и развитие")}}',
		"cost_center_id": "{{integer(1000, 2000)}}-{{integer(2000, 2400)}}",
		"cost_center_text": '{{random("Управление персоналом", "Правление", "Производство", "Информационные технологии", "Финансы")}}',
		"location_id": "{{integer(1000, 2000)}}-{{integer(2000, 2400)}}",
		"location_text": "{{city()}}",
		"incumbent_id": "{{integer(10000, 20000)}}",
		"incumbent_text": "{{firstName()}} {{surname()}}",
		"status": ""
	}
]

[
	'{{repeat(10)}}', {
		"cost_center_id": "{{integer(1000, 2000)}}-{{integer(2000, 2400)}}",
		"cost_center_text": '{{random("Управление персоналом", "Правление", "Производство", "Информационные технологии", "Финансы")}}',
		"location_text": "Все",
		"job_code": "Все",
		"q1": "{{integer(100,500)}}",
		"q2": "{{integer(100,500)}}",
		"q3": "{{integer(100,500)}}",
		"q4": "{{integer(100,500)}}",
		"total": "{{integer(100,500)}}",
		next: [
			'{{repeat(5)}}', {
				"cost_center_id": "{{integer(1000, 2000)}}-{{integer(2000, 2400)}}",
				"cost_center_text": '{{random("Управление персоналом", "Правление", "Производство", "Информационные технологии", "Финансы")}}',
				"location_text": "Все",
				"job_code": "Все",
				"q1": "{{integer(50,200)}}",
				"q2": "{{integer(50,200)}}",
				"q3": "{{integer(50,200)}}",
				"q4": "{{integer(50,200)}}",
				"total": "{{integer(50,200)}}",
				next: [
					'{{repeat(3)}}', {
						"cost_center_id": "{{integer(1000, 2000)}}-{{integer(2000, 2400)}}",
						"cost_center_text": '{{random("Управление персоналом", "Правление", "Производство", "Информационные технологии", "Финансы")}}',
						"location_text": "Все",
						"job_code": "Все",
						"q1": "{{integer(10,50)}}",
						"q2": "{{integer(10,50)}}",
						"q3": "{{integer(10,50)}}",
						"q4": "{{integer(10,50)}}",
						"total": "{{integer(10,50)}}"
					}
				]
			}
		]
	}
]