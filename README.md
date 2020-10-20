
<h1 align="center">
  <img  align="center" alt="Logo" title="logo" width="700px"src="/Github/images/logoBlue.png"/>
  <br>
  Happy es una plataforma para programar visitas a orfanatos, creada durante la Next Level Week
</h1>
<br>

## Screenshots
### Web
<h3 align="center">
    <img alt="Landing" title="landingpage" width="800px" src="/Github/images/Landing1.png">
    <img alt="Landing" title="landingpage" width="800px" src="/Github/images/Orphanage.png">
</h3>
### Mobile
<h3 align="center">
    <img alt="Landing" title="landingpage" width="400px" src="/Github/images/mobile.png">
</h3>

  ## Techs
- [NodeJs](https://nodejs.org/en/) - Crear el servidor
- [ReactJs](https://reactjs.org) - A JavaScript library for building user interfaces
- [React Icons](https://react-icons.github.io/react-icons/) - Utilizes ES6 imports that allows you to include only the icons that your project is using.
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - DOM bindings
- [React Native](https://reactnative.dev) - Native Development
- [React Navigation](https://reactnavigation.org/docs/getting-started/) - Routing and navigation for your React Native apps.
- [Expo](https://expo.io) - Deploy and quickly iterate on native Android, iOS, and web apps
- [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/) - Compose and send mail 
- [SQLite3](https://www.sqlite.org) - DB Connector
- [Express](https://expressjs.com/) - Router of the Application
- [CORS](https://www.npmjs.com/package/cors) - Cross-origin Resource Sharing
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and NodeJs

## How to run
Backend
API Reference:
<b>Run in Insomnia</b>

Access backend folder and install the dependencies

  $ yarn

  # or

  $ npm install
  
And then edit the file src/views/images_views with your current IP address:

 ` // your ip is required to display photos on your mobile device`

 
 `
 render(image: Image) {
		return {
			id: image.id,
			url: http://YOUR_CURRENT_IP_ADDRESS:3333/uploads/${image.path},
		};
	},
  `
After that run the database migrations

 
 $ yarn typeorm migration:run

  # or

  $ npm typeorm migration:run

Finally start the server

 $ yarn dev

  # or

  $ npm run dev

Frontend

Access web folder and install the dependencies

 $ yarn

  # or

  $ npm install
  
After that start the server

  $ yarn start

  # or

  $ npm run start

Mobile

Access mobile folder and install the dependencies

  $ yarn

  # or
  
  $ npm install
  
After that edit the file src/services/api.ts with your current IP address:
`
  const api = axios.create({
    baseURL: 'http://YOUR_CURRENT_IP_ADDRESS:3333',
  });
  `

After all start the app

  expo start

  
  ## 📝 Licencia

Este proyecto esta sob licencia [MIT](./LICENSE).

Proyecto desarollado durante la NLW 3 - Rocketseat.


   
