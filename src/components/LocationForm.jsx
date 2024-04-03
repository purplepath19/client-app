import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useState } from 'react'
  

const LocationForm = ({ setNewSchool }) => {
    const [address, setAddress] = useState('');


    const handleAddressChange = (newAddress) => {
        setAddress(newAddress);
      };
    
      const handleSelect = async (newAddress) => {
        try {
          const results = await geocodeByAddress(newAddress);
          const latLng = await getLatLng(results[0]);
          console.log("RESULTS location ======>", results[0])
          // Update the state with the selected location's details, including latitude and longitude.
            setAddress(newAddress);
            setNewSchool((prev) => ({...prev, address: results[0].formatted_address}));
            setNewSchool((prev) => ({...prev, latitude: results[0].geometry.location.lat()}));
            setNewSchool((prev) => ({...prev, longitude: results[0].geometry.location.lng()}));
        } catch (error) {
          console.error('Error selecting location:', error);
        }
      };


  return (
    <div>
        <PlacesAutocomplete
            value={address}
            onChange={handleAddressChange}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
                <input
                {...getInputProps({
                    placeholder: 'location'
                })}
                />
                <ul >
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                    return (
                    <li 
                        {...getSuggestionItemProps(suggestion, {
                        
                        })}
                    >
                        <span>{suggestion.description}</span>
                    </li>
                    );
                })}
                </ul>
            </div>
            )}
        </PlacesAutocomplete>
    </div>
  )
}

export default LocationForm;