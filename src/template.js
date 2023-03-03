const genManager = (manager) => {
    return `
    <div class="card col-8">
    <div class="card-header">
        <h2>${manager.name}</h2>
        <h3><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group mx-4">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>
    `;
};

const genEngineer = (engineer) => {
    return `
    <div class="card col-8">
    <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
</div>
    `;
};

const genIntern = (intern) => {
    return `
    <div class="card col-8">
    <div class="card-header">
        <h2>${intern.name}</h2>
        <h3><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}"></li>
        </ul>
    </div>
</div>
    `;
};

const generateTeam = (data) => {
    let teamCard = [];
    for (let i = 0; i < data.length; i++) {
        let role = data[i].getRole();

        if (role === "Manager") {
            const managerCard = genManager(data[i]);
            teamCard.push(managerCard);
        }
        if (role === "Engineer") {
            const engineerCard = genEngineer(data[i]);
            teamCard.push(engineerCard);
        }
        if (role === "Intern") {
            const internCard = genIntern(data[i]);
            teamCard.push(internCard);
        }
    }
    const teamCardInfo = teamCard.join("");

    const generatePage = generateHtml(teamCardInfo);
    return generatePage;
};

const generateHtml = (teamCardInfo) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <title>Team Generator</title>
    </head>
    <body>
        <header class="jumbotron">
            <h1 class="text-center p-5">Team</h1>
        </header>
        <section class="container">
            <div class="row justify-content-center p-6">
            ${teamCardInfo}
            </div>
    
        </section>
        
    </body>
    </html>
    `;
};
module.exports = generateTeam
