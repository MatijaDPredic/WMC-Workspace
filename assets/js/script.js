// Funktion zum Umschalten der Sections
function showSection(sectionId) {
    // 1. Alle Sections verstecken
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Alle Buttons zurücksetzen
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Gewählte Section anzeigen
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // 4. Button aktivieren
    const activeBtn = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick').includes(sectionId)
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Funktion für den Terminal-Modus Toggle (NICHT verschachtelt!)
function toggleTerminalMode() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    
    body.classList.toggle('terminal-mode');
    
    if (body.classList.contains('terminal-mode')) {
        btn.innerText = "[ DEACTIVATE TERMINAL ]";
        console.log("Terminal Mode: ENGAGED");
    } else {
        btn.innerText = "[ ACCESS TERMINAL MODE ]";
        console.log("Terminal Mode: DISENGAGED");
    }
}

// Funktion für den Vault-Filter
function filterVaults() {
    const filterValue = document.getElementById('vaultFilter').value;
    const cards = document.querySelectorAll('.vault-card');
    
    cards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
            card.style.display = ""; 
            if (window.getComputedStyle(card).display === 'none') {
                card.style.display = card.classList.contains('vault-row') ? 'flex' : 'block';
            }
            card.style.animation = "fadeIn 0.5s";
        } else {
            card.style.display = "none";
        }
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    console.log("Vault-Tec Terminal Initialized.");
});
