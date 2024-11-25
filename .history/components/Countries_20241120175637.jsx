import '../src/App.css'

function Countries({ countries }) {

    return (
      <div className='outer-container'>
        {countries.map((country, index) => (
            <div key={index} className='cards-container'>
              <div className='cards'>
                <div className='cards-header'>
                  <div>
                    <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                  </div>
                  <h4 className='name'>{country.name.common}</h4>
                </div>
                <div>
                  <div className='country-info'>
                    <p>
                      <span><strong>Capital: </strong></span>
                      <span>{country.capital}</span>
                    </p>
                    <p>
                      <span><strong>Location: </strong></span>
                      <span className='borders'>{country.borders}</span>
                    </p>
                    <div className='links'>
                      <a href={`https://www.google.com/maps/search/?api=1&query=${country.name.common}`} target="_blank">Show on Google Maps</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
  
  export default Countries;
  