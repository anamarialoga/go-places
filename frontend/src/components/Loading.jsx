import LoadingSpinner from '../common/Loading-Gif.gif'

export const Loading = () => {
    return (
        <div className='loadingSpinnerContainer'>
          <div className='loadingSpinner'>
              <svg src = {LoadingSpinner} alt='loading'/>
          </div>
        </div>
      )
}