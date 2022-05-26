import {FaSearch} from 'react-icons/fa'
import { CalendarPicker } from "./CalendarPicker"
import {TextField} from "@material-ui/core"
import { useNavigate } from 'react-router-dom'

export const SearchBox = ()=>{

    const navigate = useNavigate();

    return (
        <div className='searchContainer'>
            <div className="searchDiv">
                <CalendarPicker />
                <TextField id="outlined" label="Search by location" style={{borderBottom: '1px solid #0f0f0f', borderLeft: '1px solid #0f0f0f'}}  variant="outlined" className={"searchInput"}/>
                <button className="btn searchBtn" onClick={()=>navigate('/listings')} >
                    <FaSearch className='iconStyle' style={{marginTop:'6px', marginRight: '2px'}} />
                </button>
            </div>
        </div>
    )
}