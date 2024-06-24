function isWorkingDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6); // Domingo = 0, Sábado = 6
    const holidays = [
        '2024-01-01', // Año Nuevo
        '2024-02-12', // Carnaval
        '2024-02-13', // Carnaval
        '2024-03-24', // Día de la Memoria
        '2024-03-29', // Viernes Santo
        '2024-04-02', // Día del Veterano y de los Caídos en la Guerra de Malvinas
        '2024-05-01', // Día del Trabajador
        '2024-05-25', // Día de la Revolución de Mayo
        '2024-06-20', // Día de la Bandera
        '2024-07-09', // Día de la Independencia
        '2024-08-19', // Paso a la Inmortalidad del Gral. San Martín (trasladado)
        '2024-10-14', // Día del Respeto a la Diversidad Cultural (trasladado)
        '2024-11-18', // Día de la Soberanía Nacional (trasladado)
        '2024-12-08', // Inmaculada Concepción de María
        '2024-12-25'  // Navidad
    ];

    const todayFormatted = today.toISOString().split('T')[0];
    const isHoliday = holidays.includes(todayFormatted);

    const resultDiv = document.getElementById('result');

    if (isWeekend || isHoliday) {
        resultDiv.textContent = 'No, descansá bb.';
    } else {
        resultDiv.textContent = 'Sí, agarrá la pala.';
    }
}

isWorkingDay();
