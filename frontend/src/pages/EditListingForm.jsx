import { useContext, useEffect} from "react";
import {  useParams } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { Loading } from "../components/Loading";
import { FormContext } from "../context/formContext";
import useStyles from './formStyles'
import { Button } from "@material-ui/core";

export const EditListingForm = () => {
    const classes = useStyles();
    const {user} = useContext(AppContext);
    const {listingid} = useParams();

    const {
        geolocationActive,
        onChange,
        fetchListing,
        onUpdateForm, 
        loading,
        thisListing,
        onSetLocationServices,
        cancelListing,
    } = useContext(FormContext)

    useEffect(()=>{
        fetchListing(listingid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const {
        type,
        name,
        bedrooms,
        bathrooms,
        pool,
        spa,
        parking,
        offer,
        price,
        discount,
        latitude,
        longitude, 
        location,
        geoloc,
        purpose,
        description
    } = thisListing;

    const handleSubmit=(e)=>{
        e.preventDefault();
        onUpdateForm(e, thisListing, thisListing._id);
    }



    return loading? <Loading/> : (        
        <div className="pageContainer" >
         <header>
            <p className="profileHeader adjust"> {user.name}, edit your listing</p>
        </header>
        <br/>
        <main>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <label className="formLabel"> Type </label>
                <div className="formButtons" >
                <button 
                    type="button" 
                    className={type === 'hotel' ? 'formButtonActiveType': 'formButtonType'}
                    id='type'
                    value='hotel'
                    onClick={onChange}
                    >
                        Hotel
                    </button>
                    <button 
                    type="button" 
                    className={type === 'apartment' ? 'formButtonActiveType': 'formButtonType'}
                    id='type'
                    value='apartment'
                    onClick={onChange}
                    >
                    Apartment
                    </button>
                    <button 
                    type="button" 
                    className={type === 'wholePlace' ? 'formButtonActiveType': 'formButtonType'}
                    id='type'
                    value='wholePlace'
                    onClick={onChange}
                    >
                        Whole Place
                    </button>
                </div>


                <label className="formLabel"> Purpose </label>
                <div className="formButtons">
                    <button 
                    type="button" 
                    className={purpose === 'beach' ? 'formButtonActivePurpose': 'formButtonPurpose'}
                    id='purpose'
                    value='beach'
                    onClick={onChange}
                    >
                    Beach
                    </button>
                    <button 
                    type="button" 
                    className={purpose === 'ski' ? 'formButtonActivePurpose': 'formButtonPurpose'}
                    id='purpose'
                    value='ski'
                    onClick={onChange}
                    >
                    Ski
                    </button>
                    <button 
                    type="button" 
                    className={purpose === 'cityBreak' ? 'formButtonActivePurpose': 'formButtonPurpose'}
                    id='purpose'
                    value='cityBreak'
                    onClick={onChange}
                    >
                        City Break
                    </button>
                    <button 
                    type="button" 
                    className={purpose === 'nature' ? 'formButtonActivePurpose': 'formButtonPurpose'}
                    id='purpose'
                    value='nature'
                    onClick={onChange}
                    >
                    Nature
                    </button>
                    <button 
                    type="button" 
                    className={purpose === 'delegation' ? 'formButtonActivePurpose': 'formButtonPurpose'}
                    id='purpose'
                    value='delegation'
                    onClick={onChange}
                    >
                    Delegation
                    </button>
                </div>


                <label className="formLabel">
                    Name
                    <input
                    placeholder="eg. Luxury Spa Resort 4*"
                    className="formInputName"
                    type='text'
                    id='name'
                    value={name}
                    onChange={onChange}
                    maxLength='32'
                    minLength='10'
                    required
                    />
                </label>
                <label className='formLabel'>Description</label>
                    <div className="adjust">
                    <textarea
                    className='formInputAddress'
                    type='text'
                    id='description'
                    value={description}
                    onChange={onChange}
                    max={150}
                    />
                </div>

                <div className='flex'>
                    <div className="block">
                    <label className='formLabel'>Bedrooms</label>
                        <div className="adjust">
                            <input
                                className='formInputSmall adjustwidth'
                                type='text'
                                id='bedrooms'
                                value={Number(bedrooms)}
                                onChange={onChange}
                                min={1}
                                max={50}
                                required
                            />
                        </div>
                    </div>
                    <div className="block">
                        <label className='formLabel'>Bathrooms</label>
                        <div className="adjust">
                            <input
                                className='formInputSmall adjustwidth'
                                type='text'
                                id='bathrooms'
                                value={Number(bathrooms)}
                                onChange={onChange}
                                min={1}
                                max={50}
                                required
                            />
                        </div>
                    </div>
                </div>

            <div className="flex">
                <div className="block">
                    {type === "hotel" && (
                    <>
                        <label className="formLabel">Spa</label>
                        <div className='formButtons block'>
                        <button
                            className={spa ? 'formButtonActive' : 'formButton'}
                            type='button'
                            id='spa'
                            value={true}
                            onClick={onChange}
                            >
                            Yes
                        </button>
                        <button
                            className={
                                !spa && spa !== null ? 'formButtonActive' : 'formButton'
                            }
                            type='button'
                            id='spa'
                            value={false}
                            onClick={onChange}
                            >
                            No
                        </button>
                        </div>
                    </>)}
                </div>

                <div className="block">
                    <label className='formLabel'>Parking</label>
                    <div className='formButtons block'>
                        <button
                            className={parking ? 'formButtonActive' : 'formButton'}
                            type='button'
                            id='parking'
                            value={true}
                            onClick={onChange}
                            >
                            Yes
                        </button>
                        <button
                            className={
                                !parking && parking !== null ? 'formButtonActive' : 'formButton'
                            }
                            type='button'
                            id='parking'
                            value={false}
                            onClick={onChange}
                            >
                            No
                        </button>
                    </div>
                </div>

                <div className="block">
                    <label className='formLabel'>Pool</label>
                    <div className='formButtons block'>
                        <button
                            className={pool ? 'formButtonActive' : 'formButton'}
                            type='button'
                            id='pool'
                            value={true}
                            onClick={onChange}
                            >
                            Yes
                        </button>
                        <button
                            className={
                                !pool && pool !== null ? 'formButtonActive' : 'formButton'
                            }
                            type='button'
                            id='pool'
                            value={false}
                            onClick={onChange}
                            >
                            No
                        </button>
                    </div>
                </div>
            </div>

            <label className='formLabel'>Address</label>
            <div className="adjust">
                <textarea
                    className='formInputAddress'
                    type='text'
                    id='location'
                    value={location}
                    onChange={onChange}
                    required
                />
            </div>
                <label className='formLabel'>Turn on location services</label>
                <div className='formButtons'>
                    <button
                    className={geoloc ? 'formButtonActive' : 'formButton'}
                    type='button'
                    id='geoloc'
                    value={true}
                    onClick={onSetLocationServices}
                    >
                    Accept
                    </button>
                    <button
                    className={!geoloc ? 'formButtonActive' : 'formButton'}
                    type='button'
                    id='geoloc'
                    value={false}
                    onClick={onSetLocationServices}
                    >
                    Decline
                    </button>
                </div>

                {!geolocationActive && (
                    <div className='flex'>
                    <div>
                        <label className='formLabel'>Latitude</label>
                        <div className="adjust">
                            <input
                            className='formInputSmall'
                            type='number'
                            id='latitude'
                            value={latitude}
                            onChange={onChange}
                            required
                            />
                        </div>
                    </div>
                    <div>
                        <label className='formLabel'>Longitude</label>
                        <div className="adjust">
                            <input
                            className='formInputSmall adjust'
                            type='number'
                            id='longitude'
                            value={longitude}
                            onChange={onChange}
                            required
                            />
                        </div>
                    </div>
                    </div>
                )}

                <label className='formLabel'>Offer</label>
                <div className='formButtons'>
                    <button
                    className={offer ? 'formButtonActive' : 'formButton'}
                    type='button'
                    id='offer'
                    value={true}
                    onClick={onChange}
                    >
                    Yes
                    </button>
                    <button
                    className={
                        !offer && offer !== null ? 'formButtonActive' : 'formButton'
                    }
                    type='button'
                    id='offer'
                    value={false}
                    onClick={onChange}
                    >
                    No
                    </button>
                </div>

                <label className='formLabel'>Regular Price</label>
                <div className='formPriceDiv adjust'>
                    <input
                    placeholder="10"
                    className='formInputSmall adjustwidth'
                    type='text'
                    id='price'
                    value={Number(price)}
                    onChange={onChange}
                    min={10}
                    max={2000}
                    required
                    />
                    <p className='formPriceText'>€ / night</p>
                </div>

                {offer && (
                    <>
                    <label className='formLabel'>Discounted Price</label>
                    <div className='formPriceDiv adjust'>
                    <input
                        className='formInputSmall adjustwidth'
                        type='text'
                        id='discount'
                        value={Number(discount)}
                        onChange={onChange}
                        min={10}
                        max={2000}
                        required={offer}
                    />
                    <p className='formPriceText'>€ / night</p>
                    </div>
                    </>
                )}

                <label className='formLabel'>Images</label>
                <p className='ImagesInfo adjust'>
                    The first image will be the cover (max 6).
                </p>
                <div className="adjust">
                    <input
                        name='images'
                        className='formInputFile'
                        type='file'
                        id='images'
                        onChange={onChange}
                        multiple
                        max='6'
                        accept=".png, .jpg, .jpeg"
                    />
                </div>
               
                <div  className=" formButtons adjust" style={{marginTop: '4rem', textAlign: 'center'}}>
                <Button
                type='submit' 
                variant="contained"
                className={classes.active} 
                style={{marginRight:'1rem'}}
                >
                    Update Listing
                </Button>
                <Button 
                type='cancel' 
                variant="contained"
                className={classes.inactive} 
                onClick={cancelListing}>
                    Cancel Listing
                </Button>
                </div>
            </form> 
        </main> 
        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
