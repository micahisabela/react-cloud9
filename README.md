# React Cloud 9 Weather Application

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Purpose 

I created this web application as my final project for the SheCodes Workshops React Development course. This weather application can be used for checking the current weather information (temperature, humidity, and wind speed) and 3-hour forecast in a given city in either metric or imperial units.

**Feel free to demo it [here](https://zealous-babbage-d06cf3.netlify.app)**

## Technologies & Frameworks used

- HTML5
- CSS3
- JavaScript (ES6)
- React
- Bootstrap 

### API 

Thank you to the OpenWeatherMap for having some free API and relatively easy to read documentation for a beginner coder.

## Snippets

### Search form
Coded the city search form in React with Bootstrap, and JavaScript event listeners to activate the search funcionality and access the API.

**User interface**
![Image](city-search.png?raw=true)

**Code**
```
<div className="Search">
 <form onSubmit={handleSubmit}>
  <div className="form-group">
   <input
   type="text"
   className="form-control"
   placeholder="Search"
   onChange={getCity}
  />
  </div>
 <button type="submit" className="btn btn-info btn-block">
   Change city
 </button>
 </form>
</div>
```

### Temperature conversion
Used JavaScript math functionality to convert the temperature unit from imperial to metric

**User interface**
![Image](farenheit.png?raw=true) | ![Image](celsius.png?raw=true)
