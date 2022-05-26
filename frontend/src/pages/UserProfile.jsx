import { AppContext } from '../context/appContext';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import visibilityIcon from '../common/svg/visibilityIcon.svg'
import { ListingItem } from '../components/ListingItem';
import { Loading } from '../components/Loading';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { Button } from '@material-ui/core';
import useStyles from '../components/navbarStyles';
toast.configure();


export const UserProfile = () => {
    const classes = useStyles();
    const { user, loadingList, onDeleteListing, onEditListing, fetchMyListings, myListings, onSubmitChangeDetails, changeDetails} = useContext(AppContext);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        password: ''
    })

    const navigate = useNavigate();
    const {name, email, password} = formData;
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading]=useState(true);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(()=>{
        fetchMyListings();
        setLoading(false);
    },[fetchMyListings]);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

   
    //PAGINATION
    const [pageNumber, setPageNumber] = useState(0);
    const [listingsPerPage, setListingsPerPage] = useState(4);
    const pageCount = Math.ceil(myListings.length / listingsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(()=>{
        if(windowDimensions.width>=1725)
            setListingsPerPage(4);
        else if(windowDimensions.width >= 1488 && windowDimensions.width < 1725)
            setListingsPerPage(3);
        else setListingsPerPage(2);
    }, [windowDimensions])

    return (loading) ? <Loading/>: (       
    <div className="pageContainer center"  >
        <br/>
    <main >
    <div style={{marginLeft: '10%', width: '80%'}} >
            <div className="editPersonalDetails" >
                <p className="detail"></p>
                <form className="profileCard">
                    <input type="text" id="name"
                    className={!changeDetails ? 'profileName profileNameInactive' : 'profileName' } 
                    disabled={!changeDetails ? true : false} 
                    value={name}
                    onChange={(e)=>setFormData({
                        ...formData, 
                        [e.target.id]: e.target.value
                    })}
                    />
                </form>
            </div>
            <div className="editPersonalDetails" >
                <p className="detail"></p>
                <div className="profileCard">
                    <input 
                      className= {!changeDetails ?'profilePass profilePassInactive' : 'profilePass'}
                        type={showPass? 'text': 'password'} 
                        id='password'  
                        disabled={!changeDetails ? true : false} 
                        placeholder={!changeDetails ? "••••••••" : ""}
                        value={password}
                        onChange={(e)=>setFormData({
                            ...formData, 
                            [e.target.id]: e.target.value
                        })}
                            />
                    { changeDetails && <img src = {visibilityIcon} alt="visibility" className='profileShowPass' onClick={()=>setShowPass(!showPass)}/>}
                </div>
            </div>
            <div className="editPersonalDetails">
            <p className="detail"></p>
                <form className="profileCard" >
                    <input type="text" id="email" 
                        className= 'profileEmail profileEmailInactive' 
                        disabled
                        value={email}
                        placeholder={email}
                        onChange={(e)=>setFormData({
                            ...formData, 
                            [e.target.id]: e.target.value
                        })}
                        />
                </form>
            </div>
            <br/>
            <div className='flex center'>
                <div className='space-right'>
                    <Button 
                        variant="text"
                        style={{fontFamily: "Montserrat", color: "#00cc66"}}
                        // className='btn'  
                        onClick={()=>{navigate('/addlisting')}}> 
                        Add a property listing
                    </Button>
                </div>
                <div >
                    <Button
                        className={changeDetails? classes.editDetailsBtn : classes.inactive}    
                        onClick={()=> onSubmitChangeDetails(formData)}>
                        Edit personal details
                    </Button>
                </div>
            </div>
        </div>
        <header className="profileBar">
            <p className='profileHeader'>
            </p>
        </header>
        {loadingList === true && <Loading/>}
        {myListings.length > 0 && loadingList===false  &&
        <>
                <ul className='flex'>
                {Array.from(myListings)?.slice(pageNumber * listingsPerPage, pageNumber * listingsPerPage + listingsPerPage).map((listing) => (
                    <ListingItem 
                        key={listing.name} 
                        listing={listing} 
                        onDelete={()=> onDeleteListing(listing._id)} 
                        onEdit={()=> onEditListing(listing._id)}
                    />
                    ))}
                </ul>
                <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={myListings.length > 0 ? ">" : ""}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                />
        </>
        }
        {( myListings.length===0  && loadingList===false) && (<div>Currently, you don't have any property listings</div>) }
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </main>
        </div>
        )
}