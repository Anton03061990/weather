import React from 'react'

interface Props {
    id: string;
}

export const GlobalSvgSelector = ({ id }: Props) => {
    switch (id) {
        case 'header-logo':
            return (

            )
            
    
        default:
            return null;
    }
  return <div>GlobalSvgSelector</div>
}                             