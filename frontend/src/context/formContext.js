import { createContext, useState} from "react";
import { toast } from "react-toastify";
import axios from 'axios';
toast.configure();

const GEO_API_URI = "AIzaSyChJb7b-LRNlR5mMgFdIQdD_yG0-WxYnjA";

export const FormContext = createContext({});

export const FormProvider = ({children})=> {
    const [loading, setLoading] = useState(false);

    const initialListing = {
        type: 'hotel',
        name: '',
        bedrooms: 1,
        bathrooms: 1,
        pool: false,
        spa: false,
        parking: false,
        offer: false,
        price: 10,
        discount: 0,
        images: [],
        latitude: 0,
        longitude: 0, 
        location: '',
        geoloc: true, 
        purpose: 'beach',
        description: '',
        kitchen: false,
        people: 1,
    }


    const [listing, setListing] = useState(initialListing);
    const [thisListing, setThisListing] = useState(initialListing)

    const onMutate = (e) => {
        let boolean = null;
        if(e.target.value === 'true')
        {    boolean=true;  }
        if(e.target.value === 'false')
        {    boolean=false;  }

        if(e.target.files ){
            setListing((prevState) =>({...prevState, images:e.target.files}));
        }
        if(!e.target.files){
            setListing((prevState)=> ({...prevState, [e.target.name]: boolean?? e.target.value}))
        }
    }
    

    const onSubmitForm = async (e, formdata) =>{
        e.preventDefault();
        //HANDLING ERRORS CLIENT-SIDE
        if(formdata.offer && (Number(formdata.discount)>=Number(formdata.price))){
            toast.error("The regular price must be higher than the discounted price!");
        }else if(formdata.images.length>8 || formdata.images.length<1){
            toast.error("You must upload at least 1 image, but not more than 8!");
        }else if(formdata.name === '' || formdata.location===''){
            toast.error('You must fulfil all fields!');
        }else if(formdata.price < 10  || formdata.price === "" ){
            toast.error('You must specify a valid price!')
        }else if(formdata.offer === true && formdata.discount < 10){
            toast.error('You must specify a valid discount price!')
        }


        //HANDLING GEOLOCATION
        let geolocation={};
        let location;

        if(formdata.geoloc === true){
            const resp = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formdata.location}&key=${GEO_API_URI}`)
            const data = await resp.json();
            console.log(data)
            geolocation.lat=data.results[0]?.geometry.location.lat ?? 0;
            geolocation.long=data.results[0]?.geometry.location.lng ?? 0;

            if (data.status === 'ZERO_RESULTS'  ){
                location='';
            } else {
                location=data.results[0].formatted_address;
            }
            if(location===''){
                toast.error('You must enter a valid address!');
            }
        }
        else{
            geolocation.lat=formdata.latitude;
            geolocation.long= formdata.longitude;
            location = formdata.location; 
        }

        //CREATE THE LISTING OBJECT TO BE UPLOADED
        const formData = new FormData();
        formData.append('type', formdata.type);
        formData.append('name', formdata.name);
        formData.append('bedrooms', Number(formdata.bedrooms));
        formData.append('bathrooms', Number(formdata.bathrooms));
        formData.append('pool', formdata.pool);
        formData.append('spa', formdata.spa);
        formData.append('parking', formdata.parking);
        formData.append('offer', formdata.offer);
        formData.append('price', Number(formdata.price));
        formData.append('discount', Number(formdata.discount));
        formData.append('people', Number(formdata.people));
        formData.append('kitchen', Number(formdata.kitchen));
        formData.append('latitude', Number(geolocation.lat));
        formData.append('longitude', Number(geolocation.long));
        formData.append('description', formdata.description)
        formData.append('location', location);
        formData.append('geoloc', formdata.geoloc);
        formData.append('purpose', formdata.purpose);

       for(const file of formdata.images){
           formData.append("images", file);
       }

        const config = {
            headers: { 
            'Content-Type': 'multipart/form-data',
             Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        };
        try{
            if((formData.get('location') !== "") && (formData.get('price') > 0) && (((formData.get('offer') === 'true') && (formData.get('discount') > 10)) || ((formData.get('offer') === 'false') && (formData.get('discount') === '0')))){
                setLoading(true);
                const {data} = await axios.post(
                    "http://localhost:1179/api/listings/",
                    formData, 
                    config
                );
                console.log(data);
                setLoading(false);
                toast.success('Listing created successfully!')
                window.location.href="/mylistings"
                setListing(initialListing);
            }else{
                setListing(initialListing);
            }
        } 
        catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const [initialFetched, setInitialFetched] = useState(initialListing);
    const fetchListing = async (listingid) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        try{
            setLoading(true);
            const {data} = await axios.get(`http://localhost:1179/api/listings/me/${listingid}/`, config);
            setLoading(false);
            setThisListing(data);
            setInitialFetched(data);
        }catch(error){
            console.log(error.response?.data?.message)
        }
    }

    const onUpdateForm = async (e, formdata, listingid) => {
        e.preventDefault();
        //HANDLING ERRORS CLIENT-SIDE
        if(formdata.offer && (Number(formdata.discount)>=Number(formdata.price))){
            toast.error("The regular price must be higher than the discounted price!");
        }else if(formdata.name === '' || formdata.location===''){
            toast.error('You must fulfil all fields!');
        }else if(formdata.price < 10  || formdata.price === "" ){
            toast.error('You must specify a valid price!')
        }else if(formdata.offer === true && formdata.discount < 10){
            toast.error('You must specify a valid discount price!')
        }
        //HANDLING GEOLOCATION
        let geolocation={};
        let location;
   
        if(formdata.geoloc === true){
            const resp = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formdata.location}&key=${GEO_API_URI}`)
            const data = await resp.json();

            geolocation.lat=data.results[0]?.geometry.location.lat ?? 0;
            geolocation.long=data.results[0]?.geometry.location.lng ?? 0;

            if (data.status === 'ZERO_RESULTS'){
                location='';
            } else {
                location=data.results[0].formatted_address;
            }
            if(location===''){
                toast.error('You must enter a valid address!');
            }
        }
        else{
            geolocation.lat=formdata.latitude;
            geolocation.long= formdata.longitude;
            location = formdata.location; 
        }

        //CREATE THE LISTING OBJECT TO BE UPLOADED
        const formData = new FormData();
        formData.append('type', formdata.type);
        formData.append('name', formdata.name);
        formData.append('bedrooms', Number(formdata.bedrooms));
        formData.append('bathrooms', Number(formdata.bathrooms));
        formData.append('pool', formdata.pool);
        formData.append('spa', formdata.spa);
        formData.append('parking', formdata.parking);
        formData.append('offer', formdata.offer);
        formData.append('price', Number(formdata.price));
        formData.append('people', Number(formdata.people));
        formData.append('kitchen', Number(formdata.kitchen));
        formdata.offer ? formData.append('discount', Number(formdata.discount)) : formData.append('discount', 0)
        formData.append('latitude', Number(geolocation.lat));
        formData.append('longitude', Number(geolocation.long));
        formData.append('location', location) ;
        formData.append('geoloc', formdata.geoloc);
        formData.append('purpose', formdata.purpose);
        formData.append('description', formdata.description)

        console.log((formData.get('location') !== "") && (formData.get('price') > 0) && (((formData.get('offer') === 'true') && (formData.get('discount') > 10)) || ((formData.get('offer') === 'false') && (formData.get('discount') === '0'))))

    if(formdata.images) {
       for(const file of formdata.images){
           formData.append("images", file);
       }
    }

        const config = {
            headers: { 
            'Content-Type': 'multipart/form-data',
             Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        };
        try{
            if((formData.get('location') !== "") && (formData.get('price') > 0) && (((formData.get('offer') === 'true') && (formData.get('discount') > 10)) || ((formData.get('offer') === 'false') && (formData.get('discount') === '0')))){
                setLoading(true);
                const {data} = await axios.put(
                    `http://localhost:1179/api/listings/${listingid}`,
                    formData, 
                    config
                );
                console.log(data);
                setLoading(false);
                toast.success('Listing updated successfully!');
                window.location.href="/mylistings"
            }else{
                setThisListing(initialFetched) 
        }} 
        catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    const onChange = (e) => {
        let boolean = null;
        if(e.target.value === 'true')
        {    boolean=true;  }
        if(e.target.value === 'false')
        {    boolean=false;  }

        if(e.target.files ){
            setThisListing((prevState) =>({...prevState, images:e.target.files}));
        }
        if(!e.target.files){
            setThisListing((prevState)=> ({...prevState, [e.target.name]: boolean ?? e.target.value}))
        }
    }

    const cancelListing = () => {
        window.location.href = '/mylistings';
        setListing(initialListing);
        setThisListing(initialListing);
    }

    return (
        <FormContext.Provider value={{
            listing,
            setListing,
            thisListing,
            loading,
            setLoading,
            onSubmitForm,
            onMutate,
            fetchListing,
            onUpdateForm, 
            cancelListing, 
            onChange, 
        }}>
            {children}
        </FormContext.Provider>
    )
}