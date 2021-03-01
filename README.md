# Fit Track (Fitness Tracker)
![Fit-Tracker](/Assets/FinishedProduct.png)

### A simple app to track the name, type, weight, sets, reps, and duration of exercise log multiple exercises in a workout on a given day.

## Table of Contents
* [Technologies Used](Technologies_Used)
* [Deployed Site](Deployed)
* [Features](Features)
* [Usage](Usage)
* [Author](Author)
* [Credits](Credits)
* [License](License)

## Technologies_Used
* HTML 
* CSS
* Semantic UI Framework
* node.js
* express.js
* MongoDb
* heroku
* charts.js
* Mongoose
<!-- * handlebars.js -->

## Deployed Site
[Fit-Track](https://glacial-inlet-65172.herokuapp.com/)

## Features 


__1. A Way to Select Your Workout__
 
_What?_

A drop down menu that you allows to go through the process of making a selection of your workout (versus an entry).

![SelectView](/Assets/wkoutSelect.png)

_How?_

![SelectHTML](/Assets/wkoSelectCodeHTML.png)
![SelectSCHEMA](/Assets/wkoSelectCode.png)

This is not necessarily code I created, however I do think it is an important feature that could easily trip anyone up. It is important to understand that the html is the pathway that you need to follow to build api calls and the schema. 

__2. A Database for storing your workouts__

_What?_

In order to store data for referencing throughout the week (a 7 day period), we need a simple and accessible database to draw from. Because we want something simple, we chose to use Mongo DB instead of Mysql. In order to easily call MongoDB and build into our code (versus writing a schema outside of the code), we used [Mongoose](https://mongoosejs.com/) -which is essentially [sequelize](https://mongoosejs.com/) for Mongo DB; a program that allows you to simply build a database instead of your javascript instead of calling to it. 

_How?_

We start off our call in the server.js file (which I had to create for this assignment). This code is a combination of what I have used in other assignments and what I was given for instructions in my creating a heroku deployed site (see below). 

![gettheDB](/Assets/server.js.png)

In order to talk to our database we had to build a series of async calls.

![APIRoutes](/Assets/API-Backend.png)

Though these calls were built for the front end and the backend I chose to feature part of the ones on the back end, our main routes that talk to the MONGO DB. This was a fairly difficult part of the assignment as I tend to overthing how they work. It should fairly simple, they follow the CRUD (Create, Read, Update, Delete) -where we post and get (create), get (read), put (update) and delete. With mongoose we are finding things and then altering them rather then just grabbing them and altering them. This also follows a slightly different way of requesting and responding. Inserting curly brackets and the phrase body in place of req in certain circumstances. Also, we are using a router instead of app.

__3. A Way to View Your workouts__

_What?_
[Charts.js](https://www.chartjs.org/) allows us to build simple and beautiful charts without too much effort or too much customization.


![Charts](/Assets/ChartsDisplay.png)

_How?_


Below is an example of the donut chart code- it's pretty easy to take the examples from the [documentation](https://www.chartjs.org/docs/latest/charts/doughnut.html) and build a clean beautiful chart. Although this data was provided for me in this assignment, I felt it was an important and interesting feature worth discussion.

![DonutChart](/Assets/DonutChartCode.png)

__4. A Heroku deployed site__

_What?_

In order to deploy our code we must use a service like heroku, that allows for server side and front end code. Heroku is great because it offers a free service that allows you to use databases in the back end, a thing not offered by github pages. In order to use MongoDB with heroku a set of special steps must be followed (that are different from using either mysql or no database).

_How?_
  
  Basic Steps:

1. Set up a MongoDB Atlas account by going to https://www.mongodb.com/cloud/atlas/signup. Make sure you sign up for a shared (free cluster), that you are using the AWS Provider, that you use a password, set atlas admin as your database privileges and that you allow network access from anywhere.
2. Create a database by going to clusters, collections and naming your database. Make sure it worked before moving on.
3. Connect your database to heroku by navigating to the heroku settings section on your newly created (by "heroku create" in your vs code terminal of the code you want to create ) app-by adding config settings.
4. To add config settings, type in MONGODB_URI in they key of your config settings and getting your connection string with your username/password/database from your cluster in the connection settings. 
5. Then insert this code: 'mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
' 
into the place where you call those sorts things, also known as the server.js

__5. The Virtual Database seed Issue__

_What?_

This assignment had something unique that I really hadn't seen before - a seed file. In order to better understand this type of file I read this [blog](https://medium.com/@shannen.ye/setting-up-a-database-and-seed-file-7e73fe2a9fe6) about it. Also the [github](https://www.npmjs.com/package/seed-js) page does a great job describing it. It's very similar to the seed files used in mysql, used to help us begin using our database and test it out, however it seems to be it's on kind of js, downloaded from npm. 

_How?_

When trying to do npm seed (as described in the blog) I ran into some issues. However, I was able to solve my problem by using a virtual environment. It allows us to concatenate our results into a complete description of the duration without too much trouble.

[Documentation](https://mongoosejs.com/docs/tutorials/virtuals.html)

Code: 

{
  toJSON:{
    virtuals: true
  }
}
);

exerciseSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((total,exercise)=>{
    return total + exercise.duration
  }, 0)
})

__6. For Future Development__

* Make the colors more fun, this project started with relatively complex but plain looking imagery, it needs, in my opinion to be energetic and inspire people to exercise
* While making this app, I had hard understanding what I was making and what I was doing, therefore I think it would be a good idea to create about section that describes how to use this application
* It may be a huge undertaking and never really happen but it would be cool to take data used for the workouts and create a nutrition part that does this same thing
* It might be fun to have this be a more social tool - have a user log in and log out would add a degree of complexity to every bit of code but it would be cool to be able to share your workouts with your friends

## Usage
### How do you use this project? This is meant for anyone looking for a more structured approach to exercise and working out. If you are looking to keep an easy to manage website 
 
## Author 
Rachael Kelm-Southworth

* [linkedin](https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3) 

* [Portfolio](https://rksouth.github.io/Portfolio/ )

* [github](https://github.com/RKSouth/)

 ## Credits

I would like to thank Kerwin, Manuel, Roger, Jerome and all my classmates for helping me understand this subject matter and anyone that contributed to make the base code.

## License
[MIT](https://choosealicense.com/licenses/mit/)



