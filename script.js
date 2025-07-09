document.addEventListener('DOMContentLoaded', () => {
    // --- ESTRUCTURA DE DATOS DE PREGUNTAS ---
    const trlData = [
        {
            level: 1,
            title: "Principios básicos observados e informados",
            requiredYes: 4,
            questions: [
                "¿Se han identificado los principios científicos o fundamentos teóricos en que se basa la tecnología?",
                "¿Se ha definido claramente el problema tecnológico o la necesidad que aborda la innovación?",
                "¿Se ha documentado la hipótesis principal y se han planteado métodos preliminares para comprobarla?",
                "¿Se han realizado observaciones iniciales o experimentos básicos que validen las hipótesis fundamentales?",
                "¿La investigación básica existente respalda la factibilidad teórica del concepto propuesto?",
                "¿Se ha realizado una revisión bibliográfica del estado del arte?",
                "¿Existe evidencia en la literatura científica sobre las propiedades o fenómenos básicos asociados?"
            ]
        },
        {
            level: 2,
            title: "Formulación del concepto tecnológico y/o uso",
            requiredYes: 4,
            questions: [
                "¿Se ha elaborado un diseño conceptual o prototipo básico que represente la idea tecnológica?",
                "¿Se han realizado análisis teóricos o simulaciones que confirmen la factibilidad básica del concepto?",
                "¿Se han identificado y descrito los componentes principales o funciones clave del sistema?",
                "¿Se han evaluado los posibles casos de uso o aplicaciones prácticas de la tecnología propuesta?",
                "¿Se han revisado literatura técnica o bases de datos de patentes para confirmar la novedad de la idea?",
                "¿Se dispone de un plan preliminar de desarrollo (actividades, recursos, cronograma) para la ejecución futura del proyecto?"
            ]
        },
        {
            level: 3,
            title: "Prueba experimental de concepto",
            requiredYes: 4,
            questions: [
                "¿Se ha construido y probado un prototipo experimental inicial que demuestre la función crítica del sistema?",
                "¿Los resultados de las pruebas experimentales iniciales confirman la viabilidad del concepto tecnológico?",
                "¿Se ha validado la característica o función crítica que demuestra el principio básico de la tecnología?",
                "¿Se han obtenido datos cuantitativos (por ejemplo, rendimiento o eficiencia) durante las pruebas iniciales?",
                "¿Se han documentado los procedimientos y resultados de la experimentación para su análisis detallado?",
                "¿Se han identificado limitaciones importantes o variables críticas en la prueba de concepto que requieran refinamiento?"
            ]
        },
        {
            level: 4,
            title: "Validación de la tecnología en laboratorio",
            requiredYes: 4,
            questions: [
                "¿Se han integrado los componentes tecnológicos básicos en un prototipo de laboratorio para verificar su funcionamiento conjunto?",
                "¿Se han realizado pruebas funcionales en condiciones controladas de laboratorio para validar el diseño del sistema?",
                "¿Los resultados de los ensayos de laboratorio coinciden con el rendimiento previsto y las especificaciones del diseño?",
                "¿Se han detectado problemas de integración entre componentes durante las pruebas de laboratorio?",
                "¿La funcionalidad del sistema en el laboratorio coincide con los objetivos definidos en la fase anterior?",
                "¿Se cuenta con documentación de las pruebas en laboratorio (datos, informes) que respalde la validación de componentes?"
            ]
        },
        {
            level: 5,
            title: "Validación en entorno relevante",
            requiredYes: 4,
            questions: [
                "¿Se han sometido los componentes o prototipos a pruebas en un entorno simulado o real que replique las condiciones operativas esperadas?",
                "¿La tecnología ha sido evaluada en escenarios industriales o con simuladores avanzados que reflejen el entorno final?",
                "¿Se han probado las condiciones reales (temperatura, presión, uso, etc.) y la tecnología se comportó conforme a lo esperado?",
                "¿Los resultados obtenidos en el entorno relevante concuerdan con las metas de rendimiento establecidas?",
                "¿Se han detectado diferencias significativas entre los resultados de laboratorio y los obtenidos en el entorno relevante?",
                "¿Se dispone de documentación detallada (informes de prueba, análisis) que respalde la validación en el entorno relevante?"
            ]
        },
        {
            level: 6,
            title: "Demostración en entorno relevante",
            requiredYes: 4,
            questions: [
                "¿Se ha construido un prototipo de ingeniería (escala piloto) e integrado para probarse en un entorno relevante?",
                "¿La demostración del prototipo integra todos los componentes clave en condiciones parecidas a las reales de operación?",
                "¿Se ha evaluado el rendimiento del prototipo (estabilidad, fiabilidad, etc.) durante las pruebas en entorno relevante?",
                "¿Los resultados demuestran que el prototipo cumple con los requisitos de diseño en un entorno similar al final?",
                "¿Se han documentado los cambios o mejoras aplicados al prototipo tras la validación en el entorno relevante?",
                "¿El prototipo validado cumple los criterios de diseño y rendimiento necesarios para proceder a demostraciones en entorno operativo real?"
            ]
        },
        {
            level: 7,
            title: "Demostración en entorno operativo",
            requiredYes: 4,
            questions: [
                "¿Se ha probado en condiciones reales (campo, planta piloto, etc.) un prototipo de sistema completo a escala operativa?",
                "¿Durante la prueba en operación real el sistema cumplió con las funciones y el rendimiento previstos?",
                "¿Se han medido los indicadores de desempeño (rendimiento, eficiencia, calidad) del prototipo en el entorno operativo?",
                "¿El prototipo se ha integrado satisfactoriamente con otros sistemas o equipos presentes en el entorno de prueba?",
                "¿Se han tenido en cuenta aspectos de seguridad, normativas o estándares durante la demostración en campo?",
                "¿Se ha obtenido retroalimentación de usuarios o expertos en el entorno real para optimizar el sistema antes del despliegue final?"
            ]
        },
        {
            level: 8,
            title: "Sistema completo y calificado",
            requiredYes: 4,
            questions: [
                "¿El sistema final completo ha sido construido e implementado según sus especificaciones de diseño?",
                "¿Se han llevado a cabo pruebas de calificación o certificaciones requeridas en condiciones representativas de operación?",
                "¿Los resultados de las pruebas confirman que el sistema cumple con todos los requisitos funcionales, de rendimiento y seguridad?",
                "¿Se dispone de la documentación completa del sistema (manuales, procedimientos operativos, resultados de prueba) para su uso y mantenimiento?",
                "¿Se ha completado satisfactoriamente una revisión de preparación operativa antes de su despliegue?",
                "¿El sistema ha sido validado con usuarios finales o clientes en demostraciones oficiales con resultados positivos?"
            ]
        },
        {
            level: 9,
            title: "Sistema probado con éxito en operación real",
            requiredYes: 4,
            questions: [
                "¿El sistema está siendo utilizado con éxito en su entorno operacional final (por ejemplo, producción o misión)?",
                "¿Se han obtenido datos de operación reales (eficiencia, disponibilidad, etc.) que demuestren su fiabilidad y robustez?",
                "¿El sistema ha pasado satisfactoriamente todas las pruebas operativas en diferentes escenarios (carga máxima, condiciones extremas, etc.)?",
                "¿Está totalmente integrado en los procesos o la infraestructura del usuario final, funcionando como parte de la operación diaria?",
                "¿Se han cumplido los objetivos clave de rendimiento, calidad y costos en el uso real del sistema, según las especificaciones establecidas?",
                "¿Se cuenta con soporte técnico y mantenimiento continuo, y existe un plan de mejora basado en la experiencia operativa?"
            ]
        }
    ];

    // --- ESTADO DE LA APLICACIÓN ---
    let currentLevel = 1;
    const answers = {};

    // --- REFERENCIAS AL DOM ---
    const technologyNameInput = document.getElementById('technology-name');
    const responsibleInput = document.getElementById('responsible');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const progressBar = document.getElementById('progress-bar');
    const trlLevelTitle = document.getElementById('trl-level-title');
    const trlLevelSubtitle = document.getElementById('trl-level-subtitle');
    const questionsContainer = document.getElementById('questions-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const showResultsBtn = document.getElementById('show-results-btn');
    const modal = document.getElementById('results-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalBody = document.getElementById('modal-body-content');
    const exportPdfBtn = document.getElementById('export-pdf-btn');

    // --- LÓGICA DE TEMA (Claro/Oscuro) ---
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    }
    
    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    }

    // --- INICIALIZACIÓN ---
    function init() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (prefersDark) {
            applyTheme('dark');
        }

        renderProgressBar();
        renderLevel(currentLevel);
        addEventListeners();
    }

    // --- LÓGICA DE RENDERIZADO ---
    function renderProgressBar() {
        progressBar.innerHTML = '';
        trlData.forEach(levelData => {
            const step = document.createElement('div');
            step.className = 'progress-step';
            step.textContent = levelData.level;
            step.dataset.level = levelData.level;
            progressBar.appendChild(step);
        });
        updateProgressBar();
    }

    function renderLevel(level) {
        currentLevel = level;
        const levelData = trlData.find(l => l.level === level);

        trlLevelTitle.textContent = `TRL ${levelData.level}`;
        trlLevelSubtitle.textContent = levelData.title;

        questionsContainer.innerHTML = '';
        levelData.questions.forEach((q, index) => {
            const questionItem = document.createElement('div');
            questionItem.className = 'question-item';

            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${q}`;
            
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'question-options';

            const currentAnswer = answers[level] ? answers[level][index] : null;

            optionsDiv.innerHTML = `
                <input type="radio" id="q${level}-${index}-si" name="q${level}-${index}" value="SI" ${currentAnswer === 'SI' ? 'checked' : ''}>
                <label for="q${level}-${index}-si">SI</label>
                <input type="radio" id="q${level}-${index}-no" name="q${level}-${index}" value="NO" ${currentAnswer === 'NO' ? 'checked' : ''}>
                <label for="q${level}-${index}-no">NO</label>
            `;
            
            questionItem.appendChild(questionText);
            questionItem.appendChild(optionsDiv);
            questionsContainer.appendChild(questionItem);
        });

        updateNavigationButtons();
        updateProgressBar();
    }

    function updateProgressBar() {
        const steps = document.querySelectorAll('.progress-step');
        steps.forEach(step => {
            const level = parseInt(step.dataset.level);
            step.classList.remove('active', 'completed');
            
            if (level === currentLevel) {
                step.classList.add('active');
            }

            const yesCount = countYesAnswers(level);
            const levelData = trlData.find(l => l.level === level);
            if (yesCount >= levelData.requiredYes) {
                step.classList.add('completed');
            }
        });
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentLevel === 1;
        nextBtn.disabled = currentLevel === trlData.length;
    }

    // --- MANEJO DE EVENTOS ---
    function addEventListeners() {
        themeToggleBtn.addEventListener('click', toggleTheme);
        prevBtn.addEventListener('click', () => { if (currentLevel > 1) renderLevel(currentLevel - 1); });
        nextBtn.addEventListener('click', () => { if (currentLevel < trlData.length) renderLevel(currentLevel + 1); });
        
        progressBar.addEventListener('click', (e) => {
            if (e.target.classList.contains('progress-step')) {
                const level = parseInt(e.target.dataset.level);
                renderLevel(level);
            }
        });

        questionsContainer.addEventListener('change', (e) => {
            if (e.target.type === 'radio') {
                const name = e.target.name;
                const [_, levelStr, indexStr] = name.match(/q(\d+)-(\d+)/);
                const level = parseInt(levelStr);
                const index = parseInt(indexStr);
                
                if (!answers[level]) answers[level] = {};
                answers[level][index] = e.target.value;
                updateProgressBar();
            }
        });

        showResultsBtn.addEventListener('click', showResults);
        closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
        exportPdfBtn.addEventListener('click', exportToPDF);
    }
    
    // --- LÓGICA DE CÁLCULO Y RESULTADOS ---
    function countYesAnswers(level) {
        if (!answers[level]) return 0;
        return Object.values(answers[level]).filter(ans => ans === 'SI').length;
    }

    function calculateResults() {
        let maxAchievedTRL = 0;
        let totalYes = 0;
        let totalAnswered = 0;

        for (const levelData of trlData) {
            const level = levelData.level;
            const yesCount = countYesAnswers(level);
            const isAchieved = yesCount >= levelData.requiredYes;

            if (isAchieved) {
                maxAchievedTRL = level;
            } else {
                break;
            }
        }

        Object.values(answers).forEach(levelAnswers => {
            totalAnswered += Object.keys(levelAnswers).length;
            totalYes += Object.values(levelAnswers).filter(ans => ans === 'SI').length;
        });

        const totalQuestions = trlData.reduce((sum, l) => sum + l.questions.length, 0);

        return { maxAchievedTRL, totalYes, totalAnswered, totalQuestions };
    }

    function showResults() {
        const { maxAchievedTRL, totalYes, totalAnswered, totalQuestions } = calculateResults();
        
        let html = `
            <div class="result-summary">
                <p class="max-trl-desc">Nivel de Madurez Tecnológica Alcanzado</p>
                <p class="max-trl">TRL ${maxAchievedTRL}</p>
            </div>
            <div class="result-stats">
                <div class="stat-item">
                    <div class="value">${totalAnswered} / ${totalQuestions}</div>
                    <div class="label">Preguntas Respondidas</div>
                </div>
                <div class="stat-item">
                    <div class="value">${totalYes}</div>
                    <div class="label">Respuestas "SI"</div>
                </div>
                <div class="stat-item">
                    <div class="value">${((totalAnswered / totalQuestions) * 100).toFixed(0)}%</div>
                    <div class="label">Completitud</div>
                </div>
            </div>
        `;
        
        html += '<div class="level-details">';
        trlData.forEach(levelData => {
            const level = levelData.level;
            const yesCount = countYesAnswers(level);
            const isAchieved = yesCount >= levelData.requiredYes;
            html += `
                <div class="level-detail">
                    <h4>TRL ${level}: ${levelData.title}</h4>
                    <p>Respuestas 'SI': ${yesCount} / ${levelData.questions.length} - 
                    ${isAchieved ? '<span class="yes">NIVEL ALCANZADO</span>' : '<span class="no">NIVEL NO ALCANZADO</span>'}</p>
                </div>
            `;
        });
        html += '</div>';

        modalBody.innerHTML = html;
        modal.style.display = 'flex';
    }

    // --- LÓGICA DE EXPORTACIÓN A PDF ---
    function exportToPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const { maxAchievedTRL } = calculateResults();
        
        const techName = technologyNameInput.value || "No especificada";
        const responsible = responsibleInput.value || "No especificado";
        
        let y = 15;

        // Título y datos del proyecto
        doc.setFontSize(20);
        doc.setFont(undefined, 'bold');
        doc.text("Informe de Evaluación TRL", 105, y, { align: 'center' });
        y += 15;
        
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');
        doc.text(`Nombre de la Tecnología:`, 15, y);
        doc.setFont(undefined, 'bold');
        doc.text(techName, 70, y);
        y += 7;
        
        doc.setFont(undefined, 'normal');
        doc.text(`Responsable del Proyecto:`, 15, y);
        doc.setFont(undefined, 'bold');
        doc.text(responsible, 70, y);
        y += 10;
        
        doc.setLineWidth(0.5);
        doc.line(15, y, 195, y);
        y += 10;
        
        // Resumen
        doc.setFontSize(16);
        doc.text(`Nivel de Madurez Alcanzado: TRL ${maxAchievedTRL}`, 105, y, { align: 'center' });
        y += 15;

        // Detalle por nivel
        trlData.forEach(levelData => {
            if (y > 260) {
                doc.addPage();
                y = 15;
            }
            const level = levelData.level;
            const yesCount = countYesAnswers(level);
            const isAchieved = yesCount >= levelData.requiredYes;
            
            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            doc.text(`TRL ${level}: ${levelData.title}`, 15, y);
            y += 7;
            
            doc.setFont(undefined, 'normal');
            doc.setFontSize(10);
            doc.text(`Resultado: ${yesCount} de ${levelData.questions.length} respuestas 'SI'. (Estado: ${isAchieved ? 'Alcanzado' : 'No alcanzado'})`, 15, y);
            y += 10;
            
            levelData.questions.forEach((q, index) => {
                if (!answers[level] || answers[level][index] === undefined) return;

                if (y > 275) {
                    doc.addPage();
                    y = 15;
                }
                const answer = answers[level][index];
                const questionText = `${index + 1}. ${q}`;
                const splitText = doc.splitTextToSize(questionText, 175);
                doc.text(splitText, 20, y);
                y += (splitText.length * 4) + 2;

                doc.setFont(undefined, 'bold');
                doc.setTextColor(answer === 'SI' ? '#28a745' : '#dc3545');
                doc.text(`Respuesta: ${answer}`, 25, y);
                doc.setTextColor('#000000');
                y += 7;
                doc.setFont(undefined, 'normal');
            });

            y += 5;
        });

        doc.save(`Informe_TRL_${techName.replace(/\s+/g, '_')}.pdf`);
    }

    // --- INICIAR LA APLICACIÓN ---
    init();
});