import {  ImgHTMLAttributes } from 'react';
import  './Avatar.modulo.css';


interface AvatarProps   extends ImgHTMLAttributes <HTMLImageElement> {
  hasBorder?: boolean;
  
  
}

export function Avatar({hasBorder= true, ...props }:AvatarProps) {
  
  return (
    <img
      className='avatar'
     {...props}
    
   />
  );
}

//'avatar'