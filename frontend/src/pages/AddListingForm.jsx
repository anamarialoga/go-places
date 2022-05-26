import { useContext, useEffect } from "react";
import { AppContext } from "../context/appContext";
import { Loading } from "../components/Loading";
import { FormContext } from "../context/formContext";
import useStyles from './formStyles'
import { Button } from "@material-ui/core";

export const AddListingForm = () =>{

    const classes=useStyles();

    const {user} = useContext(AppContext);
    const {
        geolocationActive,
        cancelListing, 
        loading, 
        setLoading, 
        listing, 
        onSubmitForm, 
        onSetLocationServices, 
        onMutate, 
    } = useContext(FormContext);
 
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
        // eslint-disable-next-line no-unused-vars
        images,
        latitude,
        longitude, 
        location,
        geoloc,
        purpose,
        description,
    } = listing;

    useEffect(()=>{
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmitForm(e, listing);
    }


    return loading? <Loading/> : (        
        <div className="pageContainer" >
         <header>
            <p className="profileHeader adjust"> {user.name}, add a property listing</p>
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
                    onClick={onMutate}
                    >
                        Hotel
                    </button>
                    <button 
                    type="button" 
                    className={type === 'apartment' ? 'formButtonActiveType': 'formButtonType'}
                    id='type'
                    value='apartment'
                    onClick={onMutate}
                    >
                    Apartment
                    </button>
                    <button 
                    type="button" 
                    className={type === 'wholePlace' ? 'formButtonActiveType': 'formButtonType'}
                    id='type'
                    value='wholePlace'
                    onClick={onMutate}
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
                    onClick={onMutate}
                    >
                    Beach
                    </button>
                    <button 
                    type="button" 
                    className={purpose === 'ski' ? 'formButtonActivePurpose': 'formButtonPurpose'}
                    id='purpose'
                    value='ski'
                    onClick={onMutate}
                    >
                    Ski
                    </button>
                    <button 
                    type="button" 
                    className={purpose === 'cityBreak' ? 'formButtonActivePurpose': 'formButtonPurpose'}
                    id='purpose'
                    value='cityBreak'
                    onClick={onMutate}
                    >
                        City Break
                    </button>
                    <button 
                    type="button" 
                    className={purpose === 'nature' ? 'formButtonActivePurpose': 'formButtonPurpose'}
                    id='purpose'
                    value='nature'
                    onClick={onMutate}
                    >
                    Nature
                    </button>
                    <button 
                    type="button" 
                    className={purpose === 'delegation' ? 'formButtonActivePurpose': 'formButtonPurpose'}
                    id='purpose'
                    value='delegation'
                    onClick={onMutate}
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
                    onChange={onMutate}
                    maxLength='20'
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
                    onChange={onMutate}
                    maxLength={150}
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
                                onChange={onMutate}
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
                                onChange={onMutate}
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
                            onClick={onMutate}
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
                            onClick={onMutate}
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
                            onClick={onMutate}
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
                            onClick={onMutate}
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
                            onClick={onMutate}
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
                            onClick={onMutate}
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
                    onChange={onMutate}
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
                            onChange={onMutate}
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
                            onChange={onMutate}
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
                    onClick={onMutate}
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
                    onClick={onMutate}
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
                    onChange={onMutate}
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
                        onChange={onMutate}
                        min={0}
                        max={2000}
                        required={offer}
                    />
                    <p className='formPriceText'>€ / night</p>
                    </div>
                    </>
                )}

                <label className='formLabel'>Images</label>
                <p className='ImagesInfo adjust'>
                    The first image will be the cover (max 8).
                </p>
                <div className="adjust">
                    <input
                        name='images'
                        className='formInputFile'
                        type='file'
                        id='images'
                        onChange={onMutate}
                        multiple
                        max='6'
                        accept=".png, .jpg, .jpeg"
                        required
                    />
                </div>
               
                <div  className=" formButtons adjust" style={{marginTop: '4rem', textAlign: 'center'}}>
                <Button
                type='submit' 
                variant="contained"
                className={classes.active} 
                style={{marginRight:'1rem'}}
                >
                    Create Listing
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