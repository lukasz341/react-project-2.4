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



var Movie = React.createClass({
    render: function() {
        return React.createElement('li', {}, 
			React.createElement(MovieTitle, {title: this.props.movie.title}),
			React.createElement(MovieDesc, {desc: this.props.movie.desc}),
			React.createElement('img',{src: this.props.movie.image}, )
            
        );
     }
 });


var MoviesList = React.createClass({
    render: function() {
        var moviesItems = movies.map(function(item) {
            return React.createElement(Movie, {movie: item, key: item.id});
        });

        return React.createElement('ul', {}, moviesItems);
    }
});




var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista Filmów'),
		React.createElement(MoviesList)
		
	);
	


ReactDOM.render(element, document.getElementById('app'));