
const newManger = managerArr => {   return `
<section class="" id="employee">
<h2>Manager</h2>
  ${projectsArr
    .filter(({ feature }) => feature)
    .map(({ name, id, email, officeNumber}) => {
      return `
      <div>
        <h5>
          Name:
          ${name.join(', ')}
        </h5>
        <h5>
        ID:
        ${id.join(', ')}
      </h5>
      <h5>
      Email:
      ${email.join(', ')}
    </h5>
    <h5>
    Office Number:
    ${officeNumber.join(', ')}
  </h5>
      </div>
      `;})
    })





// const newIntern = internText => {
//   if (!internText) {
//     return '';
//   }

//   return `
//     <section class="my-3" id="employee">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">Intern</h2>
//       <ul>
//             <li>
//                 Name: 
//             </li>
//             <li>
//                 Id: 
//             </li>
//             <li>
//                 Email:
//             </li>
//             <li>
//                 School: 
//             </li>
//         </ul>
//     </section>
//   `;
// };

// const generateEngineer = engineerText => {
//   if (!engineerText) {
//     return '';
//   }

//   return `
//     <section class="my-3" id="employee">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">Engineer</h2>
//       <ul>
//             <li>
//                 Name: 
//             </li>
//             <li>
//                 Id: 
//             </li>
//             <li>
//                 Email:
//             </li>
//             <li>
//                 Office Number: 
//             </li>
//         </ul>
//     </section>
//   `;
// };

// module.exports = pageData => {
//   const {Manager, Intern, Engineer} = Employee;

//   return `
//   <!DOCTYPE html>
//   <html lang="en">

//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//     <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="style.css">
//   </head>

//   <body>
//   <header>
//     <div class="container flex-row justify-space-between align-center py-3">
//       <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//       <nav class="flex-row">
//         <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
//       </nav>
//     </div>
//   </header>
//   <main class="container my-5">
//   ${generateAbout(about)}
//   ${generateProjects(projects)}
// </main>
//   <footer class="container text-center py-3">
//     <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
//   </footer>
// </body>
// </html>
// `;
// };