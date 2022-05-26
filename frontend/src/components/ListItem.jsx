import { Link, useNavigate } from 'react-router-dom'

export const ListItem = ({listing}) => {
    const navigate=useNavigate();
    return ( 
        <>
        <li className='listing'>
        <div className='flex'>
            <div className='listItemContainer'>
                    <img 
                        onClick={()=>navigate(`/listings/${listing._id}`)}
                        src={`http://127.0.0.1:8888/${listing?.images[0]}`} 
                        alt={listing?.name}
                        className={'listingImg'}
                    />
                   <Link to={`/${listing?.id}`} className='listingLink'></Link>  
            </div >
            <div className={window.innerWidth>=1265 ?'listItemInfoDiv flex': 'listItemInfoDiv block'}>
                <div className='blockListItems' >
                    <p className='listItemLocation'>
                        {listing?.location}
                    </p>       
                    <p className='listItemName'>
                            {listing?.name}
                    </p> 
                    <p className='listItemPrice'>
                        ${listing?.offer ? listing?.discount : listing?.price} /night
                    </p> 
                    <div className={window.innerWidth<=416 ? 'flex': 'block'}>
                        <div>
                            <p className='listType' style={{backgroundColor: '#00cc66', color:'whitesmoke'}}>{listing.purpose}</p>
                            <p className='listType'>
                                {listing?.bedrooms > 1? `${listing?.bedrooms} bedrooms` : '1 bedroom'}
                            </p>
                            <p className='listType'>
                                {listing?.bathrooms > 1 ? `${listing?.bathrooms} bathrooms` : `1 bathroom`}
                            </p>
                        </div>
                        { (listing.pool || listing.spa || listing.parking) && <div className='facilitiesDiv'>
                            <p className={'facilities'}>Facilities{' '} </p>
                        {
                            listing?.pool && <p className='listType' style={{color: 'whitesmoke', backgroundColor:'black', border: '1px solid #242424'}}>Pool</p>
                        }
                        {
                            listing?.spa && <p className='listType' style={{color: 'whitesmoke', backgroundColor:'black', border: '1px solid #242424'}}>Spa</p>
                        }
                        {
                            listing?.parking && <p className='listType' style={{color: 'whitesmoke', backgroundColor:'black', border: '1px solid #242424'}}>Parking</p>
                        }
                        </div>}
                    </div> 
                </div>
                {listing.description && 
                <div className='block descDiv' >
                    <p className='about'>About</p>
                    <p className='listItemDesc'>{window.innerWidth <= 1265 ? (listing.description.slice(0,55)+' ...') : listing.description}</p>
                </div>}
            </div>
        </div>
        </li>
        </>
    )
}