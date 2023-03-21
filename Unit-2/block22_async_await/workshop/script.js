const newPartyForm = document.querySelector('#new-party-form');
const partyContainer = document.querySelector('#party-container');

const PARTIES_API_URL = 'http://localhost:8080/api/workshop/parties';
const GUESTS_API_URL = 'http://localhost:8080/api/workshop/guests';
const RSVPS_API_URL = 'http://localhost:8080/api/workshop/rsvps';
const GIFTS_API_URL = 'http://localhost:8080/api/workshop/gifts';

// get all parties
const getAllParties = async () => {
    try {
        const response = await fetch(PARTIES_API_URL);
        const parties = await response.json();
        return parties;
    } catch (error) {
        console.error(error);
    }
};

// delete party
const deleteParty = async (id) => {
    try {
        const response = await fetch(`${PARTIES_API_URL}/${id}`, {
            method: 'DELETE',
        });
        const deletedParty = await response.json();
        return deletedParty;
    } catch (error) {
        console.error(error);
    }
};

// render all parties
const renderParties = async (parties) => {
    try {
        partyContainer.innerHTML = '';
        parties.forEach((party) => {
            const partyElement = document.createElement('div');
            partyElement.classList.add('party');
            partyElement.innerHTML = `
                <h2>${party.name}</h2>
                <p>${party.description}</p>
                <p>${party.date}</p>
                <p>${party.time}</p>
                <p>${party.location}</p>
                <button class="delete-button" data-id="${party.id}">Delete</button>
            `;
            partyContainer.appendChild(partyElement);

            // delete party
            const deleteButton = partyElement.querySelector('.delete-button');
            deleteButton.addEventListener('click', async (event) => {
                try {
                    const id = event.target.dataset.id;
                    await deleteParty(id);
                    const parties = await getAllParties();
                    renderParties(parties);
                } catch (error) {
                    console.error(error);
                }
            });
        });
    } catch (error) {
        console.error(error);
    }
};

// init function
const init = async () => {
    const parties = await getAllParties();
    console.log(parties);
    renderParties(parties);
};

init();