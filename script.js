// System type definitions from complete system table
const systemTypes = {
    chiller: {
        verySimple: { hw: 5, points: {ui: 3, bi: 1, bo: 1, co: 0, ao: 0} },
        simple: { hw: 14, points: {ui: 6, bi: 2, bo: 3, co: 2, ao: 1} },
        average: { hw: 32, points: {ui: 12, bi: 6, bo: 8, co: 3, ao: 3} },
        complex: { hw: 48, points: {ui: 16, bi: 10, bo: 12, co: 6, ao: 4} }
    },
    boiler: {
        verySimple: { hw: 5, points: {ui: 3, bi: 1, bo: 1, co: 0, ao: 0} },
        simple: { hw: 14, points: {ui: 6, bi: 2, bo: 3, co: 2, ao: 1} },
        average: { hw: 32, points: {ui: 12, bi: 6, bo: 8, co: 3, ao: 3} },
        complex: { hw: 48, points: {ui: 16, bi: 10, bo: 12, co: 6, ao: 4} }
    },
    ahu: {
        verySimple: { hw: 6, points: {ui: 4, bi: 1, bo: 1, co: 0, ao: 0} },
        simple: { hw: 12, points: {ui: 6, bi: 2, bo: 2, co: 1, ao: 1} },
        average: { hw: 21, points: {ui: 8, bi: 4, bo: 5, co: 2, ao: 2} },
        complex: { hw: 30, points: {ui: 10, bi: 6, bo: 8, co: 3, ao: 3} }
    },
    fcu: {
        simple: { hw: 2, points: {ui: 1, bi: 0, bo: 1, co: 0, ao: 0} },
        average: { hw: 4, points: {ui: 2, bi: 1, bo: 1, co: 0, ao: 0} },
        complex: { hw: 7, points: {ui: 3, bi: 1, bo: 2, co: 1, ao: 0} }
    },
    vav: {
        simple: { hw: 2, points: {ui: 1, bi: 0, bo: 1, co: 0, ao: 0} },
        average: { hw: 4, points: {ui: 2, bi: 0, bo: 1, co: 1, ao: 0} },
        complex: { hw: 7, points: {ui: 3, bi: 1, bo: 2, co: 1, ao: 0} }
    },
    tec: {
        simple: { hw: 2, points: {ui: 1, bi: 0, bo: 1, co: 0, ao: 0} }
    },
    ef: {
        simple: { hw: 2, points: {ui: 1, bi: 0, bo: 1, co: 0, ao: 0} },
        average: { hw: 4, points: {ui: 2, bi: 1, bo: 1, co: 0, ao: 0} },
        complex: { hw: 7, points: {ui: 3, bi: 1, bo: 2, co: 1, ao: 0} }
    },
    integration: {
        simple: { hw: 0, points: {ui: 0, bi: 0, bo: 0, co: 0, ao: 0} },
        average: { hw: 0, points: {ui: 0, bi: 0, bo: 0, co: 0, ao: 0} },
        complex: { hw: 0, points: {ui: 0, bi: 0, bo: 0, co: 0, ao: 0} }
    },
    miscPanel: {
        simple: { hw: 2, points: {ui: 1, bi: 0, bo: 1, co: 0, ao: 0} }
    }
};

// Controller definitions with full point counts
const controllers = {
    mstp: {
        cgm04060: {
            model: 'M4-CGM04060-0',
            ui: 3, bi: 1, bo: 2, co: 4, ao: 0,
            maxSystems: ['ahu', 'chiller', 'boiler', 'ef', 'fcu', 'miscPanel'],
            maxSABus: 10
        },
        cgm09090: {
            model: 'M4-CGM09090-0',
            ui: 7, bi: 2, bo: 3, co: 4, ao: 2,
            maxSystems: ['ahu', 'chiller', 'boiler', 'ef', 'fcu', 'miscPanel'],
            maxSABus: 10
        },
        cgm18000: {
            model: 'M4-CGM18000-0',
            ui: 0, bi: 18, bo: 0, co: 0, ao: 0,
            maxSystems: ['ahu', 'chiller', 'boiler'],
            maxSABus: 10
        },
        cvm03050: {
            model: 'M4-CVM03050-0',
            ui: 3, bi: 0, bo: 3, co: 2, ao: 0,
            maxSystems: ['vav', 'tec'],
            maxSABus: 10
        }
    },
    ip: {
        cge04060: {
            model: 'M4-CGE04060-0',
            ui: 3, bi: 1, bo: 2, co: 4, ao: 0,
            maxSystems: ['ahu', 'chiller', 'boiler', 'ef', 'fcu', 'miscPanel'],
            maxSABus: 10
        },
        cge09090: {
            model: 'M4-CGE09090-0',
            ui: 7, bi: 2, bo: 3, co: 4, ao: 2,
            maxSystems: ['ahu', 'chiller', 'boiler', 'ef', 'fcu', 'miscPanel'],
            maxSABus: 10
        },
        cve03050: {
            model: 'M4-CVE03050-0P',
            ui: 3, bi: 0, bo: 3, co: 2, ao: 0,
            maxSystems: ['vav', 'tec'],
            maxSABus: 10
        }
    },
    expansion: {
        xpm04060: {
            model: 'M4-XPM04060-0',
            ui: 3, bi: 1, bo: 2, co: 4, ao: 0,
            countAsSABus: true
        },
        xpm09090: {
            model: 'M4-XPM09090-0',
            ui: 7, bi: 2, bo: 3, co: 4, ao: 2,
            countAsSABus: true
        },
        xpm18000: {
            model: 'M4-XPM18000-0',
            ui: 0, bi: 18, bo: 0, co: 0, ao: 0,
            countAsSABus: true
        }
    }
};

// Panel definitions from documentation
const panels = {
    standard: {
        p2aan: { 
            size: '20x16x6.5', 
            maxControllers: 1, 
            maxXPMs: 0,
            type: 'Standard NEMA 1'
        },
        p2ban: { 
            size: '24x20x6.5', 
            maxControllers: 2, 
            maxXPMs: 1,
            type: 'Standard NEMA 1'
        },
        p2can: { 
            size: '24x24x6.5', 
            maxControllers: 2, 
            maxXPMs: 2,
            type: 'Standard NEMA 1'
        },
        p2dan: { 
            size: '36x24x6.5', 
            maxControllers: 4, 
            maxXPMs: 3,
            type: 'Standard NEMA 1'
        }
    },
    withTB: {
        p2aay: { 
            size: '20x16x6.5', 
            maxControllers: 1, 
            maxXPMs: 0,
            type: 'NEMA 1 with Terminal Blocks'
        },
        p2bay: { 
            size: '24x20x6.5', 
            maxControllers: 2, 
            maxXPMs: 1,
            type: 'NEMA 1 with Terminal Blocks'
        },
        p2cay: { 
            size: '24x24x6.5', 
            maxControllers: 2, 
            maxXPMs: 2,
            type: 'NEMA 1 with Terminal Blocks'
        },
        p2day: { 
            size: '36x24x6.5', 
            maxControllers: 4, 
            maxXPMs: 3,
            type: 'NEMA 1 with Terminal Blocks'
        }
    }
};

// SNE model specifications from documentation
const sneModels = {
    SNE10500: { 
        maxDevices: 60, 
        maxMSTP: 1, 
        mstpPerTrunk: 50,
        maxRFB: 3,
        rfbPerTrunk: 32
    },
    SNE11000: { 
        maxDevices: 150, 
        maxMSTP: 1, 
        mstpPerTrunk: 100,
        maxRFB: 3,
        rfbPerTrunk: 32
    },
    SNE22000: { 
        maxDevices: 600, 
        maxMSTP: 2, 
        mstpPerTrunk: 100,
        maxRFB: 6,
        rfbPerTrunk: 32
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addSystem').addEventListener('click', addSystem);
    document.getElementById('protocolSelect').addEventListener('change', calculateRecommendation);
});

function addSystem() {
    const systemRow = document.createElement('div');
    systemRow.className = 'system-row';
    
    const systemSelect = createSystemSelect();
    const complexitySelect = createComplexitySelect();
    const quantityInput = createQuantityInput();
    const deleteButton = createDeleteButton();
    
    systemRow.appendChild(systemSelect);
    systemRow.appendChild(complexitySelect);
    systemRow.appendChild(quantityInput);
    systemRow.appendChild(deleteButton);
    
    document.getElementById('systemList').appendChild(systemRow);
    
    updateComplexityOptions(systemSelect, complexitySelect);
    calculateRecommendation();
}

function createSystemSelect() {
    const select = document.createElement('select');
    select.innerHTML = Object.keys(systemTypes).map(type => 
        `<option value="${type}">${type.toUpperCase()}</option>`
    ).join('');
    
    select.addEventListener('change', (e) => {
        updateComplexityOptions(e.target, e.target.nextElementSibling);
        calculateRecommendation();
    });
    return select;
}

function createComplexitySelect() {
    const select = document.createElement('select');
    select.addEventListener('change', calculateRecommendation);
    return select;
}

function createQuantityInput() {
    const input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.value = '1';
    input.addEventListener('change', calculateRecommendation);
    return input;
}

function createDeleteButton() {
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.className = 'delete-btn';
    button.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        calculateRecommendation();
    });
    return button;
}

function updateComplexityOptions(systemSelect, complexitySelect) {
    const systemType = systemSelect.value;
    const complexities = Object.keys(systemTypes[systemType]);
    
    complexitySelect.innerHTML = complexities.map(complexity => 
        `<option value="${complexity}">${complexity}</option>`
    ).join('');
}

// Continue with core calculation functions...
// Point calculation logic
function calculateTotalPoints() {
    const systems = document.querySelectorAll('.system-row');
    let totals = {ui: 0, bi: 0, bo: 0, co: 0, ao: 0, hw: 0, devices: 0};
    
    systems.forEach(system => {
        const type = system.querySelector('select:first-child').value;
        const complexity = system.querySelector('select:nth-child(2)').value;
        const quantity = parseInt(system.querySelector('input').value) || 1;
        
        const points = systemTypes[type][complexity].points;
        const hw = systemTypes[type][complexity].hw;
        
        totals.ui += points.ui * quantity;
        totals.bi += points.bi * quantity;
        totals.bo += points.bo * quantity;
        totals.co += points.co * quantity;
        totals.ao += points.ao * quantity;
        totals.hw += hw * quantity;
        totals.devices += quantity;
    });
    
    return totals;
}

// Controller/XPM selection algorithm 
function selectControllers(points, protocol) {
    let controllers = [];
    let expansionModules = [];
    let remainingPoints = {...points};
    let saBusCount = 0;
    
    const controllerTypes = protocol === 'ip' ? controllers.ip : controllers.mstp;
    
    // First pass - select main controllers based on system types
    const systems = document.querySelectorAll('.system-row');
    systems.forEach(system => {
        const type = system.querySelector('select:first-child').value;
        const quantity = parseInt(system.querySelector('input').value) || 1;
        
        // Find suitable controller for system type
        for(const [model, specs] of Object.entries(controllerTypes)) {
            if(specs.maxSystems.includes(type)) {
                for(let i = 0; i < quantity; i++) {
                    controllers.push(model);
                    remainingPoints.ui -= specs.ui;
                    remainingPoints.bi -= specs.bi;
                    remainingPoints.bo -= specs.bo; 
                    remainingPoints.co -= specs.co;
                    remainingPoints.ao -= specs.ao;
                    if(specs.maxSABus) saBusCount += specs.maxSABus;
                }
                break;
            }
        }
    });

    // Second pass - add expansion modules for remaining points
    while(remainingPoints.ui > 0 || remainingPoints.bi > 0 || 
          remainingPoints.bo > 0 || remainingPoints.co > 0 || 
          remainingPoints.ao > 0) {
            
        let bestModule = null;
        let bestFit = Infinity;
        
        for(const [model, specs] of Object.entries(controllers.expansion)) {
            const fit = Math.abs(specs.ui - remainingPoints.ui) + 
                       Math.abs(specs.bi - remainingPoints.bi) +
                       Math.abs(specs.bo - remainingPoints.bo) +  
                       Math.abs(specs.co - remainingPoints.co) +
                       Math.abs(specs.ao - remainingPoints.ao);
                       
            if(fit < bestFit) {
                bestFit = fit;
                bestModule = model;
            }
        }
        
        if(!bestModule) break;
        
        expansionModules.push(bestModule);
        const specs = controllers.expansion[bestModule];
        remainingPoints.ui -= specs.ui;
        remainingPoints.bi -= specs.bi;
        remainingPoints.bo -= specs.bo;
        remainingPoints.co -= specs.co; 
        remainingPoints.ao -= specs.ao;
        if(specs.countAsSABus) saBusCount++;
    }
    
    return {
        controllers,
        expansionModules,
        saBusCount,
        remainingPoints
    };
}

// Panel selection logic
function selectPanel(controllerCount, xpmCount) {
    const totalControllers = controllerCount + xpmCount;
    let standardPanel = null;
    let tbPanel = null;
    
    // Find smallest panel that fits controllers
    for(const [model, specs] of Object.entries(panels.standard)) {
        if(specs.maxControllers >= controllerCount && 
           specs.maxXPMs >= xpmCount) {
            standardPanel = model;
            break;
        }
    }
    
    // Find smallest panel with terminal blocks that fits
    for(const [model, specs] of Object.entries(panels.withTB)) {
        if(specs.maxControllers >= controllerCount &&
           specs.maxXPMs >= xpmCount) {
            tbPanel = model;
            break;  
        }
    }
    
    return {
        standard: standardPanel,
        withTB: tbPanel
    };
}

// SNE model selection
function selectSNE(totalDevices, protocol) {
    let recommendedSNE = null;
    
    for(const [model, specs] of Object.entries(sneModels)) {
        if(specs.maxDevices >= totalDevices) {
            if(protocol === 'mstp' && specs.maxMSTP > 0) {
                recommendedSNE = model;
                break;
            } else if(protocol === 'ip') {
                recommendedSNE = model;
                break;
            }
        }
    }
    
    return recommendedSNE;
}

// Full validation including SA Bus limits
function validateConfiguration(controllers, expansionModules, saBusCount) {
    const warnings = [];
    
    // Check SA Bus device limits
    if(saBusCount > 10) {
        warnings.push('WARNING: SA Bus device count exceeds maximum of 10 devices per controller');
    }
    
    // Check controller compatibility
    const uniqueControllers = [...new Set(controllers)];
    if(uniqueControllers.length > 1) {
        warnings.push('WARNING: Mixed controller types detected - verify compatibility');
    }
    
    // Check expansion module limits
    if(expansionModules.length > 0) {
        const maxXPM = Math.max(...controllers.map(c => 
            controllers[c].maxSABus || 0
        ));
        if(expansionModules.length > maxXPM) {
            warnings.push(`WARNING: Number of expansion modules exceeds controller limit of ${maxXPM}`);
        }
    }
    
    return warnings;
}

// Main calculation function that ties everything together
function calculateRecommendation() {
    const protocol = document.getElementById('protocolSelect').value;
    
    // Calculate total points needed
    const points = calculateTotalPoints();
    
    // Select controllers and expansion modules
    const {controllers, expansionModules, saBusCount, remainingPoints} = 
        selectControllers(points, protocol);
        
    // Select appropriate panel
    const panels = selectPanel(controllers.length, expansionModules.length);
    
    // Select SNE model
    const sneModel = selectSNE(points.devices, protocol);
    
    // Validate configuration
    const warnings = validateConfiguration(
        controllers, 
        expansionModules,
        saBusCount
    );
    
    // Update UI
    updateResults({
        points,
        controllers,
        expansionModules,
        saBusCount,
        panels,
        sneModel,
        warnings
    });
}

// Update results in the UI
function updateResults(results) {
    // Update point totals
    document.getElementById('totalUI').textContent = results.points.ui;
    document.getElementById('totalBI').textContent = results.points.bi;
    document.getElementById('totalBO').textContent = results.points.bo;
    document.getElementById('totalCO').textContent = results.points.co;
    document.getElementById('totalAO').textContent = results.points.ao;
    
    // Update controller list
    const controllerList = document.getElementById('controllerList');
    controllerList.innerHTML = results.controllers.map(c => 
        `<div>${c}</div>`
    ).join('');
    
    // Update expansion list
    const expansionList = document.getElementById('expansionList');
    expansionList.innerHTML = results.expansionModules.map(m =>
        `<div>${m}</div>`
    ).join('');
    
    // Update summary section
    document.getElementById('totalDevices').textContent = results.points.devices;
    document.getElementById('saBusCount').textContent = results.saBusCount;
    document.getElementById('recommendedSNE').textContent = results.sneModel || 'None';
    document.getElementById('recommendedPanel').textContent = results.panels.standard || 'None';
    document.getElementById('recommendedPanelTB').textContent = results.panels.withTB || 'None';
    
    // Update warnings
    const warningsDiv = document.getElementById('warnings');
    warningsDiv.innerHTML = results.warnings.map(w =>
        `<div class="warning">${w}</div>`
    ).join('');
    
    // Show results
    document.querySelector('.recommendation').classList.remove('hidden');
}
