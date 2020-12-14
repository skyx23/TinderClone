import React from 'react';
import './swipebuttons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


function Swipebuttons() {
    return (
        <div className='swipebuttons'>
            <IconButton   className='swipebutton__repeat'>
                <ReplayIcon fontSize='large'></ReplayIcon></IconButton>
            <IconButton   className='swipebutton__left'>
                <CloseIcon fontSize='large'></CloseIcon></IconButton>
            <IconButton   className='swipebutton__star'>
                <StarRateIcon fontSize='large'></StarRateIcon></IconButton>
            <IconButton   className='swipebutton__right'>
                <FavoriteIcon fontSize='large'></FavoriteIcon></IconButton>
            <IconButton   className='swipebutton__lightning'>
                <FlashOnIcon fontSize='large'></FlashOnIcon></IconButton>
        </div>
    )
}

export default Swipebuttons;
