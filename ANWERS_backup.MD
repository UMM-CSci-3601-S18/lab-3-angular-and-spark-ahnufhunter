 ANSWER NO.1
 
  Different directories have different types of file to ignore. There is one in server, one in gradle and one in client.
  For example the .gitignore in the server folder of our project ignores different generated programs, 
  while compared to the .gitignore files in the gradle folder or the client folder which ignores
  different programs. Each .gitignore is just specific to their own sub directory. 
 
 ANSWER NO.2
 
  To divide the application into smaller components and keep certain things separate.
 
 ANSWER NO.3
 
  app.component.html has the content to make the nave bar work.
  app.component.spec.ts defines the logic on how the nav bar is going to be implemented.
  SparkJava server is certainly not the only thing doing routing. When we go to app.routes.ts 
  we realize that this testscript file also has contribution to the server routing.
 
 ANSWER NO.4
  
  user-list.service.ts is creates the url and is created by angular during set up. However, components
  only show up when the http page is being shown. It's generally a better idea to have logic in user-list.services
  so that one might get access to it whenever they require unlike components which are only shown later on after
  being implemented and thats why they are kept seperated.
