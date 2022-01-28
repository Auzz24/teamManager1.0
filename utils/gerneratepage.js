
const newManager = employees => {
  return `
<section class="" id="employee">
<h2>Manager</h2>
  ${employees
      .map(({ name, id, email, officeNumber }) => {
        return `
      <div>
        <h5>
          Name:
          ${name}
        </h5>
        <h5>
        ID:
        ${id}
      </h5>
      <h5>
      Email:
      ${email}
    </h5>
    <h5>
    Office Number:
    ${officeNumber}
  </h5>
      </div>
      `;
      })
    }
    `;
};
const newIntern = employees => {
  return `
  <section class="" id="employee">
  <h2>Manager</h2>
    ${employees
      .map(({ name, id, email, school }) => {
        return `
        <div>
          <h5>
            Name:
            ${name}
          </h5>
          <h5>
          ID:
          ${id}
        </h5>
        <h5>
        Email:
        ${email}
      </h5>
      <h5>
      School:
      ${school}
    </h5>
        </div>
        `;
      })
    }
      `;
};

const newEngineer = employees=> {   return `
<section class="" id="employee">
<h2>Manager</h2>
  ${employees
    .map(({ name, id, email, gitHub}) => {
      return `
      <div>
        <h5>
          Name:
          ${name}
        </h5>
        <h5>
        ID:
        ${id}
      </h5>
      <h5>
      Email:
      ${email}
    </h5>
    <h5>
    GitHub:
    ${gitHub}
  </h5>
      </div>
      `;
    })
    }
    `;
  };

module.exports = pageData => {
  const { newManager, newIntern, newEngineer } = Employee;

  return `
  <!DOCTYPE html>
  <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>teamManager1.0</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>
            teamManager1.0
        </h1>
    </header>
    <section>
        <ul>
            <li>
                ${newManager(employee)}
                ${newIntern(employee)}
                ${newEngineer(employee)}
            </li>
        </ul>
    </section>
</body>
</html>
`;
};