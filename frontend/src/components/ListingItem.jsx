import {ReactComponent as DeleteIcon} from '../common/svg/deleteIcon.svg'
import {ReactComponent as EditIcon} from '../common/svg/editIcon.svg'
import bedIcon from '../common/svg/bedIcon.svg'
import bathtubIcon from '../common/svg/bathtubIcon.svg'
import { Link, useNavigate } from 'react-router-dom'

export const ListingItem = ({listing, onDelete, onEdit}) => {
    const navigate=useNavigate();
    return ( 
        <>
        <li className='listing'>
            <p className='listingLocation'>
                {listing?.location}
            </p>
        <div className='listingItemContainer'>
        {onDelete && <DeleteIcon onClick={onDelete} className='listingDelete'/>}
        {onEdit && <EditIcon onClick={onEdit} className='listingEdit'/> }

                <img 
                    onClick={()=>navigate(`/listings/${listing._id}`)}
                    src={`http://127.0.0.1:8888/${listing?.images[0]}`} 
                    alt={listing?.name}
                    className={'listingImg'}
                />
               
                    <div className='listingNameDiv block'>
                    <Link to={`/${listing?.id}`} className='listingLink'>
                        <p className='listingName'>
                            {listing?.name}
                        </p>
                    </Link>      
                        <p className='listingPrice'>
                            ${listing?.offer ? listing?.discount : listing?.price} /night
                        </p>  
                    </div>
                    <div className='listingInfoDiv'>
                        <img src={bedIcon} alt='bed'/>
                        <p className='listingInfoText'>
                            {listing?.bedrooms > 1? `${listing?.bedrooms} bedrooms` : '1 bedroom'}
                        </p>
                        <img src={bathtubIcon} alt='bath'/>
                        <p className='listingInfoText'>
                            {listing?.bathrooms > 1 ? `${listing?.bathrooms} bathrooms` : `1 bathroom`}
                        </p>
                    </div>
        </div >
        </li>
        </>
    )
}