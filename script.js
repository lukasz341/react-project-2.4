var movies = [
	{
	id: 1,
	title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    image: './images/harry_potter.jpg'
},
{	
	id: 2,
	title: 'Król lew',
    desc: 'Film o królu sawanny',
    image: './images/krol_lew.jpeg'
},

{	
	id: 3,
	title: 'Władca Pierścieni',
    desc: 'Film na podstawie książki Tolkiena',
    image: './images/wladca_pierscieni.jpg'
},

{	
	id: 4,
	title: 'Hobbit',
    desc: 'Film na podstawie książki Tolkiena',
    image: './images/hobbit.jpg'
},

{	
	id: 5,
	title: 'Gwiezdne wojny - przebudzenie mocy',
    desc: 'Kolejna część sagi Gwiezdne wojny',
    image: './images/gwiezdne_wojny.jpg'
},

];

var MovieTitle = React.createClass ({
	render () {
		return (
			React.createElement('h2',{}, this.props.title)
		);
	}

});

var MovieDesc = React.createClass ({
	render () {
		return (
			React.createElement('p',{}, this.props.desc)
		);
	}

});

var MoviesList = React.createClass ({
	render () {
		return (
			React.createElement('li',{},)
		);
	}

});

var moviesElement = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement(MovieTitle, {title: movie.title}),
        React.createElement(MovieDesc, {desc: movie.desc}),
        React.createElement('img',{src: movie.image}, )
	
	
	);
	
});

var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista Filmów'),
		React.createElement('ul', {}, moviesElement
		
		)
	);
	


ReactDOM.render(element, document.getElementById('app'));