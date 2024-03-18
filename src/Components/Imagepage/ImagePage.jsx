import React from 'react';


const ImagePage = ({data}) => {
    console.log(data);
    const {photo,name}=data;
  

    return (
        <div className="flex w-full flex-wrap content-center justify-center p-5 ">
        <div >
          <div className="w-80 bg-gray-100 p-3">
            <img className="h-52 w-full object-cover" src={photo} />
            <ul className="mt-3 flex flex-wrap">
              <li className="mr-auto">
                
                  <p className='font-semibold'>{name}</p>
              </li>
              <li className="mr-2">
                <a href="#" className="flex text-gray-400 hover:text-gray-600">
                  <svg className="mr-0.5" style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                  </svg>
                  24
                </a>
              </li>
          
             
            </ul>
          </div>
      
       
      
      
      
      
        </div>
      </div>
    );
};

export default ImagePage;